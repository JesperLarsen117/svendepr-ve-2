import { CheckLoginService } from "./../../services/check-login.service";
import { HttpService } from "./../../services/http.service";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  login;
  valid = true;
  loginForm = this.fb.group({
    username: ["", Validators.required],
    password: ["", [Validators.required, Validators.minLength(4)]],
  });

  constructor(
    public http: HttpService,
    public checkLogin: CheckLoginService,
    public CheckLogin: CheckLoginService,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    if (this.CheckLogin.getCookie("user_id") != null) {
      window.location.href = "/myprogram";
    }
  }
  onSubmit() {
    const formData: any = new FormData();
    formData.append("username", this.loginForm.get("username").value);
    formData.append("password", this.loginForm.get("password").value);
    if (
      !this.loginForm.get("username").invalid &&
      !this.loginForm.get("password").invalid
    ) {
      this.http.getLogin(formData).subscribe(
        (res: any) => {
          if (res.access_token) {
            console.log("Det virker sky");

            this.setCookie("token", res.access_token, 7);
            this.setCookie("user_id", res.user_id, 7);
            this.login = true;
            this.checkLogin.toggle.next(this.login);
            window.location.href = "/";
          }
        },
        (Error) => {
          console.log("Brugernavn eller kodeord er forkert");
          this.valid = false;
        }
      );
    }
  }
  setCookie(cnamne, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString;
    document.cookie = `${cnamne} = ${cvalue}; ${expires};path=/`;
  }
  get email() {
    return this.loginForm.get("username");
  }
  get password() {
    return this.loginForm.get("password");
  }
}

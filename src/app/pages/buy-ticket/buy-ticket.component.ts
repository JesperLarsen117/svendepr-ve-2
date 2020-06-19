import { CheckLoginService } from "./../../services/check-login.service";
import { HttpService } from "./../../services/http.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-buy-ticket",
  templateUrl: "./buy-ticket.component.html",
  styleUrls: ["./buy-ticket.component.scss"],
})
export class BuyTicketComponent implements OnInit {
  buyFrom = this.fb.group({
    amount: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    name: ["", Validators.required],
    address: ["", Validators.required],
    zipcode: ["", [Validators.required, Validators.max(4)]],
    city: ["", Validators.required],
    campingAmount: ["", Validators.required],
    password: ["", Validators.required],
    repassword: ["", Validators.required],
    campId: ["", Validators.required],
    type: ["", Validators.required],
  });

  id = this.route.snapshot.paramMap.get("id");
  passwordMatch = false;
  ticketInfo: any;
  price: any;
  constructor(
    public http: HttpService,
    public route: ActivatedRoute,
    public fb: FormBuilder,
    public CheckLogin: CheckLoginService
  ) {}

  ngOnInit(): void {
    this.http.getTickets(this.id).subscribe((res: any) => {
      this.ticketInfo = res.item;
      this.price = res.item.price;
    });
    console.log(this.f);

    this.f.repassword.valueChanges.subscribe((value) => {
      this.f.password.value === value
        ? (this.passwordMatch = true)
        : (this.passwordMatch = false);
    });
    this.f.password.valueChanges.subscribe((value) => {
      this.f.repassword.value === value
        ? (this.passwordMatch = true)
        : (this.passwordMatch = false);
    });
  }

  ticketAmountChange(amount) {
    amount <= 0 ? (amount = 0) : (amount = amount);
    const htmlPrice = document.getElementById("price");
    this.price =
      parseInt(htmlPrice.textContent.replace("DKK ", ""), 10) * amount;
  }

  onSubmit() {
    const formData: any = new FormData();
    formData.append("email", this.buyFrom.get("email").value);
    formData.append("password", this.buyFrom.get("password").value);
    formData.append("name", this.buyFrom.get("name").value);
    formData.append("address", this.buyFrom.get("address").value);
    formData.append("zipcode", this.buyFrom.get("zipcode").value);
    formData.append("city", this.buyFrom.get("city").value);
    formData.append("ticket_id", this.id);
    formData.append("camp_id", this.buyFrom.get("campId").value);
    formData.append("quantity", this.buyFrom.get("amount").value);
    formData.append("type", this.buyFrom.get("type").value);
    const headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.CheckLogin.getCookie("token")}`
    );
    this.http.BuyTicket(formData, { headers }).subscribe((res: any) => {
      console.log(res);
      if (res.status === true) {
        window.location.href = "purchase-accepted";
      }
    });
  }
  get f() {
    return this.buyFrom.controls;
  }
}

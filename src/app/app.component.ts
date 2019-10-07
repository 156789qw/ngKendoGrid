import { Component } from "@angular/core";
import { products } from "./products";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  title = "ngKendoGrid";
  public gridData: any[] = products;
}

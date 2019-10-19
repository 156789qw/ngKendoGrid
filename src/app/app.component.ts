import { Component } from "@angular/core";
import { products } from "./products";
import { columnsProducts } from "./columns";

export interface ColumnSetting {
  field: string;
  title: string;
  format?: string;
  type: "text" | "numeric" | "boolean" | "date";
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  title = "ngKendoGrid";
  public gridData: any[] = products;
  debbuger;
  public gridColumns: ColumnSetting[] = columnsProducts;
}

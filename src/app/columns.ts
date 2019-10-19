import { ColumnSetting } from "./app.component";

export const columnsProducts: ColumnSetting[] = [
  {
    field: "ProductName",
    title: "Product Name",
    type: "text"
  },
  {
    field: "UnitPrice",
    format: "{0:c}",
    title: "Unit Price",
    type: "numeric"
  },
  {
    field: "FirstOrderedOn",
    format: "{0:d}",
    title: "First Ordered",
    type: "date"
  }
];

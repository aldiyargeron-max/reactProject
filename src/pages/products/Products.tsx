import { FC } from "react";
import { Link } from "@tanstack/react-router";
import { products } from "./model/Product";
import { ProductsQuerySearch } from "../../routes/products";
import { Typography } from "../../shared/ui/Typography";
import { Card } from "../../shared/ui/Card";
import { Button } from "../../shared/ui/Button";

export const Products: FC<ProductsQuerySearch> = function Products(props) {
  const list = products
    .filter(
      (item) =>
        item.price >= (props.from ?? item.price) &&
        item.price <= (props.to ?? item.price)
    )
    .map((item) => (
      <li key={item.id.toString()}>
        <Card>
          <Typography size={20} align={"center"} className="mb-3">
            {item.name}
          </Typography>
          <Link
            to={`/products/$productID`}
            params={{ productID: item.id.toString() }}
          >
            <Button mode={"dark"}>{"Перейти"}</Button>
          </Link>
        </Card>
      </li>
    ));

  return <ul>{list}</ul>;
};
import { createFileRoute } from "@tanstack/react-router";
import { Products } from "../../pages/products/Products";

export type ProductsQuerySearch = {
  from?: number;
  to?: number;
};

export const Route = createFileRoute("/products/")({
  validateSearch: (search: Record<string, unknown>): ProductsQuerySearch => {
    return {
      from: search.from ? Number(search.from) : undefined,
      to: search.to ? Number(search.to) : undefined,
    };
  },
  component: ProductsRoute,
});

function ProductsRoute() {
  const query = Route.useSearch();
  return <Products {...query} />;
}
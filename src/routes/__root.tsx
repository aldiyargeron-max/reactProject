import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  notFoundComponent: () => <p>Страница не найдена</p>,
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          {"Главная"}
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          {"Вторая"}
        </Link>
        <Link to="/products" className="[&.active]:font-bold">
          {"Товары"}
        </Link>
      </div>
      <div className="p-2">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
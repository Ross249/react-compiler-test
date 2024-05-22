import { createRootRoute, Outlet } from "@tanstack/react-router";
import NotFound from "../components/notFound";

export const Route = createRootRoute({
  notFoundComponent: () => <NotFound />,
  component: () => (
    <>
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});

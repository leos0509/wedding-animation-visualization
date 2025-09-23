import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanstackDevtools } from "@tanstack/react-devtools";

import Header from "../components/Header";
import NotFoundComponent from "@/components/NotFoundComponent";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";
import NavMenu from "@/components/NavMenu";

export const Route = createRootRoute({
  component: () => (
    <SmoothScrollWrapper>
      <Header />
      <Outlet />
      <NavMenu />
      <TanstackDevtools
        config={{
          position: "bottom-left",
        }}
        plugins={[
          {
            name: "Tanstack Router",
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </SmoothScrollWrapper>
  ),
  notFoundComponent: () => <NotFoundComponent />,
});

import { router } from "../..//index";

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

declare module "@tanstack/react-router" {
    interface StaticDataRouteOption {
        title?: string
    }
}
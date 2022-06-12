interface RouteHandler {
    (params: string[], search: any, router: Router): any;
}
interface RouteEvent {
    detail: {
        path: string;
        search: string;
    };
}
export declare const navigate: (path: string) => void;
export default class Router {
    #private;
    currentRoute: any;
    notFoundRoute: any;
    boundHandleRoute: any;
    boundHandlePopState: any;
    handleRoute(e: RouteEvent): void;
    handlePopState(): void;
    listen(): void;
    attachListeners(): void;
    on(path: string, handler: RouteHandler): void;
    off(path: string): void;
}
export {};
//# sourceMappingURL=router.d.ts.map
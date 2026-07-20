import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("blog", "routes/blog.tsx"),
    route("about","routes/about.tsx"),
    route("projects", "routes/projects.tsx"),
    route("unavailable", "routes/unavailable.tsx"),
    route("*", "routes/404.tsx"),
] satisfies RouteConfig;

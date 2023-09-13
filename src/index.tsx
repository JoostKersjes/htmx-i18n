import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { Elysia } from "elysia";
import { HtmlTemplate } from "./HtmlTemplate";

const app = new Elysia()
  .use(html())
  .use(staticPlugin())
  .get("/", () => <HtmlTemplate>Home</HtmlTemplate>)
  .get("/about", () => <HtmlTemplate>About</HtmlTemplate>)
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);

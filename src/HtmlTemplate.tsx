import { type PropsWithChildren } from "@kitajs/html";

export const HtmlTemplate = ({ children }: PropsWithChildren) => {
  return `
    <!DOCTYPE html>
    <html lang="en" dir="ltr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>HTMX & i18n</title>
      <script
       src="https://unpkg.com/htmx.org@1.9.5"
        integrity="sha384-xcuj3WpfgjlKF+FXhSQFQ0ZNr39ln+hwjN3npfM9VBnUskLolQAcN80McRIVOPuO"
        crossorigin="anonymous"
      ></script>
    </head>
    <body><a href="/">Home</a><a href="/about">About</a>${children}</body>
    </html>`;
};

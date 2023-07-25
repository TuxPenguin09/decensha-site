import React, { useState } from "react";
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";

import styles from "./index.css";

import logo from './assets/logo.png'
import './header.css'
import './footer.css'

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: styles },
];

export function Header() {
  const [mobmenuOpen, setMobMenuOpen] = useState(false);
  return (
    <header>
      <span><img src={logo} className="headerlogo" /></span>
      <ul className="headermenu-cont">
        <li>Download Client</li>
        <li>Sponsors</li>
        <li>Server List</li>
      </ul>
      {mobmenuOpen ? (
        <div className="headermenumob-menubutton" onClick={() => setMobMenuOpen(false)}>
          X
        </div>) : (
        <div className="headermenumob-menubutton" onClick={() => setMobMenuOpen(true)}>
          ☰
        </div>
      )}
      {mobmenuOpen ? (
        <ul className="headermenumob-cont">
          <li onClick={() => setMobMenuOpen(false)}>Download Client</li>
          <li onClick={() => setMobMenuOpen(false)}>Sponsors</li>
          <li onClick={() => setMobMenuOpen(false)}>Server List</li>
        </ul>
      ) : null}
    </header>
  )
}

export function Footer() {
  return (
    <footer>
      <div className="footer-cont">
        <div className="footer-col">
          <nav>
            <ul><span id="footermenu-header">leafstudiosDot</span>
              <li onClick={() => window.open("https://github.com/sponsors/leafstudiosDot", "_blank")}>Sponsor via Github</li>
              <li onClick={() => window.open("https://www.leafstudiosdot.co.uk/", "_blank")}>About</li>
              <li onClick={() => window.open("https://hodots.com", "_blank")}>hodots.</li>
              <li onClick={() => window.open("https://www.leafstudiosdot.co.uk/social", "_blank")}>Social</li>
            </ul>

            <ul><span id="footermenu-header">Resources</span>
              <li>Documentation</li>
              <li onClick={() => window.open("https://github.com/leafstudiosDot/decensha", "_blank")}>Server Source Code</li>
              <li>Blog</li>
              <li>Support</li>
            </ul>

            <ul id="footermenu-decenshanetwork">
              <span id="footermenu-header">Decensha Network</span>
              <li>Terms and Conditions</li>
              <li>Cookies</li>
              <li>Privacy Policy</li>
              <li>Linking with Decensha Network</li>
            </ul>
          </nav>
          <span id="footercopyright">© 2023 leafstudiosDot</span>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {Header()}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        {Footer()}
      </body>
    </html>
  );
}


export function ErrorBoundary() {
  const error = useRouteError();

  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <title>Not Found</title>
          <Meta />
          <Links />
        </head>
        <body>
          {Header()}
          <div className="sitebody">
            <h1>404 Page Not Found</h1>
          </div>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          {Footer()}
        </body>
      </html>
    );
  }

  // Don't forget to typecheck with your own logic.
  // Any value can be thrown, not just errors!
  let errorMessage = "Unknown error";

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Not Found</title>
        <Meta />
        <Links />
      </head>
      <body>
        {Header()}
        <div className="sitebody">
          <h1>Uh oh ...</h1>
          <p>Something went wrong.</p>
          <pre>{errorMessage}</pre>
        </div>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        {Footer()}
      </body>
    </html>
  );
}
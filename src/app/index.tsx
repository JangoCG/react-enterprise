/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Container } from "@material-ui/core";
import * as React from "react";
import { Helmet } from "react-helmet-async";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "styles/global-styles";
import NavigationBar from "./components/navigation-bar";
import MainLayout from "./layouts/main-layout";
import { Routes } from "./routes";
import HomePage from "./views/pages/HomePage";

export function App() {
  return (
    <BrowserRouter>
      {/* Helmet allows to set meta tags that will be read by search engine crawlsers. */}
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      {/* instead of main layout, there was a container here before */}
      <MainLayout>
        <Routes />
      </MainLayout>
      <GlobalStyle />
    </BrowserRouter>
  );
}

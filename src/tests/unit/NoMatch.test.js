import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import NoMatch from "../../views/NoMatch.jsx";

test("should display the error page", () => {
  const history = createBrowserHistory();
  history.push("/test");

  const { getByTestId } = render(
    <Router history={history}>
      <NoMatch />
    </Router>
  );

  const errorPage = getByTestId("error-page");

  expect(errorPage).toBeInTheDocument();
});

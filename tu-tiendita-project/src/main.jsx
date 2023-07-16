import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"

import { loader as rootLoader, action as rootAction } from "./helpers/root"
import {
  loader as contactLoader,
  action as contactAction
} from "./helpers/contact"
import { action as editAction } from "./helpers/edit"
import { action as destroyAction } from "./helpers/destroy"

import Root from "./routes/root"
import ErrorPage from "./error-page"
import Contact from "./routes/contact"
import EditContact from "./routes/edit"
import Index from "./routes/index"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div>Oops! Hay un error.</div>
          },
          { index: true, element: <Index /> }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

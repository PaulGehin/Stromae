import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "../../pages/welcome";
import ErrorPage from "../../pages/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    children: [{ path: "/:survey", element: <Welcome /> }],
    errorElement: <ErrorPage />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}

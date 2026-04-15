import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Post from "./pages/post/Post";
import Default from "./layouts/Default";
import PostLoader from "./pages/post/PostLoader";

const router = createBrowserRouter([
  {
    Component: Default,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/post",
        Component: Post,
      },
      {
        path: "/post-loader",
        Component: PostLoader,
      },
    ],
  },
]);

export default function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

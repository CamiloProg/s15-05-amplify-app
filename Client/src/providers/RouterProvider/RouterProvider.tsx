import { JSX } from "react";
import { createBrowserRouter, RouterProvider as ReactRouterProvider } from "react-router-dom";

import { routes } from "config";
import { Feed, Layout } from "components";
import Album from "components/Album";
import Playlists from "components/Playlists/Playlists";
import Browse from "components/Browse";


const router = createBrowserRouter([
  {
    path: routes.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Feed />,
      },
      {
        path: "album/:id",
        element: <Album />,
      },

      {
        path: "browse", // Cambia el path para la lista de playlists
        element: <Browse />,
     },
      {
         path: "playlists", // Cambia el path para la lista de playlists
         element: <Playlists />,
      },
    
    ],
  },
]);

function RouterProvider(): JSX.Element {
  return <ReactRouterProvider router={router} />;
}

export default RouterProvider;
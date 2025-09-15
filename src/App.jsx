import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1 className="text-3xl font-bold underline">Hello world!</h1>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

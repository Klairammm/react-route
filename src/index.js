import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Root from "./routes/root";
import Post from "./routes/Post";
import Posts from "./routes/Posts";
import Quote from "./routes/Quote";
import ErrorPage from "./error-page";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import User from "./routes/User";

// creazione router con strutturazione delle routes basata su JSX
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path="/" element={<App />} errorElement={<ErrorPage />}>
//         <Route
//           path="messages"
//           element={
//             <div className="Message">
//               <h1>Messages</h1>
//               <Link to="/messages/1">Show Me</Link>
//             </div>
//           }
//         />
//         <Route path="messages/:quote" element={<Quote />} />
//         <Route
//           path="users"
//           element={
//             <div className="Users">
//               <h1>Users</h1>
//               <Link to="/users/1">Show Me</Link>
//             </div>
//           }
//         />
//         <Route path="users:user" element={<User />} />
//         <Route path="posts" element={<Posts />} />
//         <Route path="posts:postID" element={<Post />} />
//         <Route path="contacts" element={<h1>Contacts</h1>} />
//       </Route>
//     </Route>
//   )
// );

//-------------------------------------------

//creazione router su oggetti

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/messages",
    element: (
      <div className="Message">
        <h1>Messages</h1>
        <Link to="/messages/1">Show Me</Link>
      </div>
    ),
  },
  {
    path: "/messages/:quote",
    element: <Quote />,
  },
  {
    path: "/users",
    element: (
      <div className="Users">
        <h1>Users</h1>
        <Link to="/users/1">Show Me</Link>
      </div>
    ),
  },
  {
    path: "/users/:user",
    element: <User />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/posts/:postID",
    element: <Post />,
  },
  {
    path: "/contacts",
    element: <h1>Contacts</h1>,
  },
  {
    path: "/contacts/:contact",
    element: <h1>Contacts</h1>,
  },
]);

//-------------------------

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

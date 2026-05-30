// // import { RouterProvider } from "react-router-dom";
// // import { router } from "./routes";

// // export default function App() {
// //   return <RouterProvider router={router} />;
// // }

// // import { RouterProvider } from "react-router-dom";
// // import { router } from "./routes";
// // import { useEffect } from "react";

// // export default function App() {
// //   useEffect(() => {
// //     const unsubscribe = router.subscribe(() => {
// //       window.scrollTo({ top: 0, left: 0, behavior: "auto" });
// //     });

// //     return () => unsubscribe();
// //   }, []);

// //   return <RouterProvider router={router} />;
// // }

// import { RouterProvider } from "react-router-dom";
// import { router } from "./routes";
// import { useEffect } from "react";

// export default function App() {
//   useEffect(() => {
//     const unsubscribe = router.subscribe(() => {
//       window.scrollTo({ top: 0, left: 0, behavior: "auto" });
//     });

//     return () => unsubscribe();
//   }, []);

//   return <RouterProvider router={router} />;
// }
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const unsubscribe = router.subscribe(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    });

    return () => unsubscribe();
  }, []);

  return <RouterProvider router={router} />;
}

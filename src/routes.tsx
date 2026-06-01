// import { lazy, Suspense } from "react";
// import { createBrowserRouter } from "react-router";

// const Home = lazy(() => import("./pages/Home"));
// const Services = lazy(() => import("./pages/Services"));
// const About = lazy(() => import("./pages/About"));
// const Portfolio = lazy(() => import("./pages/Portfolio"));
// const Contact = lazy(() => import("./pages/Contact"));

// function PageLoader() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-[#f8fbff] text-[#0f172a]">
//       Loading...
//     </div>
//   );
// }

// const withSuspense = (
//   Component: React.LazyExoticComponent<() => JSX.Element>,
// ) => (
//   <Suspense fallback={<PageLoader />}>
//     <Component />
//   </Suspense>
// );

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: withSuspense(Home),
//   },
//   {
//     path: "/services",
//     element: withSuspense(Services),
//   },
//   {
//     path: "/about",
//     element: withSuspense(About),
//   },
//   {
//     path: "/portfolio",
//     element: withSuspense(Portfolio),
//   },
//   {
//     path: "/contact",
//     element: withSuspense(Contact),
//   },
// ]);

// import React, { lazy, Suspense } from "react";
// import { createBrowserRouter } from "react-router-dom";

// const Home = lazy(() => import("./pages/Home"));
// const Services = lazy(() => import("./pages/Services"));
// const About = lazy(() => import("./pages/About"));
// const Portfolio = lazy(() => import("./pages/Portfolio"));
// const Contact = lazy(() => import("./pages/Contact"));

// function PageLoader() {
//   return (
//     <div className="gx-page-loader">
//       <style>{`
//         .gx-page-loader {
//           min-height: 100svh;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background:
//             radial-gradient(circle at 50% 42%, rgba(20, 184, 166, 0.18), transparent 28%),
//             linear-gradient(135deg, #f8fbff 0%, #eef6ff 52%, #ffffff 100%);
//           color: #0f172a;
//         }

//         .gx-loader-card {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 1.15rem;
//           padding: 2rem;
//         }

//         .gx-loader-logo-wrap {
//           position: relative;
//           display: grid;
//           place-items: center;
//           width: 7.5rem;
//           height: 7.5rem;
//           border-radius: 1.75rem;
//           background:
//             linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(240, 253, 250, 0.88));
//           border: 1px solid rgba(20, 184, 166, 0.26);
//           box-shadow:
//             0 28px 70px rgba(15, 23, 42, 0.14),
//             0 0 0 10px rgba(20, 184, 166, 0.07),
//             inset 0 1px 0 rgba(255, 255, 255, 0.95);
//           animation: gx-loader-float 1.8s ease-in-out infinite;
//         }

//         .gx-loader-logo-wrap::before {
//           content: "";
//           position: absolute;
//           inset: -9px;
//           border-radius: 2rem;
//           border: 3px solid transparent;
//           border-top-color: #14b8a6;
//           border-right-color: rgba(14, 165, 233, 0.72);
//           animation: gx-loader-spin 1.15s linear infinite;
//         }

//         .gx-loader-logo-wrap::after {
//           content: "";
//           position: absolute;
//           inset: 0.7rem;
//           border-radius: 1.25rem;
//           border: 1px solid rgba(20, 184, 166, 0.14);
//           pointer-events: none;
//         }

//         .gx-loader-logo {
//           width: 5.25rem;
//           height: 5.25rem;
//           object-fit: contain;
//           filter: drop-shadow(0 10px 16px rgba(15, 23, 42, 0.16));
//         }

//         .gx-loader-text {
//           color: #334155;
//           font-size: 0.82rem;
//           font-weight: 900;
//           letter-spacing: 0.16em;
//           text-transform: uppercase;
//         }

//         .gx-loader-dots {
//           display: inline-flex;
//           gap: 0.35rem;
//         }

//         .gx-loader-dots span {
//           width: 0.45rem;
//           height: 0.45rem;
//           border-radius: 999px;
//           background: #14b8a6;
//           animation: gx-loader-pulse 0.9s ease-in-out infinite;
//         }

//         .gx-loader-dots span:nth-child(2) {
//           animation-delay: 0.15s;
//         }

//         .gx-loader-dots span:nth-child(3) {
//           animation-delay: 0.3s;
//         }

//         @keyframes gx-loader-spin {
//           to { transform: rotate(360deg); }
//         }

//         @keyframes gx-loader-float {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-6px); }
//         }

//         @keyframes gx-loader-pulse {
//           0%, 100% { opacity: 0.35; transform: translateY(0); }
//           50% { opacity: 1; transform: translateY(-3px); }
//         }
//       `}</style>
//       <div className="gx-loader-card" role="status" aria-live="polite">
//         <div className="gx-loader-logo-wrap">
//           <img
//             src="/favicon.png"
//             alt="Greexa Primetech"
//             className="gx-loader-logo"
//           />
//         </div>
//         <div className="gx-loader-text">Loading</div>
//         <div className="gx-loader-dots" aria-hidden="true">
//           <span />
//           <span />
//           <span />
//         </div>
//       </div>
//     </div>
//   );
// }

// function withSuspense(
//   Component: React.LazyExoticComponent<React.ComponentType>,
// ) {
//   return (
//     <Suspense fallback={<PageLoader />}>
//       <Component />
//     </Suspense>
//   );
// }

// export const router = createBrowserRouter([
//     {
//       path: "/",
//       element: withSuspense(Home),
//     },
//     {
//       path: "/services",
//       element: withSuspense(Services),
//     },
//     {
//       path: "/about",
//       element: withSuspense(About),
//     },
//     {
//       path: "/portfolio",
//       element: withSuspense(Portfolio),
//     },
//     {
//       path: "/contact",
//       element: withSuspense(Contact),
//     },
//   ]);

import React, { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import { AnalyticsTracker } from "./components/AnalyticsTracker";
import { FloatingQuickContact } from "./components/FloatingQuickContact";
import { Navbar } from "./components/Navbar";

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));

function PageLoader() {
  return (
    <div className="gx-page-loader">
      <style>{`
        .gx-page-loader {
          min-height: 100svh;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(circle at 50% 42%, rgba(20, 184, 166, 0.18), transparent 28%),
            linear-gradient(135deg, #f8fbff 0%, #eef6ff 52%, #ffffff 100%);
          color: #0f172a;
        }

        .gx-loader-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.15rem;
          padding: 2rem;
        }

        .gx-loader-logo-wrap {
          position: relative;
          display: grid;
          place-items: center;
          width: 7.5rem;
          height: 7.5rem;
          border-radius: 1.75rem;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(240, 253, 250, 0.88));
          border: 1px solid rgba(20, 184, 166, 0.26);
          box-shadow:
            0 28px 70px rgba(15, 23, 42, 0.14),
            0 0 0 10px rgba(20, 184, 166, 0.07),
            inset 0 1px 0 rgba(255, 255, 255, 0.95);
          animation: gx-loader-float 1.8s ease-in-out infinite;
        }

        .gx-loader-logo-wrap::before {
          content: "";
          position: absolute;
          inset: -9px;
          border-radius: 2rem;
          border: 3px solid transparent;
          border-top-color: #14b8a6;
          border-right-color: rgba(14, 165, 233, 0.72);
          animation: gx-loader-spin 1.15s linear infinite;
        }

        .gx-loader-logo-wrap::after {
          content: "";
          position: absolute;
          inset: 0.7rem;
          border-radius: 1.25rem;
          border: 1px solid rgba(20, 184, 166, 0.14);
          pointer-events: none;
        }

        .gx-loader-logo {
          width: 5.25rem;
          height: 5.25rem;
          object-fit: contain;
          filter: drop-shadow(0 10px 16px rgba(15, 23, 42, 0.16));
        }

        .gx-loader-text {
          color: #334155;
          font-size: 0.82rem;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .gx-loader-dots {
          display: inline-flex;
          gap: 0.35rem;
        }

        .gx-loader-dots span {
          width: 0.45rem;
          height: 0.45rem;
          border-radius: 999px;
          background: #14b8a6;
          animation: gx-loader-pulse 0.9s ease-in-out infinite;
        }

        .gx-loader-dots span:nth-child(2) {
          animation-delay: 0.15s;
        }

        .gx-loader-dots span:nth-child(3) {
          animation-delay: 0.3s;
        }

        @keyframes gx-loader-spin {
          to { transform: rotate(360deg); }
        }

        @keyframes gx-loader-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @keyframes gx-loader-pulse {
          0%, 100% { opacity: 0.35; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-3px); }
        }
      `}</style>

      <div className="gx-loader-card" role="status" aria-live="polite">
        <div className="gx-loader-logo-wrap">
          <img
            src="/favicon.png"
            alt="Greexa PrimeTech"
            className="gx-loader-logo"
          />
        </div>

        <div className="gx-loader-text">Loading</div>

        <div className="gx-loader-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

function AppRouteLayout() {
  const location = useLocation();

  return (
    <>
      <AnalyticsTracker />
      <Navbar />
      <div className="gx-route-transition" key={location.pathname}>
        <Outlet />
      </div>
      <FloatingQuickContact />
    </>
  );
}

function withSuspense(
  Component: React.LazyExoticComponent<React.ComponentType>,
) {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRouteLayout />,
    children: [
      {
        index: true,
        element: withSuspense(Home),
      },
      {
        path: "services",
        element: withSuspense(Services),
      },
      {
        path: "about",
        element: withSuspense(About),
      },
      {
        path: "portfolio",
        element: withSuspense(Portfolio),
      },
      {
        path: "contact",
        element: withSuspense(Contact),
      },
    ],
  },
]);

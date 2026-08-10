import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <Helmet>
        <title>Page Not Found | NnovityWorks</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <Link to="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </Link>
        <p className="mt-4 text-sm text-muted-foreground">
          Or explore{" "}
          <Link to="/tally-sales" className="text-primary underline">
            Tally Prime
          </Link>
          {" · "}
          <Link to="/softskills-training" className="text-primary underline">
            Soft Skills Training
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;

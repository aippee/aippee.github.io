import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useCommonTranslation, useSEOTranslation } from "../hooks/useTranslation";

const NotFound = () => {
  const location = useLocation();
  const { t: tCommon } = useCommonTranslation();
  const { t: tSEO } = useSEOTranslation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>{tSEO('notFound.title')}</title>
        <meta name="description" content={tSEO('notFound.description')} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">{tCommon('notFound.message')}</p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            {tCommon('notFound.returnHome')}
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;

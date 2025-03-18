import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import { RedocStandalone } from "redoc";
import clsx from "clsx";
import "./api.css";

const API_SPEC_URL = "/swagger.json";

const ApiDocs: React.FC = () => {
  const [error, setError] = useState<string | null>(null);

  // Handle spec loading errors
  useEffect(() => {
    fetch(API_SPEC_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load OpenAPI specification");
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <Layout
      title="API Documentation"
      description="Explore our API with Redoc and Tailwind CSS"
      wrapperClassName="api-page"
      noFooter
    >
      <main className="min-h-screen">
        {error ? (
          <div
            className={clsx(
              "redoc-container",
              "flex items-center justify-center h-[50vh] text-red-600 dark:text-red-400"
            )}
          >
            <p role="alert">Error: {error}</p>
          </div>
        ) : (
          <div className="redoc-container">
            <RedocStandalone
              specUrl={API_SPEC_URL}
              options={{
                theme: {
                  colors: {
                    primary: { main: "#3b82f6" }, // Tailwind blue-500
                    text: { primary: "#1f2937" }, // Tailwind gray-800
                  },
                  typography: {
                    fontFamily: "Inter, sans-serif",
                    fontSize: "16px",
                  },
                  sidebar: {
                    backgroundColor: "#f3f4f6", // Tailwind gray-100
                    textColor: "#1f2937", // Tailwind gray-800
                  },
                },
                scrollYOffset: 60, // Adjust for navbar
                disableSearch: false,
                nativeScrollbars: true,
                hideDownloadButton: false,
                hideHostname: false,
                expandResponses: "200,201", // Default expand successful responses
              }}
              onLoaded={(err) => {
                if (err) {
                  setError("Failed to render API documentation");
                  console.error("Redoc error:", err);
                }
              }}
            />
          </div>
        )}
      </main>
    </Layout>
  );
};

export default ApiDocs;

"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Preload from "@/components/Preload";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlePreloadAnimationFinished = () => {
      setLoading(false);
    };

    document.addEventListener(
      "preloadAnimationFinished",
      handlePreloadAnimationFinished
    );

    return () => {
      document.removeEventListener(
        "preloadAnimationFinished",
        handlePreloadAnimationFinished
      );
    };
  }, []);
  return (
    <>
      {loading ? (
        <Preload />
      ) : (
        <div>
          <Header />
          <main>{children}</main>
          <Contact />
        </div>
      )}
    </>
  );
};

export default Layout;

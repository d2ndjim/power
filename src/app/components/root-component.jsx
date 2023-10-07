"use client";

import React, { useEffect } from "react";
import { ThemeProvider } from "./components/materialUi/materialUi.jsx";
import Loading from "./loading.jsx";
import HomePage from "./home/page.jsx";

export const dynamic = "force-static"; 

export default function HomeComponent() {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <ThemeProvider>
      <div className="w-screen">{loading ? <Loading /> : <HomePage />}</div>
    </ThemeProvider>
  );
}

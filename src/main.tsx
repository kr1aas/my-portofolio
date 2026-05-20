// main.tsx
import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import UnderConstruction from "./UnderConstruction.tsx";
import { SpeedInsights } from "@vercel/speed-insights/react";

function Main() {
  const [showUnder, setShowUnder] = useState(false);

  return showUnder ? (
    <UnderConstruction onBack={() => setShowUnder(false)} />
  ) : (
    <App onTrigger={() => setShowUnder(true)} />
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Main />
    <SpeedInsights />
  </StrictMode>
);



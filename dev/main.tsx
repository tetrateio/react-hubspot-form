import React from "react";
import ReactDOM from "react-dom/client";
import HubspotForm from "../src";
import config from "./config.json";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HubspotForm
      {...config}
      onSubmit={() => console.log("SUBMIT")}
      loading={<p>Loading...</p>}
    />
  </React.StrictMode>
);

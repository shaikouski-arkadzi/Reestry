import React from "react";
import ReactDOMClient from "react-dom/client";
import { UserAccount } from "./screens/UserAccount";
import { LoginForm } from "./screens/LoginForm";
import { ReestryPage } from "./screens/ReestryPage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<UserAccount />);

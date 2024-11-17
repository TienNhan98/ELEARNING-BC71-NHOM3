import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <div>
      <Header />
      {/* <BrowserRouter>
        <Routes>
          <Route>
            <Header />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

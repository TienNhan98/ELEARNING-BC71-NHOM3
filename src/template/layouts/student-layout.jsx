import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function StudentLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* Render các route con của Client */}
      </main>
      <Footer />
    </div>
  );
}

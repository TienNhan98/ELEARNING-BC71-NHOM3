import React from "react";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div>
      <aside>Admin Sidebar</aside>
      <main>
        <Outlet /> {/* Render các route con của Admin */}
      </main>
    </div>
  );
}

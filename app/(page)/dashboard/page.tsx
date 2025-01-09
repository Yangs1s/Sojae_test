import React from "react";
import ConsumerDashboardView from "@/app/_component/containers/dashboard/ConsumerDashboardView";
import SupplierDashBoardView from "@/app/_component/containers/dashboard/SupplierDashBoardView";
import AdminDashboard from "@/app/_component/containers/dashboard/AdminDashboard";

const Page = ({ searchParams }: { searchParams: { type: string } }) => {
  function renderPage() {
    if (searchParams.type === "admin") {
      return <AdminDashboard />;
    } else if (searchParams.type === "consumer") {
      return <ConsumerDashboardView />;
    } else if (searchParams.type === "supply") {
      return <SupplierDashBoardView />;
    }
  }

  // return <SupplierDashBoardView />;
  return renderPage();
  // return <AdminDashboard />;
};

export default Page;

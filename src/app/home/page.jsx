"use client";
import Sidebar from "@/components/Sidebar";

function HomepPage() {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-7rem)]">
      <Sidebar />
      <h2 className="sm:text-9xl text-sm text-slate-200">Home Page</h2>
    </div>
  );
}

export default HomepPage;

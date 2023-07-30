import type { V2_MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
    return [
      { title: "Download Decensha Client - Decensha" },
      { name: "description", content: "A decentralized chatroom" },
    ];
  };

export default function Sales() {
  return (
    <div className="sitebody">
      <h1 className="download-header">Download Decensha Client</h1>
      <Outlet />
    </div>
  );
}
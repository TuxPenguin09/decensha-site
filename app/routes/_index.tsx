import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Decensha" },
    { name: "description", content: "A decentralized chatroom" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Decensha</h1>
    </div>
  );
}

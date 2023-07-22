import type { V2_MetaFunction } from "@remix-run/node";
import "../homepage.css"

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Decensha" },
    { name: "description", content: "A decentralized chatroom" },
  ];
};

export default function Index() {
  return (
    <div className="sitebody">
      <div id="homepage-slogan">A chatroom that are moderated by you, the community, organisations, etc.</div>
    </div>
  );
}

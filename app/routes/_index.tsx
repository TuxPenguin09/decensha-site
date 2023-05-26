import type { V2_MetaFunction } from "@remix-run/node";

import logo from '../assets/logo.png'

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Decensha" },
    { name: "description", content: "A decentralized chatroom" },
  ];
};

export function Header() {
  return (
    <header>
      <span><img src={logo} /></span>
    </header>
  )
}

export default function Index() {
  return (
    <div>
      {Header()}
    </div>
  );
}

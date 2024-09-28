"use client";

import P from "~/_components/final/P";
import { Button } from "~/_components/final/ui/button";
import { DialogHeader } from "~/_components/final/ui/dialog";
import H1 from "~/_components/final/H1";
import { NavLink } from "~/_components/final/Navbar";
export const learnNavLinks: NavLink[] = [
  {
    name: "Home",
    href: "/research/",
  },
  {
    name: "Papers",
    href: "/research/paper",
  },
  {
    name: "Peer Review",
    href: "/research/peer-review",
  },
  {
    name: "Dashboard", // TODO: Protect route & state with auth
    href: "/research/dashboard",
  },
  {
    name: "Dictionary", // TODO: Protect route & state with auth
    href: "/research/dictionary",
  },
];

export default function LandingPage() {
  return (
    <div className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <H1>deResearcher</H1>
      <P className="text-[20px]">
        deResearcher - a decentralized research platform on solana
      </P>
      <Button
        className="text-center text-white"
        onClick={() => {
          console.log("clicked");
        }}
        size="lg"
      >
        Get Started
      </Button>
    </div>
  );
}

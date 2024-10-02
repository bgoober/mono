import type { NavLink } from "~/_components/final/Navbar";

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

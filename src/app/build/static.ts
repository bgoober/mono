import { NavLink } from "~/_components/final/Navbar";

export const buildNavLinks: NavLink[] = [
    {
      name: "Home",
      href: "/build",
    },
    {
      name: "Governance",
      href: "/build/governance",
    },
    {
      name: "Crowdfunding",
      href: "/build/crowdfunding",
    },
    {
      name: "Bounties", // TODO: Protect route & state with auth
      href: "/build/bounties",
    },
  ];
import { NavLink } from "~/_components/final/Navbar";

export const buildNavLinks: NavLink[] = [
  {
    name: "Home",
    href: "/build",
  },
  {
    name: "Governance",
    href: "/build/governance/dao",
  },
  {
    name: "Crowdfunding",
    href: "/build/crowdfunding/new",
  },
  {
    name: "Bounties", // TODO: Protect route & state with auth
    href: "/newquest/bounties",
  },
];

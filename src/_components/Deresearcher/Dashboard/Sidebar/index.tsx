"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FileText, Star, Beaker, Menu, User2Icon } from "lucide-react";
import { Logo } from "~/_components/Deresearcher/Logo";
import { DERESEARCHER_HOME } from "~/constant";

type LinkDefinition = {
  name: string;
  icon: React.ElementType;
  href: string;
};

type SidebarHeaderProps = {
  expanded: boolean;
  onToggle: () => void;
};

type SidebarLinkProps = {
  item: LinkDefinition;
  expanded: boolean;
  active: boolean;
};

// Constants

const links: LinkDefinition[] = [
  { name: "Dashboard", icon: Home, href: `${DERESEARCHER_HOME}/dashboard` },
  {
    name: "Profile",
    icon: User2Icon,
    href: `${DERESEARCHER_HOME}/dashboard/profile`,
  },
  {
    name: "Papers",
    icon: FileText,
    href: `${DERESEARCHER_HOME}/dashboard/papers`,
  },
  {
    name: "Reviews",
    icon: Star,
    href: `${DERESEARCHER_HOME}/dashboard/reviews`,
  },
  { name: "Labs", icon: Beaker, href: `${DERESEARCHER_HOME}/dashboard/labs` },
];

// Sidebar Header Component
function SidebarHeader({ expanded, onToggle }: SidebarHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4">
      {expanded && (
        <Link href={DERESEARCHER_HOME}>
          <Logo />
        </Link>
      )}
      <button onClick={onToggle} className="rounded-md p-2 hover:bg-zinc-200">
        <Menu className="h-6 w-6" />
      </button>
    </div>
  );
}

// Sidebar Link Component
function SidebarLink({ item, expanded, active }: SidebarLinkProps) {
  return (
    <Link
      href={item.href}
      className={`flex items-center px-4 py-2 text-zinc-700 hover:bg-zinc-100 ${
        active ? "bg-zinc-100" : ""
      }`}
    >
      <item.icon className="h-5 w-5" />
      {expanded && <span className="ml-3">{item.name}</span>}
    </Link>
  );
}

// Main Sidebar Component
export default function Sidebar() {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const pathname = usePathname();

  // Sidebar resize depending on screen size
  useEffect(() => {
    const handleResize = () => {
      setSidebarExpanded(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (
    <aside
      className={`bg-white shadow-md transition-all duration-300 ${
        sidebarExpanded ? "w-60" : "w-16"
      }`}
    >
      <SidebarHeader expanded={sidebarExpanded} onToggle={toggleSidebar} />
      <nav className="mt-8">
        {links.map((item) => (
          <SidebarLink
            key={item.name}
            item={item}
            expanded={sidebarExpanded}
            active={pathname === item.href}
          />
        ))}
      </nav>
    </aside>
  );
}

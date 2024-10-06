"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  FileText,
  Star,
  Beaker,
  Menu,
  User2Icon,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { DesearcherLogo } from "~/_components/final/Logo";

type LinkDefinition = {
  name: string;
  icon: React.ElementType;
  href: string;
  subItems?: { name: string; href: string }[];
};

const links: LinkDefinition[] = [
  { name: "Dashboard", icon: Home, href: "/research/dashboard" },
  { name: "Profile", icon: User2Icon, href: "/research/dashboard/profile" },
  {
    name: "Papers",
    icon: FileText,
    href: "/research/dashboard/papers/overview",
    subItems: [
      { name: "Overview", href: "/research/dashboard/papers/overview" },
      { name: "Minted", href: "/research/dashboard/papers/minted" },
    ],
  },
  { name: "Reviews", icon: Star, href: "/research/dashboard/reviews" },
  { name: "Labs", icon: Beaker, href: "/research/dashboard/labs" },
];

export default function Sidebar() {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [papersExpanded, setPapersExpanded] = useState(false);
  const pathname = usePathname();

  const isPapersRoute = pathname.startsWith("/research/dashboard/papers");

  useEffect(() => {
    if (isPapersRoute) {
      setPapersExpanded(true);
    }
  }, [isPapersRoute]);

  useEffect(() => {
    const handleResize = () => {
      setSidebarExpanded(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleItemClick = (item: LinkDefinition, e: React.MouseEvent) => {
    if (item.subItems) {
      if (sidebarExpanded) {
        e.preventDefault();
        setPapersExpanded(!papersExpanded);
      }
    }
  };

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  const isActiveLink = (item: LinkDefinition) => {
    if (item.subItems) {
      return false; // Papers tab itself is never directly active
    }
    return pathname === item.href;
  };

  const isActiveSubItem = (href: string) => {
    return pathname.includes(href);
  };

  return (
    <aside
      className={`bg-white shadow-md transition-all duration-300 ${
        sidebarExpanded ? "w-60" : "w-16"
      }`}
    >
      <div className="flex items-center justify-between p-4">
        {sidebarExpanded && (
          <Link href="/research">
            <DesearcherLogo />
          </Link>
        )}
        <button
          onClick={toggleSidebar}
          className="rounded-md p-2 hover:bg-zinc-200"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      <nav className="mt-8">
        {links.map((item) => (
          <div key={item.name}>
            <Link
              href={item.href}
              onClick={(e) => handleItemClick(item, e)}
              className={`flex items-center px-4 py-2 text-zinc-700 hover:bg-zinc-100 ${
                isActiveLink(item) ? "bg-zinc-100" : ""
              }`}
            >
              <item.icon className="h-5 w-5" />
              {sidebarExpanded && (
                <>
                  <span className="ml-3">{item.name}</span>
                  {item.subItems && (
                    <span className="ml-auto">
                      {papersExpanded || isPapersRoute ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </span>
                  )}
                </>
              )}
            </Link>
            {item.subItems &&
              sidebarExpanded &&
              (papersExpanded || isPapersRoute) && (
                <div className="ml-6">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className={`flex items-center px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-100 ${
                        isActiveSubItem(subItem.href) ? "bg-zinc-100" : ""
                      }`}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
          </div>
        ))}
      </nav>
    </aside>
  );
}

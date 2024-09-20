/* eslint-disable @next/next/no-img-element */
import { Search, Bell } from "lucide-react";
import { AvatarDropdown } from "./AvatarDropdown";

type SearchBarProps = {
  placeholder: string;
};

type NotificationButtonProps = {
  ariaLabel: string;
};

type UserMenuButtonProps = {
  imageUrl: string;
  ariaLabel: string;
};

// SearchBar Component
export function SearchBar({ placeholder }: SearchBarProps) {
  return (
    <div className="w-full max-w-lg">
      <div className="relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="sr-only">Search</span>
          <Search className="h-5 w-5 text-zinc-400" />
        </div>
        <input
          type="text"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-zinc-300 rounded-md h-8"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

// NotificationButton Component
function NotificationButton({ ariaLabel }: NotificationButtonProps) {
  return (
    <button className="p-1 rounded-full text-zinc-400 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <span className="sr-only">{ariaLabel}</span>
      <Bell className="h-6 w-6" />
    </button>
  );
}

// UserMenuButton Component
function UserMenuButton({ imageUrl, ariaLabel }: UserMenuButtonProps) {
  return (
    <button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <span className="sr-only">{ariaLabel}</span>
      <img className="h-8 w-8 rounded-full" src={imageUrl} alt="" />
    </button>
  );
}

// Main DashboardNavbar Component
export default function DashboardNavbar() {
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Search */}
          <div className="flex-1 flex justify-start">
            <SearchBar placeholder="Search" />
          </div>
          {/* Notifications and User Menu */}
          <div className="flex items-center space-x-6">
            <NotificationButton ariaLabel="View notifications" />
            <AvatarDropdown />
          </div>
        </div>
      </div>
    </header>
  );
}

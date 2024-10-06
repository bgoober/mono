"use client";

export const LeftSideBar = () => {
  return (
    <aside className="flex h-full items-start justify-center border-r border-zinc-200 px-4 pt-12">
      {/* <nav className="px-4">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center space-x-4 rounded-md px-3 py-3 text-gray-300 transition-colors hover:bg-gray-800"
          >
            <item.icon className="h-6 w-6" />
            <span className="text-lg">{item.label}</span>
          </Link>
        ))}
      </nav> */}
    </aside>
  );
};

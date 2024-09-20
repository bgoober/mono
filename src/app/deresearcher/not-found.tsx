"use client";
import { Button } from "~/_components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-900">
      <h1 className="mb-4 text-4xl font-bold text-zinc-500">404 - Not Found</h1>
      <p className="mb-8 text-center text-xl text-zinc-600">
        Hey, the requested <span className="text-primary">{pathname}</span> page
        is still under development 🥲
      </p>
      <Button asChild>
        <Link href="/dashboard">Return to Dashboard</Link>
      </Button>
    </div>
  );
}

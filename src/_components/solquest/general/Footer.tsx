import Logo from "./ui/Logo";
import Link from "next/link";
import { FaXTwitter, FaDiscord, FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#14161F] py-8 text-slate-300">
      <div className="container mx-auto px-4">
        <div className="flex h-full flex-col justify-between">
          <div className="mb-8">
            <Logo />
            <p className="pt-4 text-sm">
              Find and complete various high-paying crypto bounties all in one
              place!
            </p>
          </div>
          <div className="flex items-end justify-between">
            <div className="flex gap-4">
              <Link href="#" className="transition-colors hover:text-[#4ADE80]">
                <FaGithub size={24} />
              </Link>
              <Link href="#" className="transition-colors hover:text-[#4ADE80]">
                <FaXTwitter size={24} />
              </Link>
              <Link href="#" className="transition-colors hover:text-[#4ADE80]">
                <FaDiscord size={24} />
              </Link>
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} SolQuest. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

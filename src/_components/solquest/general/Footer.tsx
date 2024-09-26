import Logo from "./ui/Logo";
import Link from "next/link";
import { FaXTwitter, FaDiscord, FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-primary-muted flex flex-wrap items-center justify-between gap-5 p-4 text-slate-400">
      <div>
        <Logo />
        <p className="py-5">
          Find and complete various high-paying crypto bounties all in one
          place!
        </p>

        <div className="flex gap-4">
          <Link href="#">
            {" "}
            <FaGithub />{" "}
          </Link>
          <Link href="#">
            {" "}
            <FaXTwitter />{" "}
          </Link>
          <Link href="#">
            {" "}
            <FaDiscord />{" "}
          </Link>
        </div>
      </div>

      <div>
        <p>© 2024 SolQuest. All rights reserved.</p>
      </div>
    </footer>
  );
}

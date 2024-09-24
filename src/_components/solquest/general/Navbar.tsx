"use client"
import Logo from "./ui/Logo"
import Link from "next/link"
import A from "./ui/A"
import Wallet from "./Wallet"
import { MobileMenu } from "./MobileMenu"

export const NavLinks = [
    {
        name: "Bounties",
        href: "/bounties"
    },
    {
        name: "Sign up",
        href: "/"
    },
    {
        name: "Sign in",
        href: "/"
    },
]

export default function Navbar(){
    return(
        <nav className="flex items-center justify-between py-2 px-5 max-w-7xl w-full m-auto">
            <Link href={"/"}> <Logo /> </Link>

            <div className="hidden tablet:flex items-center gap-3">
                {
                    NavLinks.map(link => 
                        <A key={link.name} href={link.href} name={link.name}/>
                    )
                }
                <Wallet />
            </div>

            <MobileMenu />
        </nav>
    )
}
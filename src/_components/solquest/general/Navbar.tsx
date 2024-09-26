"use client"
import Logo from "./ui/Logo"
import Link from "next/link"
import A from "./ui/A"
import Wallet from "./Wallet"
import { MobileMenu } from "./MobileMenu"
import { NavLink } from "~/_components/final/Navbar"
import { SearchBar } from "~/_components/final/Dashboard/Navbar"
import { usePathname } from "next/navigation"

interface props{
    links: NavLink[]
}

export default function Navbar({links}:props){
    const pathname = usePathname()
    return(
        <nav className="flex items-center justify-between gap-2 p-4 w-full m-auto">
            <div className="flex max-w-3xl flex-1 items-center gap-3">
                <Link href={"/"}> <Logo /> </Link>
                <button className="hidden flex-1 sm:block">
                    <span className="sr-only">Search</span>
                    <SearchBar placeholder="Search the universe" />
                </button>
            </div>

            <div className="hidden md:flex items-center gap-3">
                {
                    links.map(link => 
                        <A key={link.name} href={link.href} name={link.name} active={pathname == link.href}/>
                    )
                }
                <Wallet />
            </div>

            <MobileMenu pathname={pathname} links={links}/>
        </nav>
    )
}
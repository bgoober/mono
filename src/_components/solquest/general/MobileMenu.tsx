import Image from "next/image";
import { NavLink } from "~/_components/final/Navbar";
import { useState } from "react";
import Wallet from "./Wallet";
import { CloseButton } from "./ui/Button";

interface MobileMenuProps {
    pathname: string;
    links: NavLink[];
  }

export const MobileMenu = ({pathname, links}: MobileMenuProps) => {
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }
    return(
        <div className="md:hidden">
            <button onClick={toggleMenu} title="menu" className="flex flex-row gap-[3px] items-center">
                <Image src={"/WF Icon Button.svg"} width={35} height={35} alt="logo" />
            </button>

            <div className={`${openMenu? "flex right-0" : "-right-96"} transition-all flex-col gap-4 max-w-72 w-full h-screen py-4 px-3 absolute top-0 bg-primary`}>
                <div className="h-16">
                    <CloseButton handleClick={toggleMenu}/>
                </div>
            {links.map((link) => (
                <div
                    key={link.name}
                    className={
                    pathname === link.href
                        ? "flex bg-muted hover:cursor-pointer px-[15px] flex-row gap-[10px] items-center text-primary hover:text-secondary" //Change to highlight later
                        : "flex hover:bg-muted hover:cursor-pointer px-[15px] flex-row gap-[10px] items-center text-white hover:text-secondary"
                    }
                >
                    <a
                    href={link.href}
                    className="block flex-1 text-base transition-colors font-bold py-[10px]"
                    >
                    {link.name}
                    </a>
                </div>
            ))}
                <div className="flex justify-center"> 
                    <Wallet />  
                </div>
            </div>
        </div>
    )
}
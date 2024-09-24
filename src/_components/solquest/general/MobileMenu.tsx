import Image from "next/image";
import { NavLinks } from "./Navbar";
import { useState } from "react";
import Wallet from "./Wallet";
import { CloseButton } from "./ui/Button";

interface menu{
    active?: string,
    setActive?: React.Dispatch<React.SetStateAction<string>>
}

export const MobileMenu = ({active, setActive}: menu) => {
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }
    return(
        <div className="tablet:hidden">
            <button onClick={toggleMenu} title="menu" className="flex flex-row gap-[3px] items-center">
                <Image src={"/assets/WF Icon Button.svg"} width={35} height={35} alt="logo" />
            </button>

            <div className={`${openMenu? "flex right-0" : "-right-80"} transition-all flex-col gap-4 max-w-72 w-full h-screen py-4 px-3 absolute top-0 bg-primary-muted`}>
                <div className="h-16">
                    <CloseButton handleClick={toggleMenu}/>
                </div>
            {NavLinks.map((link) => (
                <div
                    key={link.name}
                    className={
                    active === link.name
                        ? "flex hover:bg-muted hover:cursor-pointer px-[15px] flex-row gap-[10px] items-center" //Change to highlight later
                        : "flex hover:bg-muted hover:cursor-pointer px-[15px] flex-row gap-[10px] items-center"
                    }
                >
                    <a
                    href={link.href}
                    className="block flex-1 text-white transition-colors hover:text-secondary font-bold py-[10px]"
                    // onClick={() => {
                    //     setActive(link.name)
                    //     setOpenMenu(false)
                    // }}
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
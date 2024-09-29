import Link from "next/link"
import { act } from "react"

interface props{
    name: string,
    href: string,
    active?: boolean
}

export default function A({name, href, active}: props) {
    return(
        <Link className={`block text-base font-bold text-zinc-800 p-[5px] hover:text-primary transition-colors border-b-2 ${active ? "border-zinc-800" : "border-transparent"} hover:border-primary`} href={href}>{name}</Link>
    )
}
import Link from "next/link"

interface props{
    name: string,
    href: string,
}

export default function A({name, href}: props) {
    return(
        <Link className="block text-white hover:text-secondary transition-colors" href={href}>{name}</Link>
    )
}
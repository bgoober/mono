"use client"
import { H1 } from "./ui/H1"
import { CloseButton, Button } from "./ui/Button"

interface props{
    title: string,
    details: string,
    pay: number,
    publisher: string,
    close: () => void
}

export default function Details({title, details, pay, publisher, close}:props){
    return(
        <section className="w-full h-full fixed top-0 left-0 bg-veil flex justify-center items-center">
            <div className="h-full max-w-3xl overflow-auto w-full bg-slate-800 py-6 px-6 relative">
                <CloseButton handleClick={close}/>
                <H1 style={2}>{title}</H1>
                <p className="font-bold my-3">Publisher: {publisher}</p>
                <p className="font-bold my-3">Pay: {pay} SOL</p>

                <pre className="text-wrap">{details}</pre>

                <div className="my-10 m-auto w-fit">
                    <Button>Apply to Bounty</Button>
                </div>
            </div>
        </section>
    )
}
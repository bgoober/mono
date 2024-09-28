"use client"
import { H1 } from "./ui/H1"
import { CloseButton, Button } from "./ui/Button"
import Image from "next/image"

interface props{
    title: string,
    details: string,
    pay: number,
    publisher: string,
    close: () => void
}

export default function Details({title, details, pay, publisher, close}:props){
    return(
        <section className="w-full h-full fixed top-0 left-0 backdrop-blur-lg backdrop-brightness-50 flex justify-center items-center">
            <div className="h-full max-w-3xl overflow-auto w-full bg-primary-foreground py-6 px-6 relative">
                <CloseButton handleClick={close}/>
                <H1 style={2}>{title}</H1>

                <pre className="text-wrap">{details}</pre>

                <p className="font-bold my-3">Publisher: <span className="text-primary"> {publisher} </span></p>
                <p className="font-bold my-3 flex gap-3 items-center">Pay: 
                    <div className="w-7 aspect-square bg-primary rounded-full">
                        <Image alt="solana" src="/solana.svg" width={30} height={30}/> 
                    </div>
                    {pay} SOL
                </p>

                <div className="my-10 m-auto w-fit">
                    <Button>Apply to Bounty</Button>
                </div>
            </div>
        </section>
    )
}
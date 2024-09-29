"use client"
import Image from "next/image"
import Details from "./Details"
import { useState } from "react"

export const Listing:React.FC<{src?: string, title:string, details: string, publisher:string, pay:number}> = ({src, title, details, publisher, pay}) => {
    const [viewDetails, setViewDetails] = useState(false)
    return(
        <>
        <article onClick={() => {setViewDetails(true)}} className="my-4 p-3 flex items-center gap-3 hover:cursor-pointer hover:bg-slate-200 transition-all">
            <Image src={src??"/assets/solquest.svg"} alt="Publisher" width={45} height={45}/>

            <div className="flex flex-1 gap-5 justify-between">
                <div className="flex-1">
                    <h2 className="text-primary font-bold">{title}</h2>
                    <p className="text-sm text-slate-500">{publisher}</p>
                    <p className="text-[10px] text-slate-500 font-bold">Open</p>
                </div>

                <p className="max-w-24 text-base font-bold flex gap-2 items-center">
                    <div className="w-7 aspect-square bg-primary rounded-full">
                        <Image alt="solana" src="/solana.svg" width={30} height={30}/> 
                    </div>
                    {pay}
                </p>
            </div>
        </article>

        {viewDetails && <Details close={() => {setViewDetails(false)}} title={title} details={details} publisher={publisher} pay={pay}/>}
        </>
    )
}
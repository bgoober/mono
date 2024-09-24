"use client"
import Image from "next/image"
import Details from "./Details"
import { useState } from "react"
import { setConfig } from "next/config"

export const Listing:React.FC<{src?: string, title:string, details: string, publisher:string, pay:number}> = ({src, title, details, publisher, pay}) => {
    const [viewDetails, setViewDetails] = useState(false)
    return(
        <>
        <article onClick={() => {setViewDetails(true)}} className="my-4 p-3 flex items-center gap-3 hover:cursor-pointer hover:bg-slate-800">
            <Image src={src??"/assets/solquest.svg"} alt="Publisher" width={45} height={45}/>

            <div className="flex flex-1 gap-5 justify-between">
                <div className="flex-1">
                    <h2 className="text-secondary font-bold">{title}</h2>
                    <p className="text-sm text-slate-400">{publisher}</p>
                    <p className="text-[10px] text-white text">Open</p>
                </div>

                <p className="max-w-24 text-base">{pay} SOL</p>
            </div>
        </article>

        {viewDetails && <Details close={() => {setViewDetails(false)}} title={title} details={details} publisher={publisher} pay={pay}/>}
        </>
    )
}
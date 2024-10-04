"use client"
import Image from "next/image"
import Details from "./Details"
import { useState } from "react"
import type { Bounty } from "~/server/api/routers/bounty/read"
import { Session } from "next-auth"

export const Listing:React.FC<{bounty: Bounty, session:Session | null}> = ({bounty, session}) => {
    const [viewDetails, setViewDetails] = useState(false)
    return(
        <div>
        <article onClick={() => {setViewDetails(true)}} className="my-4 p-3 flex items-center gap-3 hover:cursor-pointer hover:bg-slate-200 transition-all">
            <Image src={"/assets/solquest.svg"} alt="Publisher" width={45} height={45}/>

            <div className="flex flex-1 gap-5 justify-between">
                <div className="flex-1">
                    <h2 className="text-primary font-bold">{bounty?.name}</h2>
                    <p className="text-sm text-slate-500">{bounty?.company?.name ?? bounty?.pointOfContact.name}</p>
                    <p className="text-[10px] text-slate-500 font-bold">{bounty?.status}</p>
                </div>

                <p className="max-w-24 text-base font-bold flex gap-2 items-center">
                    <div className="w-7 aspect-square bg-primary rounded-full">
                        <Image alt="solana" src="/usdc.png" width={30} height={30}/> 
                    </div>
                    {bounty?.compensation.amount}
                </p>
            </div>
        </article>

        {viewDetails && 
        <Details close={() => {setViewDetails(false)}} 
        title={bounty?.name ?? ""} 
        details={bounty?.description ?? ""} 
        publisher={bounty?.company?.name ?? bounty?.pointOfContact.name ?? ""} 
        pay={bounty?.compensation.amount ?? 0}
        bountyId={bounty?.id??""}
        userId={session?.user.id ?? ""}/>}
        </div>
    )
}
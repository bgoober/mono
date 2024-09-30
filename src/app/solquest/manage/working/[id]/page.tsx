'use client'
import type { GetStaticPaths } from "next"
import { Button } from "~/_components/solquest/general/ui/Button"
import bounties from "~/constants/bountyWorking.json"
import applicants from "~/constants/dummyApplicants.json"
import H1 from "~/_components/final/H1"
import H3 from "~/_components/final/H3"
import P from "~/_components/final/P"
import type { Item } from "~/_components/final/Dashboard/Table"
import Image from "next/image"
import { useEffect, useState } from "react"
import Table from "~/_components/final/Dashboard/Table"
import { APPLICANTS_COLUMNS } from "~/lib/utils/constants"

type bounty = {
  id: string;
  title: string;
  pay: number;
  details: string;
  publisher: string;
  track: string;
  status: string;
  createdDate: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = bounties.map(bounty => ({
    params: {id: bounty.id}
  }))

  return {paths, fallback: false}
}

export default function Bounty({params}: {params: {id: string}}){
  const [pageBounty, setPageBounty] = useState<bounty | undefined>(undefined)

  const getStatus = (status:string) => {
    if (status == "in_progress"){
      return "IN PROGRESS"
    }
    else{
      return status.toUpperCase()
    }
  }

  const onRowClick = (item:Item) => {
    console.log("Dev ID: " + item.id)
  }

  useEffect(() => {
    setPageBounty(bounties.find(bounty => bounty.id == params.id))
  }, [params])

  return(
    <div className="m-auto my-4 flex w-full flex-1 flex-col px-5 sm:px-12">
      <div className="p-2 bg-white rounded-md">
        <H1 className="text-center my-3">{pageBounty?.title??""}</H1>
        <pre className="text-wrap text-lg font-medium">{pageBounty?.details}</pre>
        <div className="my-4">
          <P className="font-semibold">Status: {getStatus(pageBounty?.status??"")}</P>
          <p className="font-semibold my-3 flex gap-3 items-center">Pay: 
            <div className="w-7 aspect-square bg-primary rounded-full">
              <Image alt="solana" src="/solana.svg" width={30} height={30}/> 
            </div>
            {pageBounty?.pay} SOL
          </p>
        </div>

        {pageBounty?.status == "completed" && <div className="my-3 mx-auto max-w-4xl flex justify-center gap-3 items-center">
          <Button type={2}>Withdraw Pay</Button>
        </div>}
      </div>
      
      <H3 className="text-primary text-center font-bold my-5">Developers</H3>
      {bounties.length > 0 && (
        <Table columns={APPLICANTS_COLUMNS} data={applicants.filter(app => app.status == "accepted")} marginTop="mt-4" whenRowClick={onRowClick} />
      )}
    </div>
  )
}
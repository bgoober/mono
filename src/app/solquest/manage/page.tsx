"use client"
import H4 from "~/_components/final/H4"
import Table from "~/_components/final/Dashboard/Table"
import bounties from "~/constants/bounty.json"
import workingBounties from "~/constants/bountyWorking.json"
import { Button } from "~/_components/final/ui/button"
import { BOUNTIES_COLUMNS } from "~/lib/utils/constants"
import type { Item  } from "~/_components/final/Dashboard/Table"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Manage(){
  const router = useRouter()
  const [bountyType, setBountyType] = useState<"owned"|"working">("owned")
  const onRowClickOwned = (item: Item) => {router.push(`/solquest/manage/owned/${item.id}`)}
  const onRowClickWorking = (item: Item) => {router.push(`/solquest/manage/working/${item.id}`)}
  return(
    <main className="m-auto my-4 flex w-full flex-1 flex-col px-5 tablet:px-12">
      <div className="flex gap-4 justify-center items-center">
        <Button 
        variant="link"
        onClick={() => setBountyType("owned")} 
        className={`${bountyType == "owned" && "underline"} font-semibold text-base`}>Owned</Button>

        |

        <Button 
        variant="link"
        onClick={() => setBountyType("working")}
        className={`${bountyType == "working" && "underline"} font-semibold text-base`}>Working</Button>
      </div>
      <div className="flex flex-col">
        {bounties.length === 0 && (
          <H4 className="pt-10 text-center text-zinc-600">
            No bounties found. Create a new one ⚡
          </H4>
        )}
        {bounties.length > 0 && bountyType == "owned" && (
          <Table columns={BOUNTIES_COLUMNS} data={bounties} marginTop="mt-4" whenRowClick={onRowClickOwned} />
        )}

        {bounties.length > 0 && bountyType == "working" && (
          <Table columns={BOUNTIES_COLUMNS} data={workingBounties} marginTop="mt-4" whenRowClick={onRowClickWorking} />
        )}
      </div>
    </main>
  )
}
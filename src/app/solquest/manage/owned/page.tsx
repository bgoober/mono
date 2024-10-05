"use client";
import { CloseButton } from "~/_components/solquest/general/ui/Button";
import { Button } from "~/_components/final/ui/button";
import type { tableBounty, tableApplicant } from "~/app/solquest/manage/manage";
import H1 from "~/_components/final/H1";
import H3 from "~/_components/final/H3";
import P from "~/_components/final/P";
import type { Item } from "~/_components/final/Dashboard/Table";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { mapBountyToTable, mapApplicantToTable } from "~/app/solquest/manage/manage";
import Table from "~/_components/final/Dashboard/Table";
import { APPLICANTS_COLUMNS } from "~/lib/utils/constants";
import { api } from "~/trpc/react";

interface ManageProps {
  item: tableApplicant | undefined;
  name: string;
  handleClick: () => void;
}

export default function Bounty() {
  const [pageBounty, setPageBounty] = useState<tableBounty>();
  const [viewManage, setViewManage] = useState<boolean>(false);
  const [applicants, setApplicants] = useState<tableApplicant[]>();
  const [selectedApplicant, setSelectedApplicant] = useState("")
  const params = useSearchParams()
  const id= params.get("id")
  const router = useRouter()
  const {data, isLoading} = api.bounty.readBounty.useQuery({bountyId: id ?? ""})
  const { data:applications, isFetched } = api.bounty.readAllApplications.useQuery({bountyId: id ?? ""})
  const startBounty = api.bounty.startBounty.useMutation({})
  const endBounty = api.bounty.endBounty.useMutation({})

  const getStatus = (status: string) => {
    if (status == "in_progress") {
      return "IN PROGRESS";
    } else {
      return status.toUpperCase();
    }
  };

  const handleStart = async() => {
    try{
      startBounty.mutate({bountyId: pageBounty?.id ?? ""}, {
        onSuccess: () => alert("Bounty started successfully!"),
        onError: (err) => alert(`Error: ${err.message ?? "Unknown error"}`)
      })
    } catch(err){
      console.log(err)
    } finally{
      router.refresh()
    }
  }

  const handleEnd = async() => {
    try{
      endBounty.mutate({bountyId: pageBounty?.id ?? ""}, {
        onSuccess: () => alert("Bounty ended successfully!"),
        onError: (err) => alert(`Error: ${err.message ?? "Unknown error"}`)
      })
    } catch(err){
      console.log(err)
    } finally{
      router.refresh()
    }
  }

  const onRowClick = (item: Item) => {
    setSelectedApplicant(item.id);
    setViewManage(true);
  };

  useEffect(() => {
    if (data){
      setPageBounty(mapBountyToTable([data])[0])
    }
    setApplicants(mapApplicantToTable(applications ?? []))
  }, [isLoading, isFetched]);

  return (
    <div className="sm:px-12 m-auto my-4 flex w-full flex-1 flex-col px-5">
      {(!isLoading && isFetched) ?<div className="rounded-md flex-1 bg-white p-2">
        <H1 className="my-3 text-center">{pageBounty?.title ?? ""}</H1>
        <pre className="text-wrap text-lg font-medium">
          {pageBounty?.details}
        </pre>
        <div className="my-4">
          <P className="font-semibold">
            Status: {getStatus(pageBounty?.status ?? "")}
          </P>
          <p className="my-3 flex items-center gap-3 font-semibold">
            Pay:
            <div className="aspect-square w-7 rounded-full bg-primary">
              <Image alt="solana" src="/solana.svg" width={30} height={30} />
            </div>
            {pageBounty?.pay} USDC
          </p>
        </div>

        {pageBounty?.status == "OPEN" && (
          <div className="mx-auto my-3 flex max-w-4xl items-center justify-between gap-3">
            <Button onClick={handleStart} variant="secondary" >Start Bounty</Button>
            <Button onClick={handleEnd}>Cancel Bounty</Button>
          </div>
        )}

        {pageBounty?.status == "IN_PROGRESS" && (
          <div className="mx-auto my-3 flex max-w-4xl items-center justify-center gap-3">
            <Button onClick={handleEnd} variant="secondary">Bounty Completed</Button>
          </div>
        )}
      </div> : <div className="m-5 text-center text-xl">Give me a sec! ⌛</div>}

      {(pageBounty?.status == "OPEN" || pageBounty?.status == "IN_PROGRESS") && (
        <div>
          <H3 className="my-5 text-center font-bold text-primary">
            {pageBounty.status == "OPEN"? "Applicants" : "Developers"}
          </H3>
          {applicants && applicants.length > 0 && (
            <Table
              columns={APPLICANTS_COLUMNS}
              data={applicants.filter(app => {
                if (pageBounty.status == "IN_PROGRESS"){
                  return app.status == "ACCEPTED"
                } 
                return true
              })}
              marginTop="mt-4"
              whenRowClick={onRowClick}
            />
          )}
        </div>
      )}

      {viewManage && (
        <Manage
          item={applicants?.find((app) => app.id == selectedApplicant)}
          handleClick={() => {
            setViewManage(false);
          }}
          name={applicants?.find((app) => app.id == selectedApplicant)?.name ?? ""}
        />
      )}
    </div>
  );
}

const Manage = ({ item, handleClick, name }: ManageProps) => {
  const acceptApplication = api.bounty.acceptApplication.useMutation({})
  const rejectApplication = api.bounty.rejectApplication.useMutation({})
  const handleAccept = async() => {
    try{
      acceptApplication.mutate({applicationId: item?.id ?? ""}, {
        onSuccess: () => {
          alert("Application accepted successfully!")
        },
        onError: () => {
          alert("Failed to accept application!")
        }
      })
    } catch(err){
      console.log(err)
    } finally{
      handleClick()
    }
  }

  const handleReject = async() => {
    try{
      rejectApplication.mutate({applicationId: item?.id ?? ""}, {
        onSuccess: () => {
          alert("Application rejected successfully!")
        },
        onError: () => {
          alert("Failed to reject application!")
        }
      })
    } catch(err){
      console.log(err)
    } finally{
      handleClick()
    }
  }

  return (
    <div className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center backdrop-blur-lg backdrop-brightness-50">
      <section className="relative flex w-[300px] flex-col items-center gap-5 rounded-lg bg-primary-foreground p-3 py-8">
        <CloseButton handleClick={handleClick} />
        <p>
          <b>{name}</b>
        </p>
        {item?.status == "PENDING" && (
          <div>
            <Button
             onClick={handleAccept}
             variant="secondary">Accept Application</Button>
            <Button onClick={handleReject}>Reject Application</Button>
          </div>
        )}
        {item?.status == "ACCEPTED" && (
          <P className="font-semibold text-secondary">
            {item?.status.toUpperCase()}
          </P>
        )}
        {item?.status == "REJECTED" && (
          <P className="font-semibold text-destructive">
            {item?.status.toUpperCase()}
          </P>
        )}
      </section>
    </div>
  );
};

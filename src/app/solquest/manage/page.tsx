import Manage from "./manage";
import { getServerAuthSession } from "~/server/auth";

export default async function ManageBounties(){
  const session = await getServerAuthSession()
  return <Manage session={session}/>
}
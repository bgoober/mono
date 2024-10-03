import { getServerAuthSession } from "~/server/auth";
import CreateBounty from "./create";


async function Create() {
  const session = await getServerAuthSession()
 return(
  <CreateBounty session={session}/>
 )
}

export default Create
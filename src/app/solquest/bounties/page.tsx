import Bounties from "./bounties";
import { getServerAuthSession } from "~/server/auth";

export default async function ListBounties() {
  const session = await getServerAuthSession();
  return <Bounties session={session} />;
}

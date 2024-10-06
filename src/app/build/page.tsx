import { getServerAuthSession } from "~/server/auth";
import dynamic from "next/dynamic";

const CrownfundingComponent = dynamic(
  () => import("../../_components/crownfunding/CrownfundingComponent"),
  {
    ssr: false,
  },
);

async function Campaigns() {
  const session = await getServerAuthSession();

  return (
    <div className="container mx-auto px-4 py-8">
      <CrownfundingComponent session={session!} />
    </div>
  );
}

export default Campaigns;

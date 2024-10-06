import dynamic from "next/dynamic";

const ClientCampaign = dynamic(() => import("./ClientCampaign"), {
  ssr: false,
});

async function Campaign({ params }: { params: { slug: string } }) {
  const id = params.slug;

  return <ClientCampaign id={id} />;
}

export default Campaign;

import { GetStaticPaths } from "next";
import bounties from "~/constants/bounty.json";

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = bounties.map((bounty) => ({
      params: { id: bounty.id },
    }));

    return { paths, fallback: false };
  };
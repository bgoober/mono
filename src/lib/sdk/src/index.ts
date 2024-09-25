import * as web3 from "@solana/web3.js";

export const PROGRAM_PUBKEY = new web3.PublicKey(
  "C5M2JxBaxmsW62BgujPXEPytw65igtUjr6mFbD5pmypM"
);

export const PROGRAM_ADDRESS = "C5M2JxBaxmsW62BgujPXEPytw65igtUjr6mFbD5pmypM";

export * from "./accounts";

export * from "./instructions";

export * from "./types";

export * from "./errors";

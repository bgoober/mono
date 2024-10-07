/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/mono_program.json`.
 */
export type BountyProgram = {
  address: "SprkQVf65fQgM1uXnappTpyFs2f2HkJtshFVWTHDVzX";
  metadata: {
    name: "monoProgram";
    version: "0.1.0";
    spec: "0.1.0";
    description: "Created with Anchor";
  };
  instructions: [
    {
      name: "addApprovedSubmitters";
      discriminator: [224, 42, 94, 122, 54, 73, 116, 35];
      accounts: [
        {
          name: "creator";
          writable: true;
          signer: true;
        },
        {
          name: "submitter";
        },
        {
          name: "featureDataAccount";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [109, 111, 110, 111];
              },
              {
                kind: "account";
                path: "feature_data_account.unix_timestamp";
                account: "featureDataAccount";
              },
              {
                kind: "account";
                path: "creator";
              },
            ];
          };
        },
      ];
      args: [];
    },
    {
      name: "approveRequest";
      discriminator: [89, 68, 167, 104, 93, 25, 178, 205];
      accounts: [
        {
          name: "creator";
          writable: true;
          signer: true;
        },
        {
          name: "submitter";
          writable: true;
        },
        {
          name: "payoutAccount";
          writable: true;
        },
        {
          name: "featureDataAccount";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [109, 111, 110, 111];
              },
              {
                kind: "account";
                path: "feature_data_account.unix_timestamp";
                account: "featureDataAccount";
              },
              {
                kind: "account";
                path: "creator";
              },
            ];
          };
        },
        {
          name: "featureTokenAccount";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [109, 111, 110, 111];
              },
              {
                kind: "account";
                path: "feature_data_account.unix_timestamp";
                account: "featureDataAccount";
              },
              {
                kind: "account";
                path: "creator";
              },
              {
                kind: "account";
                path: "feature_data_account.funds_mint";
                account: "featureDataAccount";
              },
            ];
          };
        },
        {
          name: "programAuthority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [109, 111, 110, 111];
              },
            ];
          };
        },
        {
          name: "tokenProgram";
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
        },
      ];
      args: [];
    },
    {
      name: "cancelFeature";
      discriminator: [49, 2, 11, 112, 108, 0, 212, 168];
      accounts: [
        {
          name: "creator";
          writable: true;
          signer: true;
        },
        {
          name: "creatorTokenAccount";
          writable: true;
        },
        {
          name: "featureDataAccount";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [109, 111, 110, 111];
              },
              {
                kind: "account";
                path: "feature_data_account.unix_timestamp";
                account: "featureDataAccount";
              },
              {
                kind: "account";
                path: "creator";
              },
            ];
          };
        },
        {
          name: "featureTokenAccount";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [109, 111, 110, 111];
              },
              {
                kind: "account";
                path: "feature_data_account.unix_timestamp";
                account: "featureDataAccount";
              },
              {
                kind: "account";
                path: "creator";
              },
              {
                kind: "account";
                path: "feature_data_account.funds_mint";
                account: "featureDataAccount";
              },
            ];
          };
        },
        {
          name: "programAuthority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [109, 111, 110, 111];
              },
            ];
          };
        },
        {
          name: "tokenProgram";
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
        },
      ];
      args: [];
    },
    {
      name: "createFeatureFundingAccount";
      discriminator: [57, 107, 49, 145, 184, 154, 41, 73];
      accounts: [
        {
          name: "creator";
          writable: true;
          signer: true;
        },
        {
          name: "fundsMint";
        },
        {
          name: "featureDataAccount";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [109, 111, 110, 111];
              },
              {
                kind: "arg";
                path: "unixTimestamp";
              },
              {
                kind: "account";
                path: "creator";
              },
            ];
          };
        },
        {
          name: "featureTokenAccount";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [109, 111, 110, 111];
              },
              {
                kind: "arg";
                path: "unixTimestamp";
              },
              {
                kind: "account";
                path: "creator";
              },
              {
                kind: "account";
                path: "fundsMint";
              },
            ];
          };
        },
        {
          name: "programAuthority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [109, 111, 110, 111];
              },
            ];
          };
        },
        {
          name: "tokenProgram";
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
        },
        {
          name: "rent";
          address: "SysvarRent111111111111111111111111111111111";
        },
        {
          name: "associatedProgram";
          address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        },
      ];
      args: [
        {
          name: "unixTimestamp";
          type: "string";
        },
      ];
    },
    {
      name: "denyRequest";
      discriminator: [143, 236, 238, 188, 131, 164, 217, 107];
      accounts: [
        {
          name: "creator";
          writable: true;
          signer: true;
        },
        {
          name: "submitter";
          writable: true;
        },
        {
          name: "featureDataAccount";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [109, 111, 110, 111];
              },
              {
                kind: "account";
                path: "feature_data_account.unix_timestamp";
                account: "featureDataAccount";
              },
              {
                kind: "account";
                path: "creator";
              },
            ];
          };
        },
      ];
      args: [];
    },
    {
      name: "fundFeature";
      discriminator: [34, 201, 1, 12, 145, 231, 153, 48];
      accounts: [
        {
          name: "creator";
          writable: true;
          signer: true;
        },
        {
          name: "creatorTokenAccount";
          writable: true;
        },
        {
          name: "fundsMint";
        },
        {
          name: "featureDataAccount";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [109, 111, 110, 111];
              },
              {
                kind: "account";
                path: "feature_data_account.unix_timestamp";
                account: "featureDataAccount";
              },
              {
                kind: "account";
                path: "creator";
              },
            ];
          };
        },
        {
          name: "featureTokenAccount";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [109, 111, 110, 111];
              },
              {
                kind: "account";
                path: "feature_data_account.unix_timestamp";
                account: "featureDataAccount";
              },
              {
                kind: "account";
                path: "creator";
              },
              {
                kind: "account";
                path: "fundsMint";
              },
            ];
          };
        },
        {
          name: "programAuthority";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [109, 111, 110, 111];
              },
            ];
          };
        },
        {
          name: "tokenProgram";
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        },
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        },
      ];
    },
    {
      name: "removeApprovedSubmitters";
      discriminator: [161, 227, 45, 18, 34, 188, 29, 86];
      accounts: [
        {
          name: "creator";
          writable: true;
          signer: true;
        },
        {
          name: "submitter";
        },
        {
          name: "featureDataAccount";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [109, 111, 110, 111];
              },
              {
                kind: "account";
                path: "feature_data_account.unix_timestamp";
                account: "featureDataAccount";
              },
              {
                kind: "account";
                path: "creator";
              },
            ];
          };
        },
      ];
      args: [];
    },
    {
      name: "submitRequest";
      discriminator: [122, 30, 180, 251, 206, 230, 254, 57];
      accounts: [
        {
          name: "creator";
          writable: true;
        },
        {
          name: "submitter";
          signer: true;
        },
        {
          name: "payoutAccount";
        },
        {
          name: "featureDataAccount";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [109, 111, 110, 111];
              },
              {
                kind: "account";
                path: "feature_data_account.unix_timestamp";
                account: "featureDataAccount";
              },
              {
                kind: "account";
                path: "creator";
              },
            ];
          };
        },
      ];
      args: [];
    },
    {
      name: "voteToCancel";
      discriminator: [194, 0, 195, 112, 133, 79, 237, 253];
      accounts: [
        {
          name: "creator";
          writable: true;
        },
        {
          name: "voter";
          writable: true;
          signer: true;
        },
        {
          name: "featureDataAccount";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [109, 111, 110, 111];
              },
              {
                kind: "account";
                path: "feature_data_account.unix_timestamp";
                account: "featureDataAccount";
              },
              {
                kind: "account";
                path: "creator";
              },
            ];
          };
        },
      ];
      args: [
        {
          name: "isCancel";
          type: "bool";
        },
      ];
    },
  ];
  accounts: [
    {
      name: "featureDataAccount";
      discriminator: [150, 142, 52, 15, 66, 242, 210, 165];
    },
  ];
  errors: [
    {
      code: 6000;
      name: "notTheCreator";
      msg: "This Creator is Invalid";
    },
    {
      code: 6001;
      name: "invalidMint";
      msg: "This mint is not valid";
    },
    {
      code: 6002;
      name: "maxApprovedSubmitters";
      msg: "Max Number of Approved Submitters already reached";
    },
    {
      code: 6003;
      name: "minApprovedSubmitters";
      msg: "Max Number of Approved Submitters already reached";
    },
    {
      code: 6004;
      name: "pendingRequestAlreadySubmitted";
      msg: "There is an active request already present";
    },
    {
      code: 6005;
      name: "noActiveRequest";
      msg: "No Request Submitted yet";
    },
    {
      code: 6006;
      name: "cannotCancelFeature";
      msg: "Cannot Cancel Feature";
    },
  ];
  types: [
    {
      name: "featureDataAccount";
      type: {
        kind: "struct";
        fields: [
          {
            name: "creator";
            type: "pubkey";
          },
          {
            name: "requestSubmitted";
            type: "bool";
          },
          {
            name: "currentSubmitter";
            type: "pubkey";
          },
          {
            name: "approvedSubmitters";
            type: {
              array: ["pubkey", 3];
            };
          },
          {
            name: "fundsMint";
            type: "pubkey";
          },
          {
            name: "fundsTokenAccount";
            type: "pubkey";
          },
          {
            name: "payoutAccount";
            type: "pubkey";
          },
          {
            name: "funderCancel";
            type: "bool";
          },
          {
            name: "payoutCancel";
            type: "bool";
          },
          {
            name: "noOfSubmitters";
            type: "u8";
          },
          {
            name: "fundsTokenAccountBump";
            type: "u8";
          },
          {
            name: "fundsDataAccountBump";
            type: "u8";
          },
          {
            name: "programAuthorityBump";
            type: "u8";
          },
          {
            name: "unixTimestamp";
            type: "string";
          },
        ];
      };
    },
  ];
};

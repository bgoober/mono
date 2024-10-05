export type GovernanceProgram = {
  address: "A3bq5ABJ2npx7t82K9AyhXT2Cd2P3g5R2gks3CkL1bnS";
  metadata: {
    name: "governance";
    version: "0.1.0";
    spec: "0.1.0";
    description: "Created with Anchor";
  };
  instructions: [
    {
      name: "cleanup_proposal";
      discriminator: [181, 244, 237, 139, 133, 155, 102, 216];
      accounts: [
        {
          name: "owner";
          writable: true;
          signer: true;
        },
        {
          name: "payee";
          writable: true;
        },
        {
          name: "proposal";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [112, 114, 111, 112, 111, 115, 97, 108];
              },
              {
                kind: "account";
                path: "config";
              },
              {
                kind: "account";
                path: "proposal.id";
                account: "Proposal";
              },
            ];
          };
        },
        {
          name: "proposal_config";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [112, 114, 111, 112, 111, 115, 97, 108, 99, 102, 103];
              },
              {
                kind: "account";
                path: "config";
              },
            ];
          };
        },
        {
          name: "config";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 111, 110, 102, 105, 103];
              },
              {
                kind: "account";
                path: "config.seed";
                account: "DaoConfig";
              },
            ];
            program: {
              kind: "const";
              value: [
                212,
                163,
                198,
                132,
                83,
                186,
                149,
                217,
                72,
                27,
                113,
                77,
                3,
                58,
                153,
                167,
                121,
                74,
                80,
                15,
                206,
                155,
                14,
                57,
                153,
                170,
                51,
                102,
                58,
                111,
                134,
                177,
              ];
            };
          };
        },
        {
          name: "treasury";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [116, 114, 101, 97, 115, 117, 114, 121];
              },
              {
                kind: "account";
                path: "config";
              },
            ];
            program: {
              kind: "const";
              value: [
                212,
                163,
                198,
                132,
                83,
                186,
                149,
                217,
                72,
                27,
                113,
                77,
                3,
                58,
                153,
                167,
                121,
                74,
                80,
                15,
                206,
                155,
                14,
                57,
                153,
                170,
                51,
                102,
                58,
                111,
                134,
                177,
              ];
            };
          };
        },
        {
          name: "core_program";
          address: "FK4GzgwHvmHz9yFWL8nzEkXgA2sc3vPimRJiwver64Y8";
        },
        {
          name: "system_program";
          address: "11111111111111111111111111111111";
        },
        {
          name: "instructions";
          address: "Sysvar1nstructions1111111111111111111111111";
        },
      ];
      args: [];
    },
    {
      name: "cleanup_vote";
      discriminator: [64, 230, 248, 15, 247, 114, 249, 202];
      accounts: [
        {
          name: "owner";
          writable: true;
          signer: true;
        },
        {
          name: "vote";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [118, 111, 116, 101];
              },
              {
                kind: "account";
                path: "owner";
              },
              {
                kind: "account";
                path: "proposal";
              },
            ];
          };
        },
        {
          name: "proposal";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [112, 114, 111, 112, 111, 115, 97, 108];
              },
              {
                kind: "account";
                path: "config";
              },
              {
                kind: "account";
                path: "proposal.id";
                account: "Proposal";
              },
            ];
          };
        },
        {
          name: "staking_program";
          address: "5ER7DVPftAuJ5DMz1mdrFC5VXQSo2zJZqv1H7GtpebK1";
          relations: ["config"];
        },
        {
          name: "stake_state";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [115, 116, 97, 107, 101];
              },
              {
                kind: "account";
                path: "config";
              },
              {
                kind: "account";
                path: "owner";
              },
            ];
            program: {
              kind: "account";
              path: "staking_program";
            };
          };
        },
        {
          name: "config";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 111, 110, 102, 105, 103];
              },
              {
                kind: "account";
                path: "config.seed";
                account: "DaoConfig";
              },
            ];
            program: {
              kind: "const";
              value: [
                212,
                163,
                198,
                132,
                83,
                186,
                149,
                217,
                72,
                27,
                113,
                77,
                3,
                58,
                153,
                167,
                121,
                74,
                80,
                15,
                206,
                155,
                14,
                57,
                153,
                170,
                51,
                102,
                58,
                111,
                134,
                177,
              ];
            };
          };
        },
        {
          name: "treasury";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [116, 114, 101, 97, 115, 117, 114, 121];
              },
              {
                kind: "account";
                path: "config";
              },
            ];
            program: {
              kind: "const";
              value: [
                212,
                163,
                198,
                132,
                83,
                186,
                149,
                217,
                72,
                27,
                113,
                77,
                3,
                58,
                153,
                167,
                121,
                74,
                80,
                15,
                206,
                155,
                14,
                57,
                153,
                170,
                51,
                102,
                58,
                111,
                134,
                177,
              ];
            };
          };
        },
        {
          name: "system_program";
          address: "11111111111111111111111111111111";
        },
        {
          name: "instructions";
          address: "Sysvar1nstructions1111111111111111111111111";
        },
      ];
      args: [];
    },
    {
      name: "create_proposal";
      discriminator: [132, 116, 68, 174, 216, 160, 198, 22];
      accounts: [
        {
          name: "owner";
          writable: true;
          signer: true;
        },
        {
          name: "proposal";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [112, 114, 111, 112, 111, 115, 97, 108];
              },
              {
                kind: "account";
                path: "config";
              },
              {
                kind: "arg";
                path: "id";
              },
            ];
          };
        },
        {
          name: "proposal_config";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [112, 114, 111, 112, 111, 115, 97, 108, 99, 102, 103];
              },
              {
                kind: "account";
                path: "config";
              },
            ];
          };
        },
        {
          name: "staking_program";
          address: "5ER7DVPftAuJ5DMz1mdrFC5VXQSo2zJZqv1H7GtpebK1";
          relations: ["config"];
        },
        {
          name: "stake_state";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [115, 116, 97, 107, 101];
              },
              {
                kind: "account";
                path: "config";
              },
              {
                kind: "account";
                path: "owner";
              },
            ];
            program: {
              kind: "account";
              path: "staking_program";
            };
          };
        },
        {
          name: "config";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 111, 110, 102, 105, 103];
              },
              {
                kind: "account";
                path: "config.seed";
                account: "DaoConfig";
              },
            ];
            program: {
              kind: "const";
              value: [
                212,
                163,
                198,
                132,
                83,
                186,
                149,
                217,
                72,
                27,
                113,
                77,
                3,
                58,
                153,
                167,
                121,
                74,
                80,
                15,
                206,
                155,
                14,
                57,
                153,
                170,
                51,
                102,
                58,
                111,
                134,
                177,
              ];
            };
          };
        },
        {
          name: "treasury";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [116, 114, 101, 97, 115, 117, 114, 121];
              },
              {
                kind: "account";
                path: "config";
              },
            ];
            program: {
              kind: "const";
              value: [
                212,
                163,
                198,
                132,
                83,
                186,
                149,
                217,
                72,
                27,
                113,
                77,
                3,
                58,
                153,
                167,
                121,
                74,
                80,
                15,
                206,
                155,
                14,
                57,
                153,
                170,
                51,
                102,
                58,
                111,
                134,
                177,
              ];
            };
          };
        },
        {
          name: "system_program";
          address: "11111111111111111111111111111111";
        },
      ];
      args: [
        {
          name: "id";
          type: "u64";
        },
        {
          name: "name";
          type: "string";
        },
        {
          name: "uri";
          type: "string";
        },
        {
          name: "proposal";
          type: {
            defined: {
              name: "ProposalType";
            };
          };
        },
        {
          name: "quorum";
          type: "u8";
        },
        {
          name: "threshold";
          type: "u64";
        },
        {
          name: "expiry";
          type: "u64";
        },
        {
          name: "choices";
          type: "u8";
        },
        {
          name: "analysis_period";
          type: "u64";
        },
      ];
    },
    {
      name: "execute_proposal";
      discriminator: [186, 60, 116, 133, 108, 128, 111, 28];
      accounts: [
        {
          name: "owner";
          writable: true;
          signer: true;
        },
        {
          name: "payee";
          writable: true;
        },
        {
          name: "proposal";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [112, 114, 111, 112, 111, 115, 97, 108];
              },
              {
                kind: "account";
                path: "config";
              },
              {
                kind: "account";
                path: "proposal.id";
                account: "Proposal";
              },
            ];
          };
        },
        {
          name: "proposal_config";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [112, 114, 111, 112, 111, 115, 97, 108, 99, 102, 103];
              },
              {
                kind: "account";
                path: "config";
              },
            ];
          };
        },
        {
          name: "config";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 111, 110, 102, 105, 103];
              },
              {
                kind: "account";
                path: "config.seed";
                account: "DaoConfig";
              },
            ];
            program: {
              kind: "const";
              value: [
                212,
                163,
                198,
                132,
                83,
                186,
                149,
                217,
                72,
                27,
                113,
                77,
                3,
                58,
                153,
                167,
                121,
                74,
                80,
                15,
                206,
                155,
                14,
                57,
                153,
                170,
                51,
                102,
                58,
                111,
                134,
                177,
              ];
            };
          };
        },
        {
          name: "treasury";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [116, 114, 101, 97, 115, 117, 114, 121];
              },
              {
                kind: "account";
                path: "config";
              },
            ];
            program: {
              kind: "const";
              value: [
                212,
                163,
                198,
                132,
                83,
                186,
                149,
                217,
                72,
                27,
                113,
                77,
                3,
                58,
                153,
                167,
                121,
                74,
                80,
                15,
                206,
                155,
                14,
                57,
                153,
                170,
                51,
                102,
                58,
                111,
                134,
                177,
              ];
            };
          };
        },
        {
          name: "core_program";
          address: "FK4GzgwHvmHz9yFWL8nzEkXgA2sc3vPimRJiwver64Y8";
        },
        {
          name: "system_program";
          address: "11111111111111111111111111111111";
        },
        {
          name: "instructions";
          address: "Sysvar1nstructions1111111111111111111111111";
        },
      ];
      args: [];
    },
    {
      name: "remove_vote";
      discriminator: [32, 187, 23, 3, 156, 232, 55, 177];
      accounts: [
        {
          name: "owner";
          writable: true;
          signer: true;
        },
        {
          name: "vote";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [118, 111, 116, 101];
              },
              {
                kind: "account";
                path: "owner";
              },
              {
                kind: "account";
                path: "proposal";
              },
            ];
          };
        },
        {
          name: "proposal";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [112, 114, 111, 112, 111, 115, 97, 108];
              },
              {
                kind: "account";
                path: "config";
              },
              {
                kind: "account";
                path: "proposal.id";
                account: "Proposal";
              },
            ];
          };
        },
        {
          name: "staking_program";
          address: "5ER7DVPftAuJ5DMz1mdrFC5VXQSo2zJZqv1H7GtpebK1";
          relations: ["config"];
        },
        {
          name: "stake_state";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [115, 116, 97, 107, 101];
              },
              {
                kind: "account";
                path: "config";
              },
              {
                kind: "account";
                path: "owner";
              },
            ];
            program: {
              kind: "account";
              path: "staking_program";
            };
          };
        },
        {
          name: "config";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 111, 110, 102, 105, 103];
              },
              {
                kind: "account";
                path: "config.seed";
                account: "DaoConfig";
              },
            ];
            program: {
              kind: "const";
              value: [
                212,
                163,
                198,
                132,
                83,
                186,
                149,
                217,
                72,
                27,
                113,
                77,
                3,
                58,
                153,
                167,
                121,
                74,
                80,
                15,
                206,
                155,
                14,
                57,
                153,
                170,
                51,
                102,
                58,
                111,
                134,
                177,
              ];
            };
          };
        },
        {
          name: "treasury";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [116, 114, 101, 97, 115, 117, 114, 121];
              },
              {
                kind: "account";
                path: "config";
              },
            ];
            program: {
              kind: "const";
              value: [
                212,
                163,
                198,
                132,
                83,
                186,
                149,
                217,
                72,
                27,
                113,
                77,
                3,
                58,
                153,
                167,
                121,
                74,
                80,
                15,
                206,
                155,
                14,
                57,
                153,
                170,
                51,
                102,
                58,
                111,
                134,
                177,
              ];
            };
          };
        },
        {
          name: "system_program";
          address: "11111111111111111111111111111111";
        },
        {
          name: "instructions";
          address: "Sysvar1nstructions1111111111111111111111111";
        },
      ];
      args: [];
    },
    {
      name: "set_cfg";
      discriminator: [232, 250, 215, 251, 229, 253, 170, 18];
      accounts: [
        {
          name: "initializer";
          writable: true;
          signer: true;
        },
        {
          name: "proposal_config";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [112, 114, 111, 112, 111, 115, 97, 108, 99, 102, 103];
              },
              {
                kind: "account";
                path: "config";
              },
            ];
          };
        },
        {
          name: "config";
        },
        {
          name: "system_program";
          address: "11111111111111111111111111111111";
        },
        {
          name: "instructions";
          address: "Sysvar1nstructions1111111111111111111111111";
        },
      ];
      args: [
        {
          name: "proposal_fee_bounty";
          type: "u64";
        },
        {
          name: "proposal_fee_executable";
          type: "u64";
        },
        {
          name: "proposal_fee_vote";
          type: "u64";
        },
        {
          name: "proposal_fee_vote_multiple";
          type: "u64";
        },
        {
          name: "max_expiry";
          type: "u64";
        },
        {
          name: "min_threshold";
          type: "u64";
        },
        {
          name: "min_quorum";
          type: "u8";
        },
        {
          name: "proposal_analysis_period";
          type: "u64";
        },
        {
          name: "n_quorum_epoch";
          type: "u8";
        },
        {
          name: "threshold_create_proposals";
          type: "u64";
        },
      ];
    },
    {
      name: "veto_cancel_proposal";
      discriminator: [182, 93, 33, 104, 36, 249, 143, 170];
      accounts: [
        {
          name: "veto_council";
          writable: true;
          signer: true;
          relations: ["config"];
        },
        {
          name: "proposal";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [112, 114, 111, 112, 111, 115, 97, 108];
              },
              {
                kind: "account";
                path: "config";
              },
              {
                kind: "account";
                path: "proposal.id";
                account: "Proposal";
              },
            ];
          };
        },
        {
          name: "config";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 111, 110, 102, 105, 103];
              },
              {
                kind: "account";
                path: "config.seed";
                account: "DaoConfig";
              },
            ];
            program: {
              kind: "const";
              value: [
                212,
                163,
                198,
                132,
                83,
                186,
                149,
                217,
                72,
                27,
                113,
                77,
                3,
                58,
                153,
                167,
                121,
                74,
                80,
                15,
                206,
                155,
                14,
                57,
                153,
                170,
                51,
                102,
                58,
                111,
                134,
                177,
              ];
            };
          };
        },
        {
          name: "treasury";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [116, 114, 101, 97, 115, 117, 114, 121];
              },
              {
                kind: "account";
                path: "config";
              },
            ];
            program: {
              kind: "const";
              value: [
                212,
                163,
                198,
                132,
                83,
                186,
                149,
                217,
                72,
                27,
                113,
                77,
                3,
                58,
                153,
                167,
                121,
                74,
                80,
                15,
                206,
                155,
                14,
                57,
                153,
                170,
                51,
                102,
                58,
                111,
                134,
                177,
              ];
            };
          };
        },
        {
          name: "system_program";
          address: "11111111111111111111111111111111";
        },
      ];
      args: [];
    },
    {
      name: "vote";
      discriminator: [227, 110, 155, 23, 136, 126, 172, 25];
      accounts: [
        {
          name: "owner";
          writable: true;
          signer: true;
        },
        {
          name: "vote";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [118, 111, 116, 101];
              },
              {
                kind: "account";
                path: "owner";
              },
              {
                kind: "account";
                path: "proposal";
              },
            ];
          };
        },
        {
          name: "proposal";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [112, 114, 111, 112, 111, 115, 97, 108];
              },
              {
                kind: "account";
                path: "config";
              },
              {
                kind: "account";
                path: "proposal.id";
                account: "Proposal";
              },
            ];
          };
        },
        {
          name: "staking_program";
          address: "5ER7DVPftAuJ5DMz1mdrFC5VXQSo2zJZqv1H7GtpebK1";
          relations: ["config"];
        },
        {
          name: "stake_state";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [115, 116, 97, 107, 101];
              },
              {
                kind: "account";
                path: "config";
              },
              {
                kind: "account";
                path: "owner";
              },
            ];
            program: {
              kind: "account";
              path: "staking_program";
            };
          };
        },
        {
          name: "config";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 111, 110, 102, 105, 103];
              },
              {
                kind: "account";
                path: "config.seed";
                account: "DaoConfig";
              },
            ];
            program: {
              kind: "const";
              value: [
                212,
                163,
                198,
                132,
                83,
                186,
                149,
                217,
                72,
                27,
                113,
                77,
                3,
                58,
                153,
                167,
                121,
                74,
                80,
                15,
                206,
                155,
                14,
                57,
                153,
                170,
                51,
                102,
                58,
                111,
                134,
                177,
              ];
            };
          };
        },
        {
          name: "system_program";
          address: "11111111111111111111111111111111";
        },
        {
          name: "instructions";
          address: "Sysvar1nstructions1111111111111111111111111";
        },
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        },
        {
          name: "choice";
          type: "u8";
        },
      ];
    },
  ];
  accounts: [
    {
      name: "DaoConfig";
      discriminator: [55, 209, 87, 224, 30, 202, 192, 246];
    },
    {
      name: "Proposal";
      discriminator: [26, 94, 189, 187, 116, 136, 53, 33];
    },
    {
      name: "ProposalConfig";
      discriminator: [6, 201, 56, 255, 231, 89, 34, 27];
    },
    {
      name: "StakeState";
      discriminator: [108, 10, 236, 72, 1, 88, 133, 92];
    },
    {
      name: "VoteState";
      discriminator: [100, 177, 100, 106, 158, 188, 195, 137];
    },
  ];
  events: [
    {
      name: "CreateProposalEvent";
      discriminator: [53, 59, 88, 200, 122, 209, 79, 73];
    },
    {
      name: "ExecuteProposalEvent";
      discriminator: [153, 12, 41, 73, 206, 114, 248, 233];
    },
  ];
  errors: [
    {
      code: 6000;
      name: "DefaultError";
      msg: "Default Error";
    },
    {
      code: 6001;
      name: "BumpError";
      msg: "Bump Error";
    },
    {
      code: 6002;
      name: "Overflow";
      msg: "Overflow";
    },
    {
      code: 6003;
      name: "Underflow";
      msg: "Underflow";
    },
    {
      code: 6004;
      name: "AccountsOpen";
      msg: "You can't unstake with open accounts";
    },
    {
      code: 6005;
      name: "Expired";
      msg: "Proposal expired";
    },
    {
      code: 6006;
      name: "InvalidSlot";
      msg: "Invalid slot";
    },
    {
      code: 6007;
      name: "InsufficientStake";
      msg: "Insufficient stake";
    },
    {
      code: 6008;
      name: "InvalidName";
      msg: "Invalid name";
    },
    {
      code: 6009;
      name: "InvalidGist";
      msg: "Invalid gist";
    },
    {
      code: 6010;
      name: "InvalidProposalSeed";
      msg: "Invalid proposal seed";
    },
    {
      code: 6011;
      name: "InvalidQuorum";
      msg: "Invalid quorum";
    },
    {
      code: 6012;
      name: "InvalidExpiry";
      msg: "Invalid expiry";
    },
    {
      code: 6013;
      name: "ProposalClosed";
      msg: "Proposal closed";
    },
    {
      code: 6014;
      name: "InvalidVoteAmount";
      msg: "You can't vote 0!";
    },
    {
      code: 6015;
      name: "InvalidProposalStatus";
      msg: "Invalid proposal status";
    },
    {
      code: 6016;
      name: "InvalidStakeAmount";
      msg: "Invalid stake amount";
    },
    {
      code: 6017;
      name: "InvalidThreshold";
      msg: "Invalid Threshold";
    },
    {
      code: 6018;
      name: "InvalidRequiredTime";
      msg: "Invalid Required Time";
    },
    {
      code: 6019;
      name: "InvalidVoteType";
      msg: "Invalid Vote Type";
    },
    {
      code: 6020;
      name: "SingleChoice";
      msg: "AlreadyVoted";
    },
    {
      code: 6021;
      name: "InvalidChoicesAmount";
      msg: "Invalid choices amount";
    },
    {
      code: 6022;
      name: "InvalidChoice";
      msg: "Invalid choice";
    },
    {
      code: 6023;
      name: "CollectionNotSet";
      msg: "Collection not set";
    },
    {
      code: 6024;
      name: "InvalidCollection";
      msg: "Invalid Collection";
    },
    {
      code: 6025;
      name: "WrongSigner";
      msg: "Wrong Signer";
    },
    {
      code: 6026;
      name: "LockedToken";
      msg: "Locked tockens";
    },
    {
      code: 6027;
      name: "InvalidEvaluationPeriod";
      msg: "Invalid evaluation_phase_period";
    },
    {
      code: 6028;
      name: "InvalidEpoch";
      msg: "Invalid epchj";
    },
    {
      code: 6029;
      name: "InvalidInstructionIndex";
      msg: "InvalidInstructionIndex";
    },
    {
      code: 6030;
      name: "ProgramMismatch";
      msg: "ProgramMismatch";
    },
    {
      code: 6031;
      name: "ProposalTie";
      msg: "Proposal 2 choices with the same MAX AMOUNT";
    },
  ];
  types: [
    {
      name: "CreateProposalEvent";
      type: {
        kind: "struct";
        fields: [
          {
            name: "dao_id";
            type: "pubkey";
          },
          {
            name: "proposal_creator";
            type: "pubkey";
          },
          {
            name: "proposal_id";
            type: "u64";
          },
          {
            name: "proposal_type";
            type: {
              defined: {
                name: "ProposalType";
              };
            };
          },
          {
            name: "proposal_quorum";
            type: "u8";
          },
          {
            name: "proposal_threshold";
            type: "u64";
          },
        ];
      };
    },
    {
      name: "DaoConfig";
      type: {
        kind: "struct";
        fields: [
          {
            name: "seed";
            type: "u64";
          },
          {
            name: "config_bump";
            type: "u8";
          },
          {
            name: "treasury_bump";
            type: "u8";
          },
          {
            name: "is_hybrid";
            type: "bool";
          },
          {
            name: "collection_mint";
            type: {
              option: "pubkey";
            };
          },
          {
            name: "mint";
            type: {
              option: "pubkey";
            };
          },
          {
            name: "circulating_supply";
            type: "u64";
          },
          {
            name: "allow_sub_dao";
            type: "bool";
          },
          {
            name: "threshold_create_subdao";
            type: {
              option: "u64";
            };
          },
          {
            name: "subdao_fee";
            type: {
              option: "u64";
            };
          },
          {
            name: "veto_council";
            type: "pubkey";
          },
          {
            name: "governance_program";
            type: "pubkey";
          },
          {
            name: "staking_program";
            type: "pubkey";
          },
          {
            name: "is_sub_dao";
            type: "bool";
          },
          {
            name: "dao_config_key";
            type: "pubkey";
          },
          {
            name: "dao_treasury";
            type: "pubkey";
          },
        ];
      };
    },
    {
      name: "ExecutableProposal";
      type: {
        kind: "enum";
        variants: [
          {
            name: "SetProposalFeeBounty";
            fields: ["u64"];
          },
          {
            name: "SetProposalFeeExecutable";
            fields: ["u64"];
          },
          {
            name: "SetProposalFeeVote";
            fields: ["u64"];
          },
          {
            name: "SetProposalFeeVoteMultiple";
            fields: ["u64"];
          },
          {
            name: "SetMaxExpiry";
            fields: ["u64"];
          },
          {
            name: "SetThreshold";
            fields: ["u64"];
          },
          {
            name: "SetQuorum";
            fields: ["u8"];
          },
          {
            name: "SetAnalysisPeriod";
            fields: ["u64"];
          },
          {
            name: "SetThresholdCreateProposals";
            fields: ["u64"];
          },
          {
            name: "SetAllowSubdao";
            fields: [
              "bool",
              {
                option: "u64";
              },
              {
                option: "u64";
              },
            ];
          },
          {
            name: "SetVetoCouncil";
            fields: ["pubkey"];
          },
        ];
      };
    },
    {
      name: "ExecuteProposalEvent";
      type: {
        kind: "struct";
        fields: [
          {
            name: "dao_id";
            type: "pubkey";
          },
          {
            name: "proposal_id";
            type: "u64";
          },
          {
            name: "proposal_type";
            type: {
              defined: {
                name: "ProposalType";
              };
            };
          },
          {
            name: "proposal_result";
            type: {
              defined: {
                name: "ProposalStatus";
              };
            };
          },
          {
            name: "proposal_votes";
            type: "u64";
          },
          {
            name: "proposal_quorum";
            type: "u8";
          },
          {
            name: "proposal_threshold";
            type: "u64";
          },
        ];
      };
    },
    {
      name: "Proposal";
      type: {
        kind: "struct";
        fields: [
          {
            name: "id";
            type: "u64";
          },
          {
            name: "name";
            type: "string";
          },
          {
            name: "uri";
            type: "string";
          },
          {
            name: "proposal";
            type: {
              defined: {
                name: "ProposalType";
              };
            };
          },
          {
            name: "result";
            type: {
              defined: {
                name: "ProposalStatus";
              };
            };
          },
          {
            name: "quorum";
            type: "u8";
          },
          {
            name: "threshold";
            type: "u64";
          },
          {
            name: "votes";
            type: "u64";
          },
          {
            name: "expiry";
            type: "u64";
          },
          {
            name: "choices";
            type: "u8";
          },
          {
            name: "bump";
            type: "u8";
          },
          {
            name: "created_time";
            type: "u64";
          },
          {
            name: "vote_counts";
            type: {
              vec: "u64";
            };
          },
          {
            name: "analysis_period";
            type: "u64";
          },
        ];
      };
    },
    {
      name: "ProposalConfig";
      type: {
        kind: "struct";
        fields: [
          {
            name: "proposal_count";
            type: "u64";
          },
          {
            name: "bump";
            type: "u8";
          },
          {
            name: "proposal_fee_bounty";
            type: "u64";
          },
          {
            name: "proposal_fee_executable";
            type: "u64";
          },
          {
            name: "proposal_fee_vote";
            type: "u64";
          },
          {
            name: "proposal_fee_vote_multiple";
            type: "u64";
          },
          {
            name: "max_expiry";
            type: "u64";
          },
          {
            name: "min_threshold";
            type: "u64";
          },
          {
            name: "min_quorum";
            type: "u8";
          },
          {
            name: "proposal_analysis_period";
            type: "u64";
          },
          {
            name: "quorum_updated";
            type: "u64";
          },
          {
            name: "n_quorum_epoch";
            type: "u8";
          },
          {
            name: "threshold_create_proposal";
            type: "u64";
          },
        ];
      };
    },
    {
      name: "ProposalStatus";
      type: {
        kind: "enum";
        variants: [
          {
            name: "AnalysisPhase";
          },
          {
            name: "Open";
          },
          {
            name: "Succeeded";
          },
          {
            name: "Failed";
          },
          {
            name: "Canceled";
          },
        ];
      };
    },
    {
      name: "ProposalType";
      type: {
        kind: "enum";
        variants: [
          {
            name: "VoteMultipleChoice";
          },
          {
            name: "Bounty";
            fields: ["pubkey", "u64"];
          },
          {
            name: "Vote";
          },
          {
            name: "Executable";
            fields: [
              {
                defined: {
                  name: "ExecutableProposal";
                };
              },
            ];
          },
        ];
      };
    },
    {
      name: "StakeState";
      type: {
        kind: "struct";
        fields: [
          {
            name: "owner";
            type: "pubkey";
          },
          {
            name: "amount";
            type: "u64";
          },
          {
            name: "locked_amount";
            type: "u64";
          },
          {
            name: "accounts";
            type: "u64";
          },
          {
            name: "updated";
            type: "u64";
          },
          {
            name: "vault_bump";
            type: "u8";
          },
          {
            name: "auth_bump";
            type: "u8";
          },
          {
            name: "state_bump";
            type: "u8";
          },
        ];
      };
    },
    {
      name: "VoteState";
      type: {
        kind: "struct";
        fields: [
          {
            name: "owner";
            type: "pubkey";
          },
          {
            name: "amount";
            type: "u64";
          },
          {
            name: "choice";
            type: "u8";
          },
          {
            name: "bump";
            type: "u8";
          },
        ];
      };
    },
  ];
};

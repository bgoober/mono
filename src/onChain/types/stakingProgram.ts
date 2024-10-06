export type StakingProgram = {
  address: "5ER7DVPftAuJ5DMz1mdrFC5VXQSo2zJZqv1H7GtpebK1";
  metadata: {
    name: "staking";
    version: "0.1.0";
    spec: "0.1.0";
    description: "Created with Anchor";
  };
  instructions: [
    {
      name: "add_account";
      discriminator: [227, 172, 252, 3, 38, 209, 9, 232];
      accounts: [
        {
          name: "owner";
          writable: true;
          signer: true;
          relations: ["stake_state"];
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
          name: "instructions";
          address: "Sysvar1nstructions1111111111111111111111111";
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
      name: "check_state";
      discriminator: [84, 106, 165, 229, 16, 88, 102, 7];
      accounts: [
        {
          name: "owner";
          writable: true;
          signer: true;
          relations: ["stake_state"];
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
          name: "instructions";
          address: "Sysvar1nstructions1111111111111111111111111";
        },
      ];
      args: [];
    },
    {
      name: "close_stake";
      discriminator: [92, 229, 76, 76, 25, 26, 189, 239];
      accounts: [
        {
          name: "owner";
          writable: true;
          signer: true;
          relations: ["stake_state"];
        },
        {
          name: "stake_ata";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [118, 97, 117, 108, 116];
              },
              {
                kind: "account";
                path: "config";
              },
              {
                kind: "account";
                path: "owner";
              },
              {
                kind: "account";
                path: "mint";
              },
            ];
          };
        },
        {
          name: "stake_auth";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [97, 117, 116, 104];
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
          };
        },
        {
          name: "mint";
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
          name: "token_program";
        },
        {
          name: "associated_token_program";
          address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
        },
        {
          name: "system_program";
          address: "11111111111111111111111111111111";
        },
      ];
      args: [];
    },
    {
      name: "close_stake_nft_state";
      discriminator: [54, 208, 95, 88, 40, 142, 202, 158];
      accounts: [
        {
          name: "owner";
          writable: true;
          signer: true;
          relations: ["stake_state"];
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
      name: "close_stake_nft_sub_dao_state";
      discriminator: [216, 115, 136, 77, 115, 151, 84, 11];
      accounts: [
        {
          name: "owner";
          writable: true;
          signer: true;
          relations: ["stake_state"];
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
                path: "config_sub_dao";
              },
              {
                kind: "account";
                path: "owner";
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
          name: "config_sub_dao";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 111, 110, 102, 105, 103];
              },
              {
                kind: "account";
                path: "config_sub_dao.seed";
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
      ];
      args: [];
    },
    {
      name: "close_stake_sub_dao";
      discriminator: [15, 126, 107, 190, 43, 88, 25, 4];
      accounts: [
        {
          name: "owner";
          writable: true;
          signer: true;
          relations: ["stake_state"];
        },
        {
          name: "stake_ata";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [118, 97, 117, 108, 116];
              },
              {
                kind: "account";
                path: "config_sub_dao";
              },
              {
                kind: "account";
                path: "owner";
              },
              {
                kind: "account";
                path: "mint";
              },
            ];
          };
        },
        {
          name: "stake_auth";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [97, 117, 116, 104];
              },
              {
                kind: "account";
                path: "config_sub_dao";
              },
              {
                kind: "account";
                path: "owner";
              },
            ];
          };
        },
        {
          name: "mint";
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
                path: "config_sub_dao";
              },
              {
                kind: "account";
                path: "owner";
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
          name: "config_sub_dao";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 111, 110, 102, 105, 103];
              },
              {
                kind: "account";
                path: "config_sub_dao.seed";
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
          name: "token_program";
        },
        {
          name: "associated_token_program";
          address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
        },
        {
          name: "system_program";
          address: "11111111111111111111111111111111";
        },
      ];
      args: [];
    },
    {
      name: "init_stake";
      discriminator: [177, 156, 4, 57, 220, 174, 174, 155];
      accounts: [
        {
          name: "owner";
          writable: true;
          signer: true;
        },
        {
          name: "owner_ata";
          pda: {
            seeds: [
              {
                kind: "account";
                path: "owner";
              },
              {
                kind: "const";
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: "account";
                path: "mint";
              },
            ];
            program: {
              kind: "const";
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: "stake_ata";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [118, 97, 117, 108, 116];
              },
              {
                kind: "account";
                path: "config";
              },
              {
                kind: "account";
                path: "owner";
              },
              {
                kind: "account";
                path: "mint";
              },
            ];
          };
        },
        {
          name: "stake_auth";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [97, 117, 116, 104];
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
          };
        },
        {
          name: "mint";
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
          name: "token_program";
        },
        {
          name: "associated_token_program";
          address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
        },
        {
          name: "system_program";
          address: "11111111111111111111111111111111";
        },
      ];
      args: [];
    },
    {
      name: "init_stake_nft";
      discriminator: [115, 4, 17, 174, 29, 68, 80, 50];
      accounts: [
        {
          name: "owner";
          writable: true;
          signer: true;
        },
        {
          name: "owner_ata";
          pda: {
            seeds: [
              {
                kind: "account";
                path: "owner";
              },
              {
                kind: "const";
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: "account";
                path: "nft";
              },
            ];
            program: {
              kind: "const";
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: "collection";
        },
        {
          name: "nft";
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
          name: "metadata";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [109, 101, 116, 97, 100, 97, 116, 97];
              },
              {
                kind: "account";
                path: "metadata_program";
              },
              {
                kind: "account";
                path: "nft";
              },
            ];
            program: {
              kind: "account";
              path: "metadata_program";
            };
          };
        },
        {
          name: "master_edition";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [109, 101, 116, 97, 100, 97, 116, 97];
              },
              {
                kind: "account";
                path: "metadata_program";
              },
              {
                kind: "account";
                path: "nft";
              },
              {
                kind: "const";
                value: [101, 100, 105, 116, 105, 111, 110];
              },
            ];
            program: {
              kind: "account";
              path: "metadata_program";
            };
          };
        },
        {
          name: "metadata_program";
          address: "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s";
        },
        {
          name: "token_program";
        },
        {
          name: "associated_token_program";
          address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
        },
        {
          name: "system_program";
          address: "11111111111111111111111111111111";
        },
      ];
      args: [];
    },
    {
      name: "remove_account";
      discriminator: [125, 160, 255, 178, 200, 184, 157, 76];
      accounts: [
        {
          name: "owner";
          writable: true;
          signer: true;
          relations: ["stake_state"];
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
          name: "instructions";
          address: "Sysvar1nstructions1111111111111111111111111";
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
      name: "stake_nft";
      discriminator: [38, 27, 66, 46, 69, 65, 151, 219];
      accounts: [
        {
          name: "owner";
          writable: true;
          signer: true;
          relations: ["stake_state"];
        },
        {
          name: "owner_ata";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "account";
                path: "owner";
              },
              {
                kind: "const";
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: "account";
                path: "nft";
              },
            ];
            program: {
              kind: "const";
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: "collection";
        },
        {
          name: "nft";
        },
        {
          name: "metadata";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [109, 101, 116, 97, 100, 97, 116, 97];
              },
              {
                kind: "account";
                path: "metadata_program";
              },
              {
                kind: "account";
                path: "nft";
              },
            ];
            program: {
              kind: "account";
              path: "metadata_program";
            };
          };
        },
        {
          name: "master_edition";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [109, 101, 116, 97, 100, 97, 116, 97];
              },
              {
                kind: "account";
                path: "metadata_program";
              },
              {
                kind: "account";
                path: "nft";
              },
              {
                kind: "const";
                value: [101, 100, 105, 116, 105, 111, 110];
              },
            ];
            program: {
              kind: "account";
              path: "metadata_program";
            };
          };
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
          name: "metadata_program";
          address: "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s";
        },
        {
          name: "token_program";
        },
        {
          name: "associated_token_program";
          address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
        },
        {
          name: "system_program";
          address: "11111111111111111111111111111111";
        },
      ];
      args: [];
    },
    {
      name: "stake_tokens";
      discriminator: [136, 126, 91, 162, 40, 131, 13, 127];
      accounts: [
        {
          name: "owner";
          writable: true;
          signer: true;
          relations: ["stake_state"];
        },
        {
          name: "owner_ata";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "account";
                path: "owner";
              },
              {
                kind: "const";
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: "account";
                path: "mint";
              },
            ];
            program: {
              kind: "const";
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: "stake_ata";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [118, 97, 117, 108, 116];
              },
              {
                kind: "account";
                path: "config";
              },
              {
                kind: "account";
                path: "owner";
              },
              {
                kind: "account";
                path: "mint";
              },
            ];
          };
        },
        {
          name: "stake_auth";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [97, 117, 116, 104];
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
          };
        },
        {
          name: "mint";
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
          name: "token_program";
        },
        {
          name: "associated_token_program";
          address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
        },
        {
          name: "system_program";
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
      name: "unstake_nft";
      discriminator: [17, 182, 24, 211, 101, 138, 50, 163];
      accounts: [
        {
          name: "owner";
          writable: true;
          signer: true;
          relations: ["stake_state"];
        },
        {
          name: "owner_ata";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "account";
                path: "owner";
              },
              {
                kind: "const";
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: "account";
                path: "nft";
              },
            ];
            program: {
              kind: "const";
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: "collection";
        },
        {
          name: "nft";
        },
        {
          name: "metadata";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [109, 101, 116, 97, 100, 97, 116, 97];
              },
              {
                kind: "account";
                path: "metadata_program";
              },
              {
                kind: "account";
                path: "nft";
              },
            ];
            program: {
              kind: "account";
              path: "metadata_program";
            };
          };
        },
        {
          name: "master_edition";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [109, 101, 116, 97, 100, 97, 116, 97];
              },
              {
                kind: "account";
                path: "metadata_program";
              },
              {
                kind: "account";
                path: "nft";
              },
              {
                kind: "const";
                value: [101, 100, 105, 116, 105, 111, 110];
              },
            ];
            program: {
              kind: "account";
              path: "metadata_program";
            };
          };
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
          name: "metadata_program";
          address: "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s";
        },
        {
          name: "token_program";
        },
        {
          name: "associated_token_program";
          address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
        },
        {
          name: "system_program";
          address: "11111111111111111111111111111111";
        },
      ];
      args: [];
    },
    {
      name: "unstake_tokens";
      discriminator: [58, 119, 215, 143, 203, 223, 32, 86];
      accounts: [
        {
          name: "owner";
          writable: true;
          signer: true;
          relations: ["stake_state"];
        },
        {
          name: "owner_ata";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "account";
                path: "owner";
              },
              {
                kind: "const";
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169,
                ];
              },
              {
                kind: "account";
                path: "mint";
              },
            ];
            program: {
              kind: "const";
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89,
              ];
            };
          };
        },
        {
          name: "stake_ata";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [118, 97, 117, 108, 116];
              },
              {
                kind: "account";
                path: "config";
              },
              {
                kind: "account";
                path: "owner";
              },
              {
                kind: "account";
                path: "mint";
              },
            ];
          };
        },
        {
          name: "stake_auth";
          pda: {
            seeds: [
              {
                kind: "const";
                value: [97, 117, 116, 104];
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
          };
        },
        {
          name: "mint";
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
          name: "token_program";
        },
        {
          name: "associated_token_program";
          address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
        },
        {
          name: "system_program";
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
  ];
  accounts: [
    {
      name: "DaoConfig";
      discriminator: [55, 209, 87, 224, 30, 202, 192, 246];
    },
    {
      name: "StakeState";
      discriminator: [108, 10, 236, 72, 1, 88, 133, 92];
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
      name: "UnderflowLockedAmount";
      msg: "Underflow Locked Amount";
    },
    {
      code: 6005;
      name: "AccountsOpen";
      msg: "You can't unstake with open accounts";
    },
    {
      code: 6006;
      name: "Expired";
      msg: "Proposal expired";
    },
    {
      code: 6007;
      name: "InvalidSlot";
      msg: "Invalid slot";
    },
    {
      code: 6008;
      name: "InsufficientStake";
      msg: "Insufficient stake";
    },
    {
      code: 6009;
      name: "InvalidName";
      msg: "Invalid name";
    },
    {
      code: 6010;
      name: "InvalidGist";
      msg: "Invalid gist";
    },
    {
      code: 6011;
      name: "InvalidProposalSeed";
      msg: "Invalid proposal seed";
    },
    {
      code: 6012;
      name: "InvalidQuorum";
      msg: "Invalid quorum";
    },
    {
      code: 6013;
      name: "InvalidExpiry";
      msg: "Invalid expiry";
    },
    {
      code: 6014;
      name: "ProposalClosed";
      msg: "Proposal closed";
    },
    {
      code: 6015;
      name: "InvalidVoteAmount";
      msg: "You can't vote 0!";
    },
    {
      code: 6016;
      name: "InvalidProposalStatus";
      msg: "Invalid proposal status";
    },
    {
      code: 6017;
      name: "InvalidStakeAmount";
      msg: "Invalid stake amount";
    },
    {
      code: 6018;
      name: "InvalidThreshold";
      msg: "Invalid Threshold";
    },
    {
      code: 6019;
      name: "InvalidRequiredTime";
      msg: "Invalid Required Time";
    },
    {
      code: 6020;
      name: "InvalidVoteType";
      msg: "Invalid Vote Type";
    },
    {
      code: 6021;
      name: "SingleChoice";
      msg: "AlreadyVoted";
    },
    {
      code: 6022;
      name: "InvalidChoicesAmount";
      msg: "Invalid choices amount";
    },
    {
      code: 6023;
      name: "InvalidChoice";
      msg: "Invalid choice";
    },
    {
      code: 6024;
      name: "CollectionNotSet";
      msg: "Collection not set";
    },
    {
      code: 6025;
      name: "InvalidCollection";
      msg: "Invalid Collection";
    },
    {
      code: 6026;
      name: "LockedToken";
      msg: "Locked tockens";
    },
    {
      code: 6027;
      name: "InvalidDaoType";
      msg: "Invalid Dao Type";
    },
    {
      code: 6028;
      name: "InvalidInstructionIndex";
      msg: "InvalidInstructionIndex";
    },
    {
      code: 6029;
      name: "ProgramMismatch";
      msg: "ProgramMismatch";
    },
    {
      code: 6030;
      name: "InvalidStakeDao";
      msg: "InvalidStake - You are a SUBDAO";
    },
  ];
  types: [
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
  ];
};

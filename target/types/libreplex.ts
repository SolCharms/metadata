export type Libreplex = {
  "version": "0.1.0",
  "name": "libreplex",
  "instructions": [
    {
      "name": "createCollectionData",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "collectionData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collectionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "collectionDataInput",
          "type": {
            "defined": "CollectionDataInput"
          }
        }
      ]
    },
    {
      "name": "deleteCollectionData",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "collectionData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collectionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpCollectionData",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createMetadata",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "collectionData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collectionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "metadataInput",
          "type": {
            "defined": "MetadataInput"
          }
        },
        {
          "name": "bumpCollectionData",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteMetadata",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "collectionData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collectionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpCollectionData",
          "type": "u8"
        },
        {
          "name": "bumpMetadata",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "collectionData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "collectionSeed",
            "type": "publicKey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "collectionUrl",
            "type": "string"
          },
          {
            "name": "collectionCount",
            "type": "u64"
          },
          {
            "name": "nftCollectionData",
            "type": {
              "option": {
                "defined": "NftCollectionData"
              }
            }
          }
        ]
      }
    },
    {
      "name": "metadata",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "collectionData",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "url",
            "type": "string"
          },
          {
            "name": "isMutable",
            "type": "bool"
          },
          {
            "name": "nftData",
            "type": {
              "option": {
                "defined": "NftMetadata"
              }
            }
          }
        ]
      }
    },
    {
      "name": "nftMetadataUnique",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "metadata",
            "type": "publicKey"
          },
          {
            "name": "royaltyBpsOverride",
            "type": {
              "option": "u16"
            }
          },
          {
            "name": "royaltiesShareOverride",
            "type": {
              "option": {
                "vec": {
                  "defined": "RoyaltyShare"
                }
              }
            }
          },
          {
            "name": "permittedSignersOverride",
            "type": {
              "option": {
                "vec": "publicKey"
              }
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "NftCollectionData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "royaltyBps",
            "type": "u16"
          },
          {
            "name": "royaltyShares",
            "type": {
              "vec": {
                "defined": "RoyaltyShare"
              }
            }
          },
          {
            "name": "permittedSigners",
            "type": {
              "vec": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "RoyaltyShare",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "royaltyAddress",
            "type": "publicKey"
          },
          {
            "name": "royaltyShare",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "CollectionDataInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "collectionUrl",
            "type": "string"
          },
          {
            "name": "nftCollectionData",
            "type": {
              "option": {
                "defined": "NftCollectionData"
              }
            }
          }
        ]
      }
    },
    {
      "name": "NftMetadata",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "attributes",
            "type": {
              "vec": {
                "defined": "Attribute"
              }
            }
          },
          {
            "name": "signers",
            "type": {
              "vec": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "Attribute",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "traitType",
            "type": "string"
          },
          {
            "name": "attribute",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "MetadataInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "metadataUrl",
            "type": "string"
          },
          {
            "name": "nftMetadata",
            "type": {
              "option": {
                "defined": "NftMetadata"
              }
            }
          }
        ]
      }
    }
  ]
};

export const IDL: Libreplex = {
  "version": "0.1.0",
  "name": "libreplex",
  "instructions": [
    {
      "name": "createCollectionData",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "collectionData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collectionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "collectionDataInput",
          "type": {
            "defined": "CollectionDataInput"
          }
        }
      ]
    },
    {
      "name": "deleteCollectionData",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "collectionData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collectionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpCollectionData",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createMetadata",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "collectionData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collectionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "metadataInput",
          "type": {
            "defined": "MetadataInput"
          }
        },
        {
          "name": "bumpCollectionData",
          "type": "u8"
        }
      ]
    },
    {
      "name": "deleteMetadata",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "collectionData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collectionSeed",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpCollectionData",
          "type": "u8"
        },
        {
          "name": "bumpMetadata",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "collectionData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "collectionSeed",
            "type": "publicKey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "collectionUrl",
            "type": "string"
          },
          {
            "name": "collectionCount",
            "type": "u64"
          },
          {
            "name": "nftCollectionData",
            "type": {
              "option": {
                "defined": "NftCollectionData"
              }
            }
          }
        ]
      }
    },
    {
      "name": "metadata",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "collectionData",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "url",
            "type": "string"
          },
          {
            "name": "isMutable",
            "type": "bool"
          },
          {
            "name": "nftData",
            "type": {
              "option": {
                "defined": "NftMetadata"
              }
            }
          }
        ]
      }
    },
    {
      "name": "nftMetadataUnique",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "metadata",
            "type": "publicKey"
          },
          {
            "name": "royaltyBpsOverride",
            "type": {
              "option": "u16"
            }
          },
          {
            "name": "royaltiesShareOverride",
            "type": {
              "option": {
                "vec": {
                  "defined": "RoyaltyShare"
                }
              }
            }
          },
          {
            "name": "permittedSignersOverride",
            "type": {
              "option": {
                "vec": "publicKey"
              }
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "NftCollectionData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "royaltyBps",
            "type": "u16"
          },
          {
            "name": "royaltyShares",
            "type": {
              "vec": {
                "defined": "RoyaltyShare"
              }
            }
          },
          {
            "name": "permittedSigners",
            "type": {
              "vec": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "RoyaltyShare",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "royaltyAddress",
            "type": "publicKey"
          },
          {
            "name": "royaltyShare",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "CollectionDataInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "collectionUrl",
            "type": "string"
          },
          {
            "name": "nftCollectionData",
            "type": {
              "option": {
                "defined": "NftCollectionData"
              }
            }
          }
        ]
      }
    },
    {
      "name": "NftMetadata",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "attributes",
            "type": {
              "vec": {
                "defined": "Attribute"
              }
            }
          },
          {
            "name": "signers",
            "type": {
              "vec": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "Attribute",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "traitType",
            "type": "string"
          },
          {
            "name": "attribute",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "MetadataInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "metadataUrl",
            "type": "string"
          },
          {
            "name": "nftMetadata",
            "type": {
              "option": {
                "defined": "NftMetadata"
              }
            }
          }
        ]
      }
    }
  ]
};

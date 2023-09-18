import { Token } from "../types";

export const ETH = {
  name: "ETH",
  symbol: "ETH",
  decimals: 18,
  description: "",
  website: "",
  twitter: "",
  tokens: {
    ethereum: { address: "" },
    homestead: { address: "" },
    sepolia: { address: "" },
    pgn: { address: "" },
    pgnTestnet: { address: "" },
  },
};

export const TestToken = {
  name: "TestToken",
  symbol: "TestToken",
  decimals: 18,
  description: "",
  website: "",
  twitter: "",
  tokens: {
    sepolia: {
      address: "0x10246FE5Bf3b06Fc688eD4AA1445FF52358CE3A9",
    },
    pgnTestnet: {
      address: "0x7c6b91D9Be155A6Db01f749217d76fF02A7227F2",
    },
  },
};

export const GTC = {
  name: "GTC",
  symbol: "GTC",
  tokens: {
    mainnet: {
      address: "0xde30da39c46104798bb5aa3fe8b9e0e1f348163f",
    },
    homestead: {
      address: "0xde30da39c46104798bb5aa3fe8b9e0e1f348163f",
    },
    pgnTestnet: {
      address: "",
    },
    pgn: {
      address: "0x7c6b91D9Be155A6Db01f749217d76fF02A7227F2",
    },
  },
};

export const DAI = {
  name: "DAI",
  symbol: "DAI",
  tokens: {
    mainnet: {
      address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    },
    homestead: {
      address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    },
    pgnTestnet: {
      address: "",
    },
    pgn: {
      address: "0x997cf63ab30BA8e591203228d5c5468Fc3834166",
    },
  },
};

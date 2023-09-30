import { Chain } from 'wagmi'

export const OasisSapphireMainnet = {
    id: 23294,
    name: 'Oasis Sapphire Mainnet',
    network: 'Oasis Sapphire Mainnet',
    nativeCurrency: {
      decimals: 18,
      name: 'ROSE',
      symbol: 'ROSE',
    },
    rpcUrls: {
      public: { http: ['https://sapphire.oasis.io'] },
      default: { http: ['https://sapphire.oasis.io'] },
    },
    blockExplorers: {
      etherscan: { name: 'Sapphire', url: 'https://explorer.sapphire.oasis.io/' },
      default: { name: 'Sapphire', url: 'https://explorer.sapphire.oasis.io/' },
    },
  
  } as const satisfies Chain
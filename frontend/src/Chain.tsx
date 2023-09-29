import { Chain } from 'wagmi'

export const OasisSapphireTestnet = {
  id: 23295,
  name: 'Oasis Sapphire Testnet',
  network: 'Oasis Sapphire Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'TEST',
    symbol: 'TEST',
  },
  rpcUrls: {
    public: { http: ['https://testnet.sapphire.oasis.dev'] },
    default: { http: ['https://testnet.sapphire.oasis.dev'] },
  },
  blockExplorers: {
    etherscan: { name: 'Sapphire', url: 'https://testnet.explorer.sapphire.oasis.dev' },
    default: { name: 'Sapphire', url: 'https://testnet.explorer.sapphire.oasis.dev' },
  },

} as const satisfies Chain

export const OasisSapphireMainnet = {
  id: 23295,
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
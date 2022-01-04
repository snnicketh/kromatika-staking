export const BORDER_RADIUS = 4;
export const APP_NAME = 'Kromatika.Finance Staking';

export const LG_BREAKPOINT = 'md';
export const SM_BREAKPOINT = 'sm';

export const IS_DEV = process.env.NODE_ENV === 'development';

export const CACHE_WALLET_KEY = 'wallet';

export const NETWORK_MAINNET = 'mainnet';
export const AVAILABLE_NETWORKS = [NETWORK_MAINNET];

export const TOKEN_0_ADDRESS: Record<string, string> = {
  [NETWORK_MAINNET]: '0x3af33bEF05C2dCb3C7288b77fe1C8d2AeBA4d789',
};

export const TOKEN_1_ADDRESS: Record<string, string> = {
  [NETWORK_MAINNET]: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
};

export const NFT_POSITIONS_MANAGER_ADDRESS: Record<string, string> = {
  [NETWORK_MAINNET]: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
};

export const STAKING_REWARDS_ADDRESS: Record<string, string> = {
  [NETWORK_MAINNET]: '0x3af33bEF05C2dCb3C7288b77fe1C8d2AeBA4d789',
};

export const SUBGRAPHS: Record<string, string> = {
  [NETWORK_MAINNET]:
    'https://api.thegraph.com/subgraphs/name/snnickk/kromatikastaking',
};

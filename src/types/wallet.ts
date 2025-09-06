export interface WalletConnection {
  address: string | null;
  isConnected: boolean;
  isConnecting: boolean;
  provider: WalletProvider | null;
  chainId?: number;
  balance?: WalletBalance;
}

export interface WalletProvider {
  name: string;
  type: 'metamask' | 'smart_wallet' | 'coinbase' | 'walletconnect';
  icon: string;
  isAvailable: boolean;
  isInstalled: boolean;
}

export interface WalletBalance {
  eth: number;
  usd: number;
  tokens?: TokenBalance[];
}

export interface TokenBalance {
  symbol: string;
  name: string;
  balance: number;
  usdValue: number;
  contractAddress: string;
}

export interface SmartWalletConfig {
  factoryAddress: string;
  entryPointAddress: string;
  paymasterAddress?: string;
  bundlerUrl: string;
}

export interface WalletTransaction {
  hash: string;
  from: string;
  to: string;
  value: string;
  gas: string;
  gasPrice: string;
  status: 'pending' | 'confirmed' | 'failed';
  timestamp: number;
  type: 'send' | 'receive' | 'contract_interaction';
}

export interface GasFeeEstimate {
  slow: {
    gasPrice: string;
    estimatedTime: string;
    fee: string;
  };
  standard: {
    gasPrice: string;
    estimatedTime: string;
    fee: string;
  };
  fast: {
    gasPrice: string;
    estimatedTime: string;
    fee: string;
  };
}

export interface WalletError {
  code: number;
  message: string;
  details?: string;
}

// Constants for wallet integration
export const SUPPORTED_WALLETS: WalletProvider[] = [
  {
    name: 'MetaMask',
    type: 'metamask',
    icon: '/wallet-icons/metamask.svg',
    isAvailable: typeof window !== 'undefined' && !!(window as any).ethereum,
    isInstalled: typeof window !== 'undefined' && !!(window as any).ethereum?.isMetaMask,
  },
  {
    name: 'Coinbase Wallet',
    type: 'coinbase',
    icon: '/wallet-icons/coinbase.svg',
    isAvailable: typeof window !== 'undefined' && !!(window as any).ethereum?.isCoinbaseWallet,
    isInstalled: typeof window !== 'undefined' && !!(window as any).ethereum?.isCoinbaseWallet,
  },
  {
    name: 'Smart Wallet',
    type: 'smart_wallet',
    icon: '/wallet-icons/smart-wallet.svg',
    isAvailable: true,
    isInstalled: true,
  },
];

export const WALLET_ERRORS = {
  USER_REJECTED: 4001,
  UNAUTHORIZED: 4100,
  UNSUPPORTED_METHOD: 4200,
  DISCONNECTED: 4900,
  CHAIN_DISCONNECTED: 4901,
} as const;
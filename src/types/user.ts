export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'buyer' | 'seller' | 'both';
  profile: UserProfile;
  wallet: WalletInfo;
  kyc: KYCInfo;
  preferences: UserPreferences;
  stats: UserStats;
  createdAt: string;
  lastLogin: string;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  phone?: string;
  dateOfBirth?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  bio?: string;
  website?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
  };
}

export interface WalletInfo {
  address?: string;
  type: 'metamask' | 'smart_wallet' | 'coinbase' | 'walletconnect' | 'none';
  isConnected: boolean;
  balance?: {
    eth: number;
    usd: number;
  };
  nfts?: NFTInfo[];
  transactions?: Transaction[];
}

export interface NFTInfo {
  tokenId: string;
  contractAddress: string;
  propertyId: string;
  propertyTitle: string;
  propertyImage: string;
  acquiredDate: string;
  currentValue: number;
}

export interface Transaction {
  id: string;
  type: 'purchase' | 'sale' | 'bid' | 'mint' | 'transfer';
  propertyId: string;
  propertyTitle: string;
  amount: number;
  fee: number;
  status: 'pending' | 'completed' | 'failed';
  txHash?: string;
  timestamp: string;
  counterparty?: {
    name: string;
    address: string;
  };
}

export interface KYCInfo {
  status: 'not_started' | 'in_progress' | 'submitted' | 'approved' | 'rejected';
  level: 'basic' | 'advanced' | 'institutional';
  submittedAt?: string;
  approvedAt?: string;
  documents: KYCDocument[];
  verificationScore?: number;
  riskLevel?: 'low' | 'medium' | 'high';
}

export interface KYCDocument {
  id: string;
  type: 'passport' | 'drivers_license' | 'national_id' | 'proof_of_address' | 'bank_statement' | 'tax_return';
  name: string;
  status: 'pending' | 'approved' | 'rejected';
  uploadDate: string;
  expiryDate?: string;
  rejectionReason?: string;
}

export interface UserPreferences {
  notifications: {
    email: boolean;
    push: boolean;
    bidUpdates: boolean;
    priceAlerts: boolean;
    newListings: boolean;
    marketInsights: boolean;
  };
  privacy: {
    showProfile: boolean;
    showTransactions: boolean;
    allowMessages: boolean;
  };
  trading: {
    autoRejectLowOffers: boolean;
    minimumOfferPercentage?: number;
    preferredCurrency: 'ETH' | 'USD';
  };
}

export interface UserStats {
  propertiesOwned: number;
  propertiesSold: number;
  totalVolume: number;
  averageRating: number;
  joinDate: string;
  successfulTransactions: number;
  activeBids: number;
  favoriteProperties: string[];
}
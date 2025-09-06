// Theme Colors - Neon Palette for Dark Theme
export const THEME_COLORS = {
  neon: {
    cyan: '#00FFFF',
    purple: '#8B5CF6',
    green: '#10B981',
    pink: '#EC4899',
    blue: '#3B82F6',
    orange: '#F59E0B'
  },
  dark: {
    bg: '#0A0A0A',
    surface: '#1A1A1A',
    card: '#262626',
    border: '#404040',
    text: {
      primary: '#FFFFFF',
      secondary: '#A3A3A3',
      muted: '#737373'
    }
  }
} as const;

// Application Constants
export const APP_CONFIG = {
  name: 'Estatos',
  description: 'NFT-Based Real Estate Platform',
  version: '1.0.0',
  supportedChains: ['ethereum', 'polygon'],
  defaultChain: 'ethereum',
  contractAddresses: {
    propertyNFT: '0x742d35Cc6634C0532925a3b8D402fB99E65D10e8',
    marketplace: '0x8f3d2b1e4c7a9f6e5d8c4b2a1e0f3g4h5i6j7k8l',
    escrow: '0x9a4b3c2d1e0f5g6h7i8j9k0l1m2n3o4p5q6r7s8t'
  }
} as const;

// Property Types and Categories
export const PROPERTY_TYPES = {
  residential: {
    label: 'Residential',
    subtypes: [
      { value: 'apartment', label: 'Apartment' },
      { value: 'house', label: 'House' },
      { value: 'condo', label: 'Condominium' },
      { value: 'townhouse', label: 'Townhouse' },
      { value: 'penthouse', label: 'Penthouse' },
      { value: 'mansion', label: 'Mansion' },
      { value: 'single_family', label: 'Single Family' }
    ]
  },
  commercial: {
    label: 'Commercial',
    subtypes: [
      { value: 'office_building', label: 'Office Building' },
      { value: 'retail_space', label: 'Retail Space' },
      { value: 'shopping_center', label: 'Shopping Center' },
      { value: 'hotel', label: 'Hotel' },
      { value: 'restaurant', label: 'Restaurant' },
      { value: 'mixed_use', label: 'Mixed Use' }
    ]
  },
  industrial: {
    label: 'Industrial',
    subtypes: [
      { value: 'warehouse', label: 'Warehouse' },
      { value: 'manufacturing', label: 'Manufacturing' },
      { value: 'distribution', label: 'Distribution Center' },
      { value: 'storage', label: 'Storage Facility' },
      { value: 'logistics', label: 'Logistics Hub' }
    ]
  },
  land: {
    label: 'Land',
    subtypes: [
      { value: 'residential_lot', label: 'Residential Lot' },
      { value: 'commercial_lot', label: 'Commercial Lot' },
      { value: 'agricultural', label: 'Agricultural' },
      { value: 'development', label: 'Development Land' },
      { value: 'recreational', label: 'Recreational' }
    ]
  }
} as const;

// AI Rating Thresholds
export const AI_RATING_THRESHOLDS = {
  excellent: 90,
  good: 80,
  fair: 70,
  poor: 60,
  critical: 50
} as const;

export const RISK_LEVELS = {
  low: {
    label: 'Low Risk',
    color: THEME_COLORS.neon.green,
    description: 'All documentation verified, minimal risk factors'
  },
  medium: {
    label: 'Medium Risk',
    color: THEME_COLORS.neon.orange,
    description: 'Some documentation pending, manageable risk'
  },
  high: {
    label: 'High Risk',
    color: '#EF4444',
    description: 'Multiple issues identified, proceed with caution'
  }
} as const;

// Document Types
export const DOCUMENT_TYPES = {
  title_deed: { label: 'Title Deed', required: true },
  survey: { label: 'Property Survey', required: true },
  inspection: { label: 'Inspection Report', required: true },
  appraisal: { label: 'Property Appraisal', required: true },
  tax_record: { label: 'Tax Records', required: false },
  insurance: { label: 'Insurance Documentation', required: false },
  other: { label: 'Other Documents', required: false }
} as const;

// KYC Levels and Requirements
export const KYC_LEVELS = {
  basic: {
    label: 'Basic Verification',
    maxTransactionAmount: 50000,
    requiredDocuments: ['national_id', 'proof_of_address']
  },
  advanced: {
    label: 'Advanced Verification',
    maxTransactionAmount: 1000000,
    requiredDocuments: ['passport', 'proof_of_address', 'bank_statement']
  },
  institutional: {
    label: 'Institutional Verification',
    maxTransactionAmount: Infinity,
    requiredDocuments: ['business_license', 'financial_statements', 'board_resolution']
  }
} as const;

// Pagination and Filtering
export const PAGINATION = {
  defaultPageSize: 12,
  pageSizeOptions: [6, 12, 24, 48],
  maxPageSize: 100
} as const;

export const SORT_OPTIONS = [
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'price_desc', label: 'Price: High to Low' },
  { value: 'date_desc', label: 'Newest First' },
  { value: 'date_asc', label: 'Oldest First' },
  { value: 'rating_desc', label: 'Highest AI Rating' },
  { value: 'rating_asc', label: 'Lowest AI Rating' },
  { value: 'popularity_desc', label: 'Most Popular' },
  { value: 'views_desc', label: 'Most Viewed' }
] as const;

// Wallet Configuration
export const WALLET_CONFIG = {
  supportedWallets: ['metamask', 'coinbase', 'smart_wallet', 'walletconnect'],
  defaultWallet: 'smart_wallet',
  networkConfig: {
    ethereum: {
      chainId: 1,
      name: 'Ethereum Mainnet',
      currency: 'ETH',
      rpcUrl: 'https://mainnet.infura.io/v3/',
      blockExplorer: 'https://etherscan.io'
    },
    polygon: {
      chainId: 137,
      name: 'Polygon',
      currency: 'MATIC',
      rpcUrl: 'https://polygon-rpc.com',
      blockExplorer: 'https://polygonscan.com'
    }
  }
} as const;

// Animation and Transition Settings
export const ANIMATIONS = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms'
  },
  easing: {
    ease: 'ease',
    easeOut: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0.0, 1, 1)',
    easeInOut: 'cubic-bezier(0.4, 0.0, 0.2, 1)'
  }
} as const;

// API Configuration
export const API_CONFIG = {
  baseUrl: typeof window !== 'undefined' 
    ? `${window.location.origin}/api`
    : 'http://localhost:3000/api',
  timeout: 10000,
  retries: 3,
  endpoints: {
    properties: '/properties',
    users: '/users',
    auth: '/auth',
    wallet: '/wallet',
    kyc: '/kyc',
    bids: '/bids',
    nft: '/nft'
  }
} as const;
export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  propertyType: 'residential' | 'commercial' | 'industrial' | 'land';
  subType: string; // e.g., 'apartment', 'house', 'office', 'warehouse'
  specifications: {
    bedrooms?: number;
    bathrooms?: number;
    squareFootage: number;
    lotSize?: number;
    yearBuilt?: number;
    parking?: number;
  };
  images: string[];
  aiRating: {
    overallScore: number; // 0-100
    riskLevel: 'low' | 'medium' | 'high';
    clearanceStatus: 'pending' | 'approved' | 'needs_review';
    factors: {
      documentCompleteness: number;
      legalClarity: number;
      titleVerification: number;
      financialAssessment: number;
    };
    lastUpdated: string;
  };
  nftDetails: {
    tokenId?: string;
    contractAddress?: string;
    blockchain: string;
    mintingStatus: 'pending' | 'minted' | 'transferred';
    mintingDate?: string;
  };
  seller: {
    id: string;
    name: string;
    avatar?: string;
    rating: number;
    verificationStatus: 'verified' | 'pending' | 'unverified';
  };
  listing: {
    status: 'active' | 'sold' | 'under_contract' | 'withdrawn';
    listedDate: string;
    viewCount: number;
    favoriteCount: number;
  };
  documents: PropertyDocument[];
  bids?: Bid[];
}

export interface PropertyDocument {
  id: string;
  name: string;
  type: 'title_deed' | 'survey' | 'inspection' | 'appraisal' | 'tax_record' | 'insurance' | 'other';
  url: string;
  uploadDate: string;
  verificationStatus: 'verified' | 'pending' | 'rejected';
  aiAnalysis?: {
    score: number;
    issues: string[];
    recommendations: string[];
  };
}

export interface Bid {
  id: string;
  propertyId: string;
  buyerId: string;
  buyerName: string;
  amount: number;
  status: 'pending' | 'accepted' | 'rejected' | 'countered';
  message?: string;
  timestamp: string;
  expiresAt?: string;
}

export interface PropertyFilter {
  priceRange?: {
    min: number;
    max: number;
  };
  propertyType?: string[];
  location?: string;
  bedrooms?: number;
  bathrooms?: number;
  squareFootage?: {
    min: number;
    max: number;
  };
  aiRatingMin?: number;
  sortBy?: 'price' | 'date' | 'rating' | 'popularity';
  sortOrder?: 'asc' | 'desc';
}

export interface PropertyStats {
  totalProperties: number;
  averagePrice: number;
  totalVolume: number;
  averageAIRating: number;
  topLocations: string[];
}
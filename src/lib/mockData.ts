import { Property, User, PropertyStats } from '@/types/property';

export const mockProperties: Property[] = [
  {
    id: 'prop-1',
    title: 'Modern Downtown Penthouse',
    description: 'Luxurious penthouse apartment with panoramic city views, featuring high-end finishes and smart home technology.',
    price: 2800000,
    location: {
      address: '1248 Madison Avenue, Penthouse A',
      city: 'New York',
      state: 'NY',
      zipCode: '10128',
      coordinates: { lat: 40.7851, lng: -73.9544 }
    },
    propertyType: 'residential',
    subType: 'penthouse',
    specifications: {
      bedrooms: 4,
      bathrooms: 3,
      squareFootage: 3200,
      yearBuilt: 2019,
      parking: 2
    },
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1693d5b2-6c81-4e22-9a62-2f483d2a9460.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e47a8d41-f4cf-4729-8f87-0e1530aefca2.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/03f79a17-cab2-4f61-ba78-64eec2a5bc2c.png'
    ],
    aiRating: {
      overallScore: 94,
      riskLevel: 'low',
      clearanceStatus: 'approved',
      factors: {
        documentCompleteness: 98,
        legalClarity: 92,
        titleVerification: 96,
        financialAssessment: 90
      },
      lastUpdated: '2024-01-15T10:30:00Z'
    },
    nftDetails: {
      tokenId: 'EST-001',
      contractAddress: '0x742d35Cc6634C0532925a3b8D',
      blockchain: 'Ethereum',
      mintingStatus: 'minted',
      mintingDate: '2024-01-10T14:20:00Z'
    },
    seller: {
      id: 'seller-1',
      name: 'Michael Chen',
      avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/38fe7767-f9d5-47ec-953c-4940435f6567.png',
      rating: 4.9,
      verificationStatus: 'verified'
    },
    listing: {
      status: 'active',
      listedDate: '2024-01-08T09:00:00Z',
      viewCount: 342,
      favoriteCount: 28
    },
    documents: [
      {
        id: 'doc-1',
        name: 'Property Title Deed',
        type: 'title_deed',
        url: '/documents/title-deed-1.pdf',
        uploadDate: '2024-01-05T16:45:00Z',
        verificationStatus: 'verified',
        aiAnalysis: {
          score: 96,
          issues: [],
          recommendations: ['Document is complete and verified']
        }
      }
    ]
  },
  {
    id: 'prop-2',
    title: 'Historic Victorian Mansion',
    description: 'Beautifully restored Victorian mansion with original hardwood floors, ornate moldings, and modern amenities.',
    price: 1950000,
    location: {
      address: '847 Grove Street',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94117',
      coordinates: { lat: 37.7849, lng: -122.4494 }
    },
    propertyType: 'residential',
    subType: 'mansion',
    specifications: {
      bedrooms: 6,
      bathrooms: 4,
      squareFootage: 4800,
      lotSize: 7200,
      yearBuilt: 1895,
      parking: 3
    },
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b4067f4c-f8e8-4cbc-9c46-dcdb1db7a357.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/922fc13c-9c48-4c72-9e20-608d4542d310.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d793c7f9-e6b1-4b64-8dd3-707594543594.png'
    ],
    aiRating: {
      overallScore: 78,
      riskLevel: 'medium',
      clearanceStatus: 'needs_review',
      factors: {
        documentCompleteness: 85,
        legalClarity: 72,
        titleVerification: 80,
        financialAssessment: 75
      },
      lastUpdated: '2024-01-14T15:20:00Z'
    },
    nftDetails: {
      blockchain: 'Ethereum',
      mintingStatus: 'pending'
    },
    seller: {
      id: 'seller-2',
      name: 'Sarah Williams',
      avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f3380e23-567a-4340-ae0b-ace33a7be2bc.png',
      rating: 4.6,
      verificationStatus: 'verified'
    },
    listing: {
      status: 'active',
      listedDate: '2024-01-12T11:30:00Z',
      viewCount: 189,
      favoriteCount: 15
    },
    documents: [
      {
        id: 'doc-2',
        name: 'Historical Property Survey',
        type: 'survey',
        url: '/documents/survey-2.pdf',
        uploadDate: '2024-01-10T12:15:00Z',
        verificationStatus: 'pending',
        aiAnalysis: {
          score: 72,
          issues: ['Minor boundary discrepancies need clarification'],
          recommendations: ['Update survey with current measurements']
        }
      }
    ],
    bids: [
      {
        id: 'bid-1',
        propertyId: 'prop-2',
        buyerId: 'buyer-1',
        buyerName: 'David Johnson',
        amount: 1850000,
        status: 'pending',
        message: 'Serious cash offer, flexible closing timeline',
        timestamp: '2024-01-14T09:30:00Z',
        expiresAt: '2024-01-21T09:30:00Z'
      }
    ]
  },
  {
    id: 'prop-3',
    title: 'Waterfront Commercial Building',
    description: 'Prime commercial property with water views, suitable for office space or mixed-use development.',
    price: 4200000,
    location: {
      address: '156 Harbor Drive',
      city: 'Miami',
      state: 'FL',
      zipCode: '33131',
      coordinates: { lat: 25.7617, lng: -80.1918 }
    },
    propertyType: 'commercial',
    subType: 'office_building',
    specifications: {
      squareFootage: 12000,
      lotSize: 15000,
      yearBuilt: 2010,
      parking: 40
    },
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ddf9f78f-c75c-4e3b-a07e-d9264b198d32.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/08a5b88c-ca54-42ed-a043-7ce65dffba33.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/82a264fe-abbd-4498-b0df-1be4b9e97e2c.png'
    ],
    aiRating: {
      overallScore: 87,
      riskLevel: 'low',
      clearanceStatus: 'approved',
      factors: {
        documentCompleteness: 92,
        legalClarity: 88,
        titleVerification: 85,
        financialAssessment: 83
      },
      lastUpdated: '2024-01-13T14:00:00Z'
    },
    nftDetails: {
      tokenId: 'EST-003',
      contractAddress: '0x8f3d2b1e4c7a9f6e5d8c4b2a1',
      blockchain: 'Ethereum',
      mintingStatus: 'minted',
      mintingDate: '2024-01-11T10:15:00Z'
    },
    seller: {
      id: 'seller-3',
      name: 'Miami Development Corp',
      rating: 4.7,
      verificationStatus: 'verified'
    },
    listing: {
      status: 'active',
      listedDate: '2024-01-09T13:45:00Z',
      viewCount: 267,
      favoriteCount: 22
    },
    documents: [
      {
        id: 'doc-3',
        name: 'Commercial Zoning Certificate',
        type: 'other',
        url: '/documents/zoning-3.pdf',
        uploadDate: '2024-01-08T10:00:00Z',
        verificationStatus: 'verified'
      }
    ]
  },
  {
    id: 'prop-4',
    title: 'Suburban Family Home',
    description: 'Perfect family home in quiet neighborhood with excellent schools, large backyard, and modern updates.',
    price: 675000,
    location: {
      address: '42 Maple Lane',
      city: 'Austin',
      state: 'TX',
      zipCode: '78704',
      coordinates: { lat: 30.2672, lng: -97.7431 }
    },
    propertyType: 'residential',
    subType: 'single_family',
    specifications: {
      bedrooms: 4,
      bathrooms: 3,
      squareFootage: 2800,
      lotSize: 8500,
      yearBuilt: 2005,
      parking: 2
    },
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2a95e63a-10c9-4d01-854c-1f19ff5f6563.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e6ed4e3b-64f8-44c3-a578-bf7a3ceb61a6.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3cd55213-3520-4f0d-af22-1c549656658a.png'
    ],
    aiRating: {
      overallScore: 91,
      riskLevel: 'low',
      clearanceStatus: 'approved',
      factors: {
        documentCompleteness: 94,
        legalClarity: 90,
        titleVerification: 92,
        financialAssessment: 88
      },
      lastUpdated: '2024-01-16T11:15:00Z'
    },
    nftDetails: {
      tokenId: 'EST-004',
      contractAddress: '0x9a4b3c2d1e0f5g6h7i8j9k0l',
      blockchain: 'Ethereum',
      mintingStatus: 'minted',
      mintingDate: '2024-01-12T16:30:00Z'
    },
    seller: {
      id: 'seller-4',
      name: 'Jennifer Martinez',
      avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c697ca5e-9ee1-4723-b91e-c0e532a7e488.png',
      rating: 4.8,
      verificationStatus: 'verified'
    },
    listing: {
      status: 'active',
      listedDate: '2024-01-11T08:20:00Z',
      viewCount: 156,
      favoriteCount: 19
    },
    documents: [
      {
        id: 'doc-4',
        name: 'Home Inspection Report',
        type: 'inspection',
        url: '/documents/inspection-4.pdf',
        uploadDate: '2024-01-09T14:30:00Z',
        verificationStatus: 'verified',
        aiAnalysis: {
          score: 88,
          issues: ['Minor electrical updates recommended'],
          recommendations: ['Consider updating electrical panel']
        }
      }
    ]
  },
  {
    id: 'prop-5',
    title: 'Industrial Warehouse Complex',
    description: 'Large warehouse facility with high ceilings, loading docks, and excellent transportation access.',
    price: 3100000,
    location: {
      address: '2847 Industrial Boulevard',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90058',
      coordinates: { lat: 34.0522, lng: -118.2437 }
    },
    propertyType: 'industrial',
    subType: 'warehouse',
    specifications: {
      squareFootage: 45000,
      lotSize: 60000,
      yearBuilt: 2015,
      parking: 50
    },
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2b0b6908-3b3e-48d3-b82e-c5966460d9bb.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e2f696d0-6a31-484f-91ea-338ed78ffd96.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/30e16162-ad38-42c8-a0bb-ff0592e34285.png'
    ],
    aiRating: {
      overallScore: 82,
      riskLevel: 'medium',
      clearanceStatus: 'approved',
      factors: {
        documentCompleteness: 86,
        legalClarity: 80,
        titleVerification: 84,
        financialAssessment: 78
      },
      lastUpdated: '2024-01-15T16:45:00Z'
    },
    nftDetails: {
      blockchain: 'Ethereum',
      mintingStatus: 'pending'
    },
    seller: {
      id: 'seller-5',
      name: 'Industrial Properties LLC',
      rating: 4.4,
      verificationStatus: 'verified'
    },
    listing: {
      status: 'active',
      listedDate: '2024-01-13T12:00:00Z',
      viewCount: 98,
      favoriteCount: 7
    },
    documents: [
      {
        id: 'doc-5',
        name: 'Environmental Assessment',
        type: 'inspection',
        url: '/documents/environmental-5.pdf',
        uploadDate: '2024-01-12T09:45:00Z',
        verificationStatus: 'pending',
        aiAnalysis: {
          score: 78,
          issues: ['Requires updated environmental compliance certificate'],
          recommendations: ['Schedule environmental re-assessment']
        }
      }
    ]
  }
];

export const mockUsers: User[] = [
  {
    id: 'user-1',
    email: 'john.doe@example.com',
    name: 'John Doe',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/89631bf3-c826-4562-b0a5-e9442712e8cb.png',
    role: 'both',
    profile: {
      firstName: 'John',
      lastName: 'Doe',
      phone: '+1-555-0123',
      dateOfBirth: '1985-06-15',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zipCode: '10001',
        country: 'USA'
      },
      bio: 'Real estate investor with 10+ years of experience'
    },
    wallet: {
      address: '0x742d35Cc6634C0532925a3b8D402fB99E65D10e8',
      type: 'metamask',
      isConnected: true,
      balance: {
        eth: 15.5,
        usd: 48620
      }
    },
    kyc: {
      status: 'approved',
      level: 'advanced',
      submittedAt: '2024-01-01T10:00:00Z',
      approvedAt: '2024-01-03T14:30:00Z',
      documents: [],
      verificationScore: 95,
      riskLevel: 'low'
    },
    preferences: {
      notifications: {
        email: true,
        push: true,
        bidUpdates: true,
        priceAlerts: true,
        newListings: true,
        marketInsights: false
      },
      privacy: {
        showProfile: true,
        showTransactions: false,
        allowMessages: true
      },
      trading: {
        autoRejectLowOffers: false,
        preferredCurrency: 'ETH'
      }
    },
    stats: {
      propertiesOwned: 3,
      propertiesSold: 5,
      totalVolume: 8900000,
      averageRating: 4.8,
      joinDate: '2023-03-15T00:00:00Z',
      successfulTransactions: 8,
      activeBids: 2,
      favoriteProperties: ['prop-2', 'prop-4']
    },
    createdAt: '2023-03-15T10:30:00Z',
    lastLogin: '2024-01-16T08:45:00Z'
  }
];

export const propertyStats: PropertyStats = {
  totalProperties: 1247,
  averagePrice: 1850000,
  totalVolume: 2307000000,
  averageAIRating: 86.4,
  topLocations: ['New York, NY', 'San Francisco, CA', 'Miami, FL', 'Austin, TX', 'Los Angeles, CA']
};
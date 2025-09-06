"use client";

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Property } from '@/types/property';

interface PropertyCardProps {
  property: Property;
  onFavorite?: (propertyId: string) => void;
  isFavorite?: boolean;
}

export function PropertyCard({ property, onFavorite, isFavorite = false }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'low':
        return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'high':
        return 'bg-red-500/20 text-red-400 border-red-500/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50';
      case 'under_contract':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/50';
      case 'sold':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  return (
    <Card className="group bg-gray-900/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden">
      <CardHeader className="p-0 relative">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/eb49f55b-1075-4584-9a3f-9f2fec8ac548.png';
            }}
          />
          
          {/* Overlay badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            <Badge className={getStatusColor(property.listing.status)}>
              {property.listing.status.replace('_', ' ')}
            </Badge>
            <Badge className={getRiskColor(property.aiRating.riskLevel)}>
              {property.aiRating.riskLevel} risk
            </Badge>
          </div>
          
          {/* Favorite button */}
          <div className="absolute top-3 right-3">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 rounded-full bg-black/50 hover:bg-black/70 text-white"
              onClick={(e) => {
                e.preventDefault();
                onFavorite?.(property.id);
              }}
            >
              <span className={`text-lg ${isFavorite ? 'text-red-400' : 'text-gray-400'}`}>
                {isFavorite ? '♥' : '♡'}
              </span>
            </Button>
          </div>
          
          {/* AI Rating */}
          <div className="absolute bottom-3 right-3">
            <div className="bg-black/70 rounded-lg px-3 py-1 flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-white font-semibold text-sm">
                AI: {property.aiRating.overallScore}%
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
              <Link href={`/marketplace/${property.id}`}>
                {property.title}
              </Link>
            </h3>
            <p className="text-gray-400 text-sm mb-2">
              {property.location.address}, {property.location.city}, {property.location.state}
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              {formatPrice(property.price)}
            </div>
          </div>
        </div>
        
        {/* Property specs */}
        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
          {property.specifications.bedrooms && (
            <span>{property.specifications.bedrooms} beds</span>
          )}
          {property.specifications.bathrooms && (
            <span>{property.specifications.bathrooms} baths</span>
          )}
          <span>{property.specifications.squareFootage.toLocaleString()} sq ft</span>
        </div>
        
        {/* Seller info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={property.seller.avatar} alt={property.seller.name} />
              <AvatarFallback className="bg-gray-700 text-white text-xs">
                {property.seller.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="text-sm text-white font-medium">{property.seller.name}</div>
              <div className="text-xs text-gray-400 flex items-center">
                <span className="text-yellow-400 mr-1">★</span>
                {property.seller.rating}
                {property.seller.verificationStatus === 'verified' && (
                  <span className="ml-1 text-green-400">✓</span>
                )}
              </div>
            </div>
          </div>
          
          {/* NFT Status */}
          <div className="text-right">
            <div className="text-xs text-gray-400 mb-1">NFT Status</div>
            <Badge className={`text-xs ${
              property.nftDetails.mintingStatus === 'minted' 
                ? 'bg-green-500/20 text-green-400 border-green-500/50'
                : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50'
            }`}>
              {property.nftDetails.mintingStatus}
            </Badge>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex space-x-2">
          <Button
            asChild
            className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
          >
            <Link href={`/marketplace/${property.id}`}>
              View Details
            </Link>
          </Button>
          
          {property.listing.status === 'active' && (
            <Button
              variant="outline"
              className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
            >
              Make Offer
            </Button>
          )}
        </div>
        
        {/* Stats */}
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-700">
          <div className="flex space-x-4 text-xs text-gray-400">
            <span>{property.listing.viewCount} views</span>
            <span>{property.listing.favoriteCount} favorites</span>
          </div>
          <div className="text-xs text-gray-400">
            Listed {new Date(property.listing.listedDate).toLocaleDateString()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
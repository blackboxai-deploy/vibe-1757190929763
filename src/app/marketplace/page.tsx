"use client";

import React, { useState, useMemo } from 'react';
import { Header } from '@/components/layout/Header';
import { PropertyCard } from '@/components/property/PropertyCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockProperties } from '@/lib/mockData';
import { PROPERTY_TYPES, SORT_OPTIONS } from '@/lib/constants';
import { PropertyFilter } from '@/types/property';

export default function MarketplacePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<PropertyFilter>({
    priceRange: { min: 0, max: 5000000 },
    sortBy: 'date',
    sortOrder: 'desc'
  });
  const [favorites, setFavorites] = useState<string[]>([]);

  // Filter and sort properties
  const filteredProperties = useMemo(() => {
    let filtered = mockProperties.filter(property => {
      // Search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        if (
          !property.title.toLowerCase().includes(searchLower) &&
          !property.location.city.toLowerCase().includes(searchLower) &&
          !property.location.state.toLowerCase().includes(searchLower) &&
          !property.propertyType.toLowerCase().includes(searchLower)
        ) {
          return false;
        }
      }

      // Price range filter
      if (filters.priceRange) {
        if (property.price < filters.priceRange.min || property.price > filters.priceRange.max) {
          return false;
        }
      }

      // Property type filter
      if (filters.propertyType && filters.propertyType.length > 0) {
        if (!filters.propertyType.includes(property.propertyType)) {
          return false;
        }
      }

      // AI rating filter
      if (filters.aiRatingMin && property.aiRating.overallScore < filters.aiRatingMin) {
        return false;
      }

      // Bedrooms filter
      if (filters.bedrooms && property.specifications.bedrooms !== filters.bedrooms) {
        return false;
      }

      return true;
    });

    // Sort properties
    if (filters.sortBy) {
      filtered.sort((a, b) => {
        let comparison = 0;
        
        switch (filters.sortBy) {
          case 'price':
            comparison = a.price - b.price;
            break;
          case 'date':
            comparison = new Date(a.listing.listedDate).getTime() - new Date(b.listing.listedDate).getTime();
            break;
          case 'rating':
            comparison = a.aiRating.overallScore - b.aiRating.overallScore;
            break;
          case 'popularity':
            comparison = a.listing.favoriteCount - b.listing.favoriteCount;
            break;
          default:
            comparison = 0;
        }

        return filters.sortOrder === 'desc' ? -comparison : comparison;
      });
    }

    return filtered;
  }, [searchTerm, filters]);

  const handleFavorite = (propertyId: string) => {
    setFavorites(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setFilters({
      priceRange: { min: 0, max: 5000000 },
      sortBy: 'date',
      sortOrder: 'desc'
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Property Marketplace
          </h1>
          <p className="text-gray-400 text-lg">
            Discover verified properties with AI-powered insights and blockchain security
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 bg-gray-900/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center justify-between">
              Search & Filters
              <Button
                variant="ghost"
                onClick={clearFilters}
                className="text-cyan-400 hover:text-cyan-300"
              >
                Clear All
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Search Bar */}
            <div>
              <Input
                placeholder="Search by location, property type, or title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Property Type */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Property Type
                </label>
                <Select
                  value={filters.propertyType?.[0] || ''}
                  onValueChange={(value) => 
                    setFilters(prev => ({ 
                      ...prev, 
                      propertyType: value ? [value] : undefined 
                    }))
                  }
                >
                  <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                    <SelectValue placeholder="Any type" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    <SelectItem value="">Any type</SelectItem>
                    {Object.entries(PROPERTY_TYPES).map(([key, type]) => (
                      <SelectItem key={key} value={key}>
                        {(type as { label: string }).label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Bedrooms */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Bedrooms
                </label>
                <Select
                  value={filters.bedrooms?.toString() || ''}
                  onValueChange={(value) => 
                    setFilters(prev => ({ 
                      ...prev, 
                      bedrooms: value ? parseInt(value) : undefined 
                    }))
                  }
                >
                  <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    <SelectItem value="">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* AI Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Minimum AI Rating: {filters.aiRatingMin || 0}%
                </label>
                <Slider
                  value={[filters.aiRatingMin || 0]}
                  onValueChange={([value]) => 
                    setFilters(prev => ({ ...prev, aiRatingMin: value }))
                  }
                  max={100}
                  step={5}
                  className="w-full"
                />
              </div>

              {/* Sort */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Sort By
                </label>
                <Select
                  value={`${filters.sortBy}_${filters.sortOrder}`}
                  onValueChange={(value) => {
                    const [sortBy, sortOrder] = value.split('_') as [string, 'asc' | 'desc'];
                    setFilters(prev => ({ ...prev, sortBy, sortOrder }));
                  }}
                >
                  <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    {SORT_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Price Range: ${filters.priceRange?.min?.toLocaleString()} - ${filters.priceRange?.max?.toLocaleString()}
              </label>
              <div className="px-4">
                <Slider
                  value={[filters.priceRange?.min || 0, filters.priceRange?.max || 5000000]}
                  onValueChange={([min, max]) => 
                    setFilters(prev => ({ ...prev, priceRange: { min, max } }))
                  }
                  max={5000000}
                  min={0}
                  step={50000}
                  className="w-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-semibold text-white">
              {filteredProperties.length} Properties Found
            </h2>
            {(searchTerm || filters.propertyType || filters.bedrooms || (filters.aiRatingMin && filters.aiRatingMin > 0)) && (
              <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
                Filtered
              </Badge>
            )}
          </div>
          
          {favorites.length > 0 && (
            <Badge className="bg-red-500/20 text-red-400 border-red-500/50">
              {favorites.length} Favorites
            </Badge>
          )}
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onFavorite={handleFavorite}
                isFavorite={favorites.includes(property.id)}
              />
            ))}
          </div>
        ) : (
          <Card className="bg-gray-900/50 border-gray-700">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No Properties Found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search criteria or clear all filters to see more properties.
              </p>
              <Button
                onClick={clearFilters}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
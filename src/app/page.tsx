"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/layout/Header';
import { propertyStats } from '@/lib/mockData';

export default function HomePage() {
  const features = [
    {
      title: 'Instant Property Verification',
      description: 'AI-powered document analysis provides instant clearance ratings and risk assessments for all properties.',
      metric: '90% faster',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Blockchain Security',
      description: 'Property titles are minted as NFTs on the blockchain, ensuring immutable ownership records and fraud prevention.',
      metric: '100% secure',
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Smart Contract Automation',
      description: 'Automated escrow and transfer processes reduce closing times from weeks to minutes.',
      metric: '95% time savings',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  const stats = [
    { label: 'Properties Listed', value: propertyStats.totalProperties.toLocaleString() },
    { label: 'Total Volume', value: `$${(propertyStats.totalVolume / 1000000000).toFixed(1)}B` },
    { label: 'Average AI Rating', value: `${propertyStats.averageAIRating}%` },
    { label: 'Average Price', value: `$${(propertyStats.averagePrice / 1000000).toFixed(1)}M` }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border-cyan-400/50">
              🚀 Revolutionizing Real Estate with Blockchain
            </Badge>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-8">
              The Future of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                Real Estate
              </span>{' '}
              is Here
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Estatos transforms property transactions through NFT-based ownership, AI-powered verification, 
              and smart contracts. Reduce closing times from weeks to minutes while ensuring maximum security.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-8 py-6 text-lg"
              >
                <Link href="/marketplace">Explore Properties</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-6 text-lg"
              >
                <Link href="/sell">List Your Property</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-gray-800/50 bg-gray-900/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Why Choose Estatos?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the next generation of real estate transactions with cutting-edge technology 
              that prioritizes speed, security, and transparency.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-gray-600 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} mb-6`}>
                    <div className="w-6 h-6 bg-white rounded-sm" />
                  </div>
                  
                  <div className="mb-4">
                    <Badge className={`bg-gradient-to-r ${feature.color} text-white border-0`}>
                      {feature.metric}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              How Estatos Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our streamlined process makes real estate transactions faster, safer, and more transparent than ever before.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* For Buyers */}
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-8">For Buyers</h3>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Connect Your Wallet', desc: 'Link your existing wallet or create a new smart wallet with us' },
                  { step: '02', title: 'Complete KYC', desc: 'Quick verification process to ensure platform security' },
                  { step: '03', title: 'Browse Properties', desc: 'Explore verified properties with AI-powered ratings' },
                  { step: '04', title: 'Make Offers', desc: 'Submit bids and negotiate directly with sellers' },
                  { step: '05', title: 'Instant Transfer', desc: 'Complete purchase and receive NFT ownership immediately' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* For Sellers */}
            <div>
              <h3 className="text-2xl font-bold text-purple-400 mb-8">For Sellers</h3>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Complete KYC', desc: 'Verify your identity to list properties on our platform' },
                  { step: '02', title: 'Upload Documents', desc: 'Submit property documents for AI analysis' },
                  { step: '03', title: 'AI Verification', desc: 'Get instant clearance rating and risk assessment' },
                  { step: '04', title: 'Mint Property NFT', desc: 'Create blockchain-based proof of ownership' },
                  { step: '05', title: 'List & Sell', desc: 'Showcase your property and accept offers' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-400/50">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Real Estate Experience?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of users who are already experiencing faster, more secure property transactions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-8 py-6 text-lg"
                >
                  <Link href="/auth/register">Get Started Today</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-6 text-lg"
                >
                  <Link href="/marketplace">View Properties</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
                <span className="text-black font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-bold text-white">
                Est<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">atos</span>
              </span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Estatos. All rights reserved. | Prototype Version
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
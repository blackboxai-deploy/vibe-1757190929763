"use client";

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { WalletConnect } from '@/components/wallet/WalletConnect';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function WalletPage() {
  const [showConnectDialog, setShowConnectDialog] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState<string | null>(null);
  const [walletData, setWalletData] = useState<any>(null);

  const handleWalletConnect = (walletId: string) => {
    // Simulate wallet connection with mock data
    const mockWalletData = {
      id: walletId,
      address: '0x742d35Cc6634C0532925a3b8D402fB99E65D10e8',
      balance: {
        eth: 15.5,
        usd: 48620
      },
      nfts: [
        {
          tokenId: 'EST-001',
          propertyTitle: 'Modern Downtown Penthouse',
          propertyImage: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fa7e5fc2-d5af-4c64-8476-e0ad048358cd.png',
          value: 2800000,
          acquiredDate: '2024-01-10'
        },
        {
          tokenId: 'EST-004',
          propertyTitle: 'Suburban Family Home',
          propertyImage: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/14f3cd4f-8ec7-455a-8d3b-fd40a9f689f8.png',
          value: 675000,
          acquiredDate: '2024-01-12'
        }
      ],
      transactions: [
        {
          id: '1',
          type: 'purchase',
          propertyTitle: 'Suburban Family Home',
          amount: 675000,
          date: '2024-01-12',
          status: 'completed'
        },
        {
          id: '2',
          type: 'purchase',
          propertyTitle: 'Modern Downtown Penthouse',
          amount: 2800000,
          date: '2024-01-10',
          status: 'completed'
        }
      ]
    };

    setConnectedWallet(walletId);
    setWalletData(mockWalletData);
  };

  const handleDisconnect = () => {
    setConnectedWallet(null);
    setWalletData(null);
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  if (!connectedWallet) {
    return (
      <div className="min-h-screen">
        <Header />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Connect Your Wallet
              </h1>
              <p className="text-gray-400 text-lg">
                Connect your wallet to start buying, selling, and managing your property NFTs
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Benefits */}
              <Card className="bg-gray-900/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Why Connect a Wallet?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-cyan-400 text-sm">🏠</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Own Property NFTs</h4>
                      <p className="text-gray-400 text-sm">Your property titles are secured as NFTs on the blockchain</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-400 text-sm">⚡</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Instant Transactions</h4>
                      <p className="text-gray-400 text-sm">Buy and sell properties in minutes, not weeks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-400 text-sm">🔒</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Complete Security</h4>
                      <p className="text-gray-400 text-sm">Your assets are protected by blockchain technology</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Getting Started */}
              <Card className="bg-gray-900/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Getting Started</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                    <span className="text-gray-300">Choose your wallet type</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-gray-300 text-xs font-bold">2</div>
                    <span className="text-gray-400">Complete wallet setup</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-gray-300 text-xs font-bold">3</div>
                    <span className="text-gray-400">Start using Estatos</span>
                  </div>
                  
                  <div className="pt-4">
                    <Button
                      onClick={() => setShowConnectDialog(true)}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3"
                    >
                      Connect Wallet
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* New to Web3 */}
            <Card className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-400/50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">✨</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">New to Web3? No Problem!</h3>
                    <p className="text-gray-300 mb-4">
                      Our Smart Wallet uses account abstraction (ERC-4337) to make blockchain interactions as easy as using any app. 
                      No gas fees, no complex setup, just simple property transactions.
                    </p>
                    <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white">
                      Recommended for Beginners
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <WalletConnect
          isOpen={showConnectDialog}
          onClose={() => setShowConnectDialog(false)}
          onConnect={handleWalletConnect}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header user={{
        name: 'John Doe',
        wallet: {
          isConnected: true,
          address: walletData?.address,
          balance: walletData?.balance
        }
      }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Wallet Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">My Wallet</h1>
              <p className="text-gray-400">Manage your digital assets and property NFTs</p>
            </div>
            <Button
              onClick={handleDisconnect}
              variant="outline"
              className="border-red-500/50 text-red-400 hover:bg-red-500/10"
            >
              Disconnect
            </Button>
          </div>

          {/* Wallet Overview */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-2 bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  Wallet Overview
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                    Connected
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white">
                        {connectedWallet === 'smart_wallet' ? '✨' : connectedWallet === 'metamask' ? '🦊' : '🔵'}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-white font-semibold capitalize">
                        {connectedWallet?.replace('_', ' ')} Wallet
                      </div>
                      <div className="text-gray-400 font-mono text-sm">
                        {formatAddress(walletData?.address)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
                    <div>
                      <div className="text-gray-400 text-sm">ETH Balance</div>
                      <div className="text-2xl font-bold text-cyan-400">
                        {walletData?.balance?.eth} ETH
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">USD Value</div>
                      <div className="text-2xl font-bold text-white">
                        ${walletData?.balance?.usd.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Portfolio Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="text-gray-400 text-sm">Properties Owned</div>
                    <div className="text-3xl font-bold text-purple-400">
                      {walletData?.nfts?.length || 0}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-gray-400 text-sm">Total Value</div>
                    <div className="text-lg font-bold text-green-400">
                      {formatCurrency(walletData?.nfts?.reduce((sum: number, nft: any) => sum + nft.value, 0) || 0)}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-gray-400 text-sm">Transactions</div>
                    <div className="text-lg font-bold text-white">
                      {walletData?.transactions?.length || 0}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Property NFTs */}
          <Card className="bg-gray-900/50 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-white">My Property NFTs</CardTitle>
            </CardHeader>
            <CardContent>
              {walletData?.nfts?.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {walletData.nfts.map((nft: any) => (
                    <Card key={nft.tokenId} className="bg-gray-800/50 border-gray-600">
                      <CardContent className="p-6">
                        <div className="flex space-x-4">
                          <img
                            src={nft.propertyImage}
                            alt={nft.propertyTitle}
                            className="w-20 h-20 object-cover rounded-lg"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/864656e9-4d6d-4499-9104-95c111215e1b.png';
                            }}
                          />
                          <div className="flex-1">
                            <h3 className="text-white font-semibold mb-1">{nft.propertyTitle}</h3>
                            <p className="text-gray-400 text-sm mb-2">Token ID: {nft.tokenId}</p>
                            <p className="text-cyan-400 font-semibold">{formatCurrency(nft.value)}</p>
                            <p className="text-gray-400 text-xs">
                              Acquired: {new Date(nft.acquiredDate).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2">No Property NFTs Yet</h3>
                  <p className="text-gray-400 mb-4">Start browsing properties to build your portfolio</p>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
                  >
                    <a href="/marketplace">Browse Properties</a>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              {walletData?.transactions?.length > 0 ? (
                <div className="space-y-4">
                  {walletData.transactions.map((tx: any) => (
                    <div key={tx.id} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">🏠</span>
                        </div>
                        <div>
                          <div className="text-white font-medium">{tx.propertyTitle}</div>
                          <div className="text-gray-400 text-sm capitalize">{tx.type}</div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-white font-semibold">{formatCurrency(tx.amount)}</div>
                        <div className="text-gray-400 text-sm">{new Date(tx.date).toLocaleDateString()}</div>
                      </div>
                      
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/50 capitalize">
                        {tx.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-gray-400">No transactions yet</div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
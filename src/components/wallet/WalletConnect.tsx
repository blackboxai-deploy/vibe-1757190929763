"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface WalletOption {
  id: string;
  name: string;
  icon: string;
  description: string;
  isInstalled: boolean;
  isRecommended?: boolean;
}

const walletOptions: WalletOption[] = [
  {
    id: 'metamask',
    name: 'MetaMask',
    icon: '🦊',
    description: 'Popular browser wallet with wide compatibility',
    isInstalled: typeof window !== 'undefined' && !!(window as any).ethereum?.isMetaMask,
  },
  {
    id: 'smart_wallet',
    name: 'Smart Wallet',
    icon: '✨',
    description: 'Gas-free wallet powered by account abstraction (ERC-4337)',
    isInstalled: true,
    isRecommended: true,
  },
  {
    id: 'coinbase',
    name: 'Coinbase Wallet',
    icon: '🔵',
    description: 'Secure wallet by Coinbase with easy onboarding',
    isInstalled: typeof window !== 'undefined' && !!(window as any).ethereum?.isCoinbaseWallet,
  },
  {
    id: 'walletconnect',
    name: 'WalletConnect',
    icon: '🔗',
    description: 'Connect with 300+ mobile and desktop wallets',
    isInstalled: true,
  }
];

interface WalletConnectProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: (walletId: string) => void;
}

export function WalletConnect({ isOpen, onClose, onConnect }: WalletConnectProps) {
  const [connecting, setConnecting] = useState<string | null>(null);
  const [showSmartWalletCreation, setShowSmartWalletCreation] = useState(false);

  const handleConnect = async (walletId: string) => {
    if (walletId === 'smart_wallet' && !connecting) {
      setShowSmartWalletCreation(true);
      return;
    }

    setConnecting(walletId);
    
    // Simulate connection process
    setTimeout(() => {
      setConnecting(null);
      onConnect(walletId);
      onClose();
    }, 2000);
  };

  const handleSmartWalletCreation = () => {
    setConnecting('smart_wallet');
    
    // Simulate smart wallet creation
    setTimeout(() => {
      setConnecting(null);
      setShowSmartWalletCreation(false);
      onConnect('smart_wallet');
      onClose();
    }, 3000);
  };

  if (showSmartWalletCreation) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-gray-900 border-gray-700 max-w-md">
          <DialogHeader>
            <DialogTitle className="text-white text-center">Create Smart Wallet</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Smart Wallet Benefits</h3>
              <p className="text-gray-400 text-sm">
                Your smart wallet will be created using ERC-4337 account abstraction technology
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <span className="text-green-400 text-sm">⚡</span>
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Gas-Free Transactions</div>
                  <div className="text-gray-400 text-xs">No need to hold ETH for gas fees</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <span className="text-blue-400 text-sm">🔒</span>
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Enhanced Security</div>
                  <div className="text-gray-400 text-xs">Multi-signature and recovery options</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <span className="text-purple-400 text-sm">📱</span>
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Easy Management</div>
                  <div className="text-gray-400 text-xs">No seed phrases to remember</div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                onClick={handleSmartWalletCreation}
                disabled={!!connecting}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold"
              >
                {connecting ? 'Creating Wallet...' : 'Create Smart Wallet'}
              </Button>
              
              <Button
                variant="ghost"
                onClick={() => setShowSmartWalletCreation(false)}
                className="w-full text-gray-400 hover:text-white"
                disabled={!!connecting}
              >
                Back to Wallet Options
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-900 border-gray-700 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-white text-center">Connect Wallet</DialogTitle>
          <p className="text-gray-400 text-center text-sm">
            Choose how you want to connect to Estatos
          </p>
        </DialogHeader>
        
        <div className="space-y-3 py-4">
          {walletOptions.map((wallet) => (
            <Card
              key={wallet.id}
              className={`bg-gray-800/50 border-gray-600 hover:border-cyan-400/50 cursor-pointer transition-all duration-200 ${
                connecting === wallet.id ? 'border-cyan-400' : ''
              }`}
              onClick={() => !connecting && handleConnect(wallet.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="text-2xl bg-gray-700">
                      {wallet.icon}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-white font-semibold">{wallet.name}</h3>
                      {wallet.isRecommended && (
                        <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs">
                          Recommended
                        </Badge>
                      )}
                      {!wallet.isInstalled && wallet.id !== 'smart_wallet' && (
                        <Badge variant="secondary" className="text-xs">
                          Install Required
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">{wallet.description}</p>
                  </div>
                  
                  {connecting === wallet.id ? (
                    <div className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <div className="text-cyan-400">→</div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gray-800/30 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-blue-400">ℹ️</span>
            <span className="text-white font-medium text-sm">New to Web3?</span>
          </div>
          <p className="text-gray-400 text-xs">
            We recommend the Smart Wallet for beginners. It's gas-free and doesn't require technical knowledge.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  user?: {
    name: string;
    avatar?: string;
    wallet?: {
      isConnected: boolean;
      address?: string;
      balance?: {
        eth: number;
        usd: number;
      };
    };
  } | null;
}

export function Header({ user }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Sell Property', href: '/sell' },
    { name: 'Dashboard', href: '/dashboard' },
  ];

  const formatWalletAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const formatBalance = (balance: number) => {
    return balance.toFixed(4);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800/50 bg-black/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
                <span className="text-black font-bold text-sm">E</span>
              </div>
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-400 rounded-full animate-pulse" />
            </div>
            <span className="text-xl font-bold text-white">
              Est<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">atos</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            {/* Wallet Status */}
            {user?.wallet?.isConnected ? (
              <div className="hidden sm:flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-900/50 border border-gray-700">
                <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
                <div className="text-xs">
                  <div className="text-gray-400">Wallet Connected</div>
                  <div className="text-white font-mono">
                    {user.wallet.address && formatWalletAddress(user.wallet.address)}
                  </div>
                </div>
                {user.wallet.balance && (
                  <div className="text-xs text-right">
                    <div className="text-cyan-400 font-semibold">
                      {formatBalance(user.wallet.balance.eth)} ETH
                    </div>
                    <div className="text-gray-400">
                      ${user.wallet.balance.usd.toLocaleString()}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Button
                variant="outline"
                className="hidden sm:inline-flex border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
              >
                Connect Wallet
              </Button>
            )}

            {/* User Menu */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10 ring-2 ring-cyan-400/50">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="bg-gradient-to-br from-cyan-400 to-purple-500 text-black font-semibold">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-gray-900 border-gray-700" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none text-white">{user.name}</p>
                      {user.wallet?.address && (
                        <p className="text-xs leading-none text-gray-400 font-mono">
                          {formatWalletAddress(user.wallet.address)}
                        </p>
                      )}
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-800">
                    <Link href="/profile" className="w-full">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-800">
                    <Link href="/dashboard" className="w-full">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-800">
                    <Link href="/wallet" className="w-full">Wallet</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  <DropdownMenuItem className="text-red-400 hover:text-red-300 hover:bg-red-900/20">
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" asChild>
                  <Link href="/auth/login" className="text-gray-300 hover:text-white">
                    Sign In
                  </Link>
                </Button>
                <Button
                  asChild
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold"
                >
                  <Link href="/auth/register">Get Started</Link>
                </Button>
              </div>
            )}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              className="md:hidden h-10 w-10 p-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="flex flex-col space-y-1">
                <span className={`block h-0.5 w-5 bg-white transition-all duration-200 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`block h-0.5 w-5 bg-white transition-all duration-200 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-5 bg-white transition-all duration-200 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {!user?.wallet?.isConnected && (
                <Button
                  variant="outline"
                  className="w-full border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 mt-4"
                >
                  Connect Wallet
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
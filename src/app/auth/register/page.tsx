"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    agreeToTerms: false,
    agreeToPrivacy: false
  });

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      setLoading(false);
      if (step < 3) {
        setStep(step + 1);
      }
    }, 2000);
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className="bg-gray-800 border-gray-600 text-white focus:border-cyan-400"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className="bg-gray-800 border-gray-600 text-white focus:border-cyan-400"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-gray-300">Email Address</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          className="bg-gray-800 border-gray-600 text-white focus:border-cyan-400"
          required
        />
      </div>

      <div className="space-y-2">
        <Label className="text-gray-300">I&apos;m planning to</Label>
        <Select
          value={formData.role}
          onValueChange={(value) => handleInputChange('role', value)}
        >
          <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
            <SelectValue placeholder="Select your primary role" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-gray-600">
            <SelectItem value="buyer">Buy Properties</SelectItem>
            <SelectItem value="seller">Sell Properties</SelectItem>
            <SelectItem value="both">Buy and Sell Properties</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="password" className="text-gray-300">Password</Label>
        <Input
          id="password"
          type="password"
          value={formData.password}
          onChange={(e) => handleInputChange('password', e.target.value)}
          className="bg-gray-800 border-gray-600 text-white focus:border-cyan-400"
          required
        />
        <div className="text-xs text-gray-400 space-y-1">
          <div>Password must contain:</div>
          <ul className="list-disc list-inside space-y-1">
            <li>At least 8 characters</li>
            <li>One uppercase letter</li>
            <li>One lowercase letter</li>
            <li>One number</li>
          </ul>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword" className="text-gray-300">Confirm Password</Label>
        <Input
          id="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
          className="bg-gray-800 border-gray-600 text-white focus:border-cyan-400"
          required
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <Checkbox
            id="terms"
            checked={formData.agreeToTerms}
            onCheckedChange={(checked) => handleInputChange('agreeToTerms', !!checked)}
            className="border-gray-600 data-[state=checked]:bg-cyan-500"
          />
          <Label htmlFor="terms" className="text-sm text-gray-300 leading-relaxed">
            I agree to the{' '}
            <Link href="/terms" className="text-cyan-400 hover:text-cyan-300 underline">
              Terms of Service
            </Link>{' '}
            and understand that my property transactions will be secured using blockchain technology.
          </Label>
        </div>

        <div className="flex items-start space-x-3">
          <Checkbox
            id="privacy"
            checked={formData.agreeToPrivacy}
            onCheckedChange={(checked) => handleInputChange('agreeToPrivacy', !!checked)}
            className="border-gray-600 data-[state=checked]:bg-cyan-500"
          />
          <Label htmlFor="privacy" className="text-sm text-gray-300 leading-relaxed">
            I agree to the{' '}
            <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">
              Privacy Policy
            </Link>{' '}
            and consent to the processing of my personal data for KYC verification purposes.
          </Label>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="text-center space-y-6">
      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
        <span className="text-white text-2xl">✓</span>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold text-white mb-2">Welcome to Estatos!</h3>
        <p className="text-gray-400">
          Your account has been created successfully. Let's get you started with wallet setup and KYC verification.
        </p>
      </div>

      <div className="bg-gray-900/50 rounded-lg p-6 space-y-4">
        <h4 className="text-lg font-semibold text-white mb-4">Next Steps:</h4>
        <div className="space-y-3 text-left">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-black text-sm font-bold">1</div>
            <span className="text-gray-300">Connect or create your wallet</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-gray-300 text-sm font-bold">2</div>
            <span className="text-gray-400">Complete KYC verification</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-gray-300 text-sm font-bold">3</div>
            <span className="text-gray-400">Start browsing or listing properties</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          asChild
          className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
        >
          <Link href="/wallet">Connect Wallet</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800"
        >
          <Link href="/marketplace">Browse Properties</Link>
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md mx-auto">
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader className="text-center">
              <div className="mb-6">
                <div className="flex justify-center space-x-2 mb-4">
                  {[1, 2, 3].map((stepNumber) => (
                    <div
                      key={stepNumber}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors
                        ${step >= stepNumber 
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' 
                          : 'bg-gray-700 text-gray-400'
                        }`}
                    >
                      {step > stepNumber ? '✓' : stepNumber}
                    </div>
                  ))}
                </div>
                <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
                  Step {step} of 3
                </Badge>
              </div>
              
              <CardTitle className="text-2xl font-bold text-white">
                {step === 1 && 'Create Your Account'}
                {step === 2 && 'Secure Your Account'}
                {step === 3 && 'Account Created!'}
              </CardTitle>
              
              <p className="text-gray-400 mt-2">
                {step === 1 && 'Join the future of real estate transactions'}
                {step === 2 && 'Set up your password and agree to our terms'}
                {step === 3 && 'Ready to start your real estate journey'}
              </p>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit}>
                {step === 1 && renderStep1()}
                {step === 2 && renderStep2()}
                {step === 3 && renderStep3()}

                {step < 3 && (
                  <div className="mt-8 space-y-4">
                    <Button
                      type="submit"
                      disabled={loading || (step === 2 && (!formData.agreeToTerms || !formData.agreeToPrivacy))}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3"
                    >
                      {loading ? 'Processing...' : step === 1 ? 'Continue' : 'Create Account'}
                    </Button>

                    {step > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => setStep(step - 1)}
                        className="w-full text-gray-400 hover:text-white"
                      >
                        Back
                      </Button>
                    )}
                  </div>
                )}
              </form>

              {step < 3 && (
                <div className="mt-6 text-center">
                  <p className="text-gray-400">
                    Already have an account?{' '}
                    <Link href="/auth/login" className="text-cyan-400 hover:text-cyan-300 font-medium">
                      Sign in
                    </Link>
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
'use client';

import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Calculator, Plus, Minus, RotateCcw, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { packages, addOns } from '../data/packagesData';

const EASE = [0.22, 1, 0.36, 1] as const;

interface Selection {
  packageId: string | null;
  addons: Record<string, number>;
}

function parsePriceRange(priceStr: string): { min: number; max: number } | null {
  const cleaned = priceStr.replace(/,/g, '').replace(/PKR/gi, '').trim();
  if (cleaned.toLowerCase().includes('quote')) return null;

  const parts = cleaned.split('–').map(s => s.trim().replace(/[^0-9]/g, ''));
  if (parts.length === 2) {
    return { min: parseInt(parts[0]) || 0, max: parseInt(parts[1]) || 0 };
  }
  const num = parseInt(parts[0]) || 0;
  return { min: num, max: num };
}

export default function SalesCalculator() {
  const [selection, setSelection] = useState<Selection>({
    packageId: null,
    addons: {},
  });

  const selectedPkg = packages.find(p => p.id === selection.packageId);

  const total = useMemo(() => {
    let min = 0;
    let max = 0;

    if (selectedPkg && selectedPkg.priceType !== 'quote') {
      const range = parsePriceRange(selectedPkg.price);
      if (range) {
        min += range.min;
        max += range.max;
      }
    }

    Object.entries(selection.addons).forEach(([name, qty]) => {
      if (qty > 0) {
        const addon = addOns.find(a => a.name === name);
        if (addon) {
          const range = parsePriceRange(addon.price);
          if (range) {
            min += range.min * qty;
            max += range.max * qty;
          }
        }
      }
    });

    return { min, max };
  }, [selectedPkg, selection.addons]);

  const formatNum = (n: number) => n.toLocaleString('en-PK');

  const handleAddonChange = (name: string, delta: number) => {
    setSelection(prev => {
      const current = prev.addons[name] || 0;
      const next = Math.max(0, current + delta);
      const newAddons = { ...prev.addons };
      if (next === 0) delete newAddons[name];
      else newAddons[name] = next;
      return { ...prev, addons: newAddons };
    });
  };

  const reset = () => {
    setSelection({ packageId: null, addons: {} });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
          <Calculator className="w-4 h-4 text-blue-400" />
          <span className="text-[0.75rem] font-medium text-blue-400">Cost Estimator</span>
        </div>
        <h2 className="text-2xl font-bold text-white/90 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
          Build Your Estimate
        </h2>
        <p className="text-[0.85rem] text-gray-500 max-w-xl mx-auto">
          Select a package and optional add-ons to see an estimated cost range.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Selection Panel */}
        <div className="lg:col-span-3 space-y-5">
          {/* Package Selection */}
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <h3 className="text-[0.85rem] font-semibold text-white/80 mb-4">Select a Package</h3>
            <div className="grid grid-cols-1 gap-2">
              {packages.map((pkg) => {
                const Icon = pkg.icon;
                const isSelected = selection.packageId === pkg.id;
                const isQuote = pkg.priceType === 'quote';

                return (
                  <button
                    key={pkg.id}
                    onClick={() => setSelection(prev => ({
                      ...prev,
                      packageId: prev.packageId === pkg.id ? null : pkg.id,
                    }))}
                    className={`flex items-center gap-3 p-3.5 rounded-xl text-left transition-all duration-300 ${
                      isSelected
                        ? 'bg-blue-500/15 border border-blue-500/30 shadow-lg shadow-blue-600/10'
                        : 'bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08]'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-blue-500/20' : 'bg-white/[0.04]'
                    }`}>
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-blue-300' : 'text-gray-500'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`text-[0.82rem] font-medium ${isSelected ? 'text-white' : 'text-white/70'}`}>
                          {pkg.name}
                        </span>
                        {pkg.featured && (
                          <span className="px-1.5 py-0.5 rounded text-[0.6rem] font-bold bg-blue-500/20 text-blue-300">
                            POPULAR
                          </span>
                        )}
                      </div>
                      <span className="text-[0.7rem] text-gray-500">
                        {isQuote ? 'Quote Based' : `PKR ${pkg.price}`}
                      </span>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      isSelected
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-white/20'
                    }`}>
                      {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Add-ons */}
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <h3 className="text-[0.85rem] font-semibold text-white/80 mb-4">Add-on Services (optional)</h3>
            <div className="space-y-2">
              {addOns.filter(a => !a.price.toLowerCase().includes('quote')).map((addon) => {
                const qty = selection.addons[addon.name] || 0;
                const AddonIcon = addon.icon;

                return (
                  <div
                    key={addon.name}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.03] transition-all"
                  >
                    <AddonIcon className="w-4 h-4 text-gray-500 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <span className="text-[0.78rem] text-white/70 truncate block">{addon.name}</span>
                      <span className="text-[0.68rem] text-gray-500">PKR {addon.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleAddonChange(addon.name, -1)}
                        disabled={qty === 0}
                        className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-400 hover:bg-white/[0.08] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-[0.78rem] text-white/70 font-medium">{qty}</span>
                      <button
                        onClick={() => handleAddonChange(addon.name, 1)}
                        className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-400 hover:bg-white/[0.08] transition-all"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Summary Panel */}
        <div className="lg:col-span-2">
          <div className="sticky top-28 p-6 rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
            <h3 className="text-[0.85rem] font-semibold text-white/80 mb-5">Your Estimate</h3>

            {selectedPkg ? (
              <div className="space-y-4">
                <div className="pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2 mb-1">
                    <selectedPkg.icon className="w-4 h-4 text-blue-400" />
                    <span className="text-[0.82rem] font-medium text-white/85">{selectedPkg.name}</span>
                  </div>
                  <span className="text-[0.72rem] text-gray-500">
                    {selectedPkg.priceType === 'quote' ? 'Quote Based' : `PKR ${selectedPkg.price} ${selectedPkg.priceUnit}`}
                  </span>
                </div>

                {Object.entries(selection.addons).filter(([, qty]) => qty > 0).length > 0 && (
                  <div className="pb-4 border-b border-white/[0.06]">
                    <span className="text-[0.72rem] text-gray-500 uppercase tracking-wider">Add-ons</span>
                    <div className="mt-2 space-y-2">
                      {Object.entries(selection.addons).filter(([, qty]) => qty > 0).map(([name, qty]) => (
                        <div key={name} className="flex justify-between items-center">
                          <span className="text-[0.75rem] text-gray-400">{name} x{qty}</span>
                          <span className="text-[0.75rem] text-gray-400">
                            {(() => {
                              const addon = addOns.find(a => a.name === name);
                              if (!addon) return '';
                              const range = parsePriceRange(addon.price);
                              if (!range) return 'Quote';
                              return `PKR ${formatNum(range.min * qty)} – ${formatNum(range.max * qty)}`;
                            })()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-2">
                  <span className="text-[0.72rem] text-gray-500 uppercase tracking-wider">Estimated Total</span>
                  <div className="mt-2">
                    {selectedPkg.priceType === 'quote' ? (
                      <span className="text-xl font-bold text-amber-400">Quote Based</span>
                    ) : (
                      <div>
                        <span className="text-xl font-bold text-white">
                          PKR {formatNum(total.min)} – {formatNum(total.max)}
                        </span>
                        {selectedPkg.priceType === 'monthly' && (
                          <span className="text-[0.72rem] text-gray-500 block">/month</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {selectedPkg.priceType === 'quote' && (
                  <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <p className="text-[0.72rem] text-amber-300/80">
                      Custom pricing requires a requirement analysis call. Schedule one to get an exact quote.
                    </p>
                  </div>
                )}

                <div className="flex gap-2 pt-2">
                  <Link
                    href="/contact"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white text-[0.82rem] font-medium shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all"
                  >
                    Get Started
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={reset}
                    className="px-3 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-gray-400 hover:bg-white/[0.08] transition-all"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mx-auto mb-3">
                  <Calculator className="w-5 h-5 text-gray-600" />
                </div>
                <p className="text-[0.82rem] text-gray-500">Select a package to see your estimate</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

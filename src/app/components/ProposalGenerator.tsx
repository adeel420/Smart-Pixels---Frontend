'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Download, Copy, Check, User, Building2, Mail, Phone } from 'lucide-react';
import { packages, addOns } from '../data/packagesData';

const EASE = [0.22, 1, 0.36, 1] as const;

interface ClientInfo {
  name: string;
  business: string;
  email: string;
  phone: string;
  industry: string;
  budget: string;
  goals: string;
}

interface ProposalData {
  client: ClientInfo;
  selectedPackages: string[];
  selectedAddons: string[];
  notes: string;
}

function generateProposal(data: ProposalData): string {
  const today = new Date().toLocaleDateString('en-PK', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const selectedPkgData = packages.filter(p => data.selectedPackages.includes(p.id));
  const selectedAddonData = addOns.filter(a => data.selectedAddons.includes(a.name));

  let proposal = `SMART PIXELS SOLUTION
Digital Services Proposal

Date: ${today}
Prepared for: ${data.client.name}
Business: ${data.client.business}
${data.client.email ? `Email: ${data.client.email}` : ''}
${data.client.phone ? `Phone: ${data.client.phone}` : ''}
${data.client.industry ? `Industry: ${data.client.industry}` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EXECUTIVE SUMMARY

${data.client.business} is looking to ${data.client.goals || 'establish a strong digital presence and grow their online reach'}. Smart Pixels Solution proposes the following packages to achieve these objectives.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

RECOMMENDED PACKAGES
`;

  selectedPkgData.forEach((pkg, i) => {
    proposal += `
${i + 1}. ${pkg.name.toUpperCase()} — ${pkg.tagline}
   Price: PKR ${pkg.price} (${pkg.priceUnit})
   Best for: ${pkg.bestFor}

   What's included:
${pkg.features.map(f => `   ✓ ${f}`).join('\n')}
`;
  });

  if (selectedAddonData.length > 0) {
    proposal += `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ADD-ON SERVICES
`;
    selectedAddonData.forEach(addon => {
      proposal += `
   • ${addon.name} — PKR ${addon.price}
`;
    });
  }

  proposal += `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${data.notes ? `NOTES\n${data.notes}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` : ''}NEXT STEPS

1. Review the proposed packages and add-ons
2. Schedule a call to discuss any questions
3. Confirm the selected packages
4. We begin work upon agreement and initial payment

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ABOUT SMART PIXELS SOLUTION

Smart Pixels Solution is a Lahore-based digital agency specializing in web development, branding, digital marketing, and business automation. We help businesses establish and grow their online presence with modern, performance-driven solutions.

Contact: +92 328 783 1517
Email: Archlinktechnology@gmail.com

Thank you for considering Smart Pixels Solution.
We look forward to working with you!`;

  return proposal;
}

export default function ProposalGenerator() {
  const [client, setClient] = useState<ClientInfo>({
    name: '',
    business: '',
    email: '',
    phone: '',
    industry: '',
    budget: '',
    goals: '',
  });
  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [notes, setNotes] = useState('');
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);
  const [proposalText, setProposalText] = useState('');

  const togglePackage = (id: string) => {
    setSelectedPackages(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const toggleAddon = (name: string) => {
    setSelectedAddons(prev =>
      prev.includes(name) ? prev.filter(a => a !== name) : [...prev, name]
    );
  };

  const handleGenerate = () => {
    const text = generateProposal({
      client,
      selectedPackages,
      selectedAddons,
      notes,
    });
    setProposalText(text);
    setGenerated(true);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(proposalText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([proposalText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SmartPixels_Proposal_${client.business || 'Client'}_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white/85 text-[0.85rem] placeholder-gray-600 focus:outline-none focus:border-blue-500/40 focus:bg-white/[0.05] transition-all";

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
          <FileText className="w-4 h-4 text-blue-400" />
          <span className="text-[0.75rem] font-medium text-blue-400">Proposal Builder</span>
        </div>
        <h2 className="text-2xl font-bold text-white/90 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
          Generate a Client Proposal
        </h2>
        <p className="text-[0.85rem] text-gray-500 max-w-xl mx-auto">
          Fill in the client details, select packages, and generate a professional proposal instantly.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Form */}
        <div className="space-y-5">
          {/* Client Info */}
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <h3 className="text-[0.85rem] font-semibold text-white/80 mb-4 flex items-center gap-2">
              <User className="w-4 h-4 text-blue-400" />
              Client Information
            </h3>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Client Name"
                  value={client.name}
                  onChange={e => setClient({ ...client, name: e.target.value })}
                  className={inputClass}
                />
                <input
                  type="text"
                  placeholder="Business Name"
                  value={client.business}
                  onChange={e => setClient({ ...client, business: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="email"
                  placeholder="Email (optional)"
                  value={client.email}
                  onChange={e => setClient({ ...client, email: e.target.value })}
                  className={inputClass}
                />
                <input
                  type="tel"
                  placeholder="Phone (optional)"
                  value={client.phone}
                  onChange={e => setClient({ ...client, phone: e.target.value })}
                  className={inputClass}
                />
              </div>
              <input
                type="text"
                placeholder="Industry (e.g., Restaurant, Clinic, Real Estate)"
                value={client.industry}
                onChange={e => setClient({ ...client, industry: e.target.value })}
                className={inputClass}
              />
              <input
                type="text"
                placeholder="Budget Range (optional)"
                value={client.budget}
                onChange={e => setClient({ ...client, budget: e.target.value })}
                className={inputClass}
              />
              <textarea
                placeholder="Client Goals / Requirements..."
                value={client.goals}
                onChange={e => setClient({ ...client, goals: e.target.value })}
                rows={3}
                className={`${inputClass} resize-none`}
              />
            </div>
          </div>

          {/* Package Selection */}
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <h3 className="text-[0.85rem] font-semibold text-white/80 mb-4">Select Packages</h3>
            <div className="space-y-2">
              {packages.map((pkg) => {
                const Icon = pkg.icon;
                const isSelected = selectedPackages.includes(pkg.id);
                return (
                  <button
                    key={pkg.id}
                    onClick={() => togglePackage(pkg.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-300 ${
                      isSelected
                        ? 'bg-blue-500/15 border border-blue-500/30'
                        : 'bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.03]'
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-blue-300' : 'text-gray-500'}`} />
                    <span className={`text-[0.82rem] ${isSelected ? 'text-white' : 'text-white/60'}`}>{pkg.name}</span>
                    <span className="text-[0.7rem] text-gray-500 ml-auto">PKR {pkg.price}</span>
                    <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                      isSelected ? 'bg-blue-500 border-blue-500' : 'border-white/20'
                    }`}>
                      {isSelected && <Check className="w-2.5 h-2.5 text-white" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Add-on Selection */}
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <h3 className="text-[0.85rem] font-semibold text-white/80 mb-4">Select Add-ons (optional)</h3>
            <div className="flex flex-wrap gap-2">
              {addOns.map((addon) => {
                const isSelected = selectedAddons.includes(addon.name);
                return (
                  <button
                    key={addon.name}
                    onClick={() => toggleAddon(addon.name)}
                    className={`px-3 py-1.5 rounded-lg text-[0.75rem] transition-all duration-300 ${
                      isSelected
                        ? 'bg-blue-500/20 border border-blue-500/30 text-blue-300'
                        : 'bg-white/[0.02] border border-white/[0.04] text-gray-400 hover:bg-white/[0.04]'
                    }`}
                  >
                    {addon.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Notes */}
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <h3 className="text-[0.85rem] font-semibold text-white/80 mb-4">Additional Notes (optional)</h3>
            <textarea
              placeholder="Any special terms, discounts, or notes..."
              value={notes}
              onChange={e => setNotes(e.target.value)}
              rows={3}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={!client.name || !client.business || selectedPackages.length === 0}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <FileText className="w-4 h-4" />
            Generate Proposal
          </button>
        </div>

        {/* Preview */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          {generated ? (
            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[0.85rem] font-semibold text-white/80">Proposal Preview</h3>
                <div className="flex gap-2">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[0.75rem] text-gray-400 hover:bg-white/[0.08] transition-all"
                  >
                    {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                  <button
                    onClick={handleDownload}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/20 border border-blue-500/30 text-[0.75rem] text-blue-300 hover:bg-blue-600/30 transition-all"
                  >
                    <Download className="w-3 h-3" />
                    Download
                  </button>
                </div>
              </div>
              <pre className="whitespace-pre-wrap text-[0.75rem] text-gray-400/80 leading-relaxed font-[var(--font-body)] max-h-[600px] overflow-y-auto scrollbar-none p-4 rounded-xl bg-white/[0.01] border border-white/[0.03]">
                {proposalText}
              </pre>
            </div>
          ) : (
            <div className="p-10 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
              <div className="w-14 h-14 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-gray-600" />
              </div>
              <p className="text-[0.85rem] text-gray-500 mb-2">Fill in the form and generate your proposal</p>
              <p className="text-[0.72rem] text-gray-600">The preview will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

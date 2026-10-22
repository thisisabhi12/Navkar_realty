import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  BadgeIndianRupee, 
  Percent, 
  Clock, 
  ArrowRight, 
  Building, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function EmiCalculator({ onOpenConsultation }) {
  const [propertyPrice, setPropertyPrice] = useState(7500000); // 75 Lakhs default
  const [downPaymentPercent, setDownPaymentPercent] = useState(20); // 20%
  const [interestRate, setInterestRate] = useState(8.5); // 8.5% p.a.
  const [tenureYears, setTenureYears] = useState(20); // 20 years

  // Format INR currency
  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const { loanAmount, downPaymentAmount, monthlyEmi, totalInterest, totalPayment } = useMemo(() => {
    const downPayment = (propertyPrice * downPaymentPercent) / 100;
    const principal = propertyPrice - downPayment;
    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = tenureYears * 12;

    let emi = 0;
    if (monthlyRate > 0) {
      emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
    } else {
      emi = principal / totalMonths;
    }

    const totalPay = emi * totalMonths;
    const totInterest = totalPay - principal;

    return {
      loanAmount: principal,
      downPaymentAmount: downPayment,
      monthlyEmi: Math.round(emi),
      totalInterest: Math.round(totInterest),
      totalPayment: Math.round(totalPay)
    };
  }, [propertyPrice, downPaymentPercent, interestRate, tenureYears]);

  const principalPercent = totalPayment > 0 ? Math.round((loanAmount / totalPayment) * 100) : 50;
  const interestPercent = 100 - principalPercent;

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1 text-xs font-bold text-brand-800">
            <Calculator className="w-3.5 h-3.5 text-brand-700" />
            <span>Financial Planning Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202923] tracking-tight font-display">
            Vadodara Home Loan EMI Estimator
          </h2>
          <p className="text-base text-[#66716A]">
            Plan your purchase with precision. Navkar Realty partners directly with leading nationalized & private banks in Vadodara (SBI, HDFC, ICICI, Bank of Baroda) for swift loan sanctions.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="bg-[#F0F6F0] rounded-3xl p-6 sm:p-10 shadow-luxury border border-[#DCE5DD] max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Sliders Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Property Price Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-bold text-[#202923]">
                <span>Property Value</span>
                <span className="text-base sm:text-lg font-black text-brand-700 font-display">
                  {formatINR(propertyPrice)}
                </span>
              </div>
              <input
                type="range"
                min="1500000"
                max="30000000"
                step="250000"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full h-2.5 bg-[#DCE5DD] rounded-lg appearance-none cursor-pointer accent-brand-700"
              />
              <div className="flex justify-between text-[11px] text-[#66716A] font-medium">
                <span>₹15 Lakhs</span>
                <span>₹1.5 Crore</span>
                <span>₹3 Crore</span>
              </div>
            </div>

            {/* Down Payment % Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-bold text-[#202923]">
                <span>Down Payment ({downPaymentPercent}%)</span>
                <span className="text-sm font-bold text-[#202923]">
                  {formatINR(downPaymentAmount)}
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="50"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-2.5 bg-[#DCE5DD] rounded-lg appearance-none cursor-pointer accent-brand-700"
              />
              <div className="flex justify-between text-[11px] text-[#66716A] font-medium">
                <span>10% (Min)</span>
                <span>20% (Recommended)</span>
                <span>50%</span>
              </div>
            </div>

            {/* Interest Rate & Tenure */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              {/* Interest Rate */}
              <div className="space-y-2 bg-white p-4 rounded-2xl border border-[#DCE5DD]">
                <div className="flex justify-between items-center text-xs font-bold text-[#202923]">
                  <span>Interest Rate</span>
                  <span className="text-sm font-black text-brand-700">{interestRate}% p.a.</span>
                </div>
                <input
                  type="range"
                  min="7.0"
                  max="12.0"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-[#DCE5DD] rounded-lg appearance-none cursor-pointer accent-brand-700"
                />
                <span className="text-[10px] text-[#66716A] block">Bank Repo Linked Rate</span>
              </div>

              {/* Tenure Years */}
              <div className="space-y-2 bg-white p-4 rounded-2xl border border-[#DCE5DD]">
                <div className="flex justify-between items-center text-xs font-bold text-[#202923]">
                  <span>Loan Tenure</span>
                  <span className="text-sm font-black text-brand-700">{tenureYears} Years</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full h-2 bg-[#DCE5DD] rounded-lg appearance-none cursor-pointer accent-brand-700"
                />
                <span className="text-[10px] text-[#66716A] block">{tenureYears * 12} Monthly installments</span>
              </div>

            </div>

          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-brand-800 via-brand-900 to-brand-950 text-white rounded-2xl p-6 sm:p-7 shadow-xl flex flex-col justify-between space-y-6">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#DCEBDD] block">
                Estimated Monthly Repayment
              </span>
              <p className="text-3xl sm:text-4xl font-black text-white font-display mt-1">
                {formatINR(monthlyEmi)} <span className="text-sm font-normal text-brand-200">/ mo</span>
              </p>
              <p className="text-xs text-slate-200 mt-1">
                For a Net Principal Loan Amount of <strong className="text-white">{formatINR(loanAmount)}</strong>
              </p>
            </div>

            {/* Visual Ratio Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-slate-200 font-semibold">
                <span>Principal ({principalPercent}%)</span>
                <span>Interest ({interestPercent}%)</span>
              </div>
              <div className="h-3 w-full bg-black/40 rounded-full overflow-hidden flex">
                <div 
                  className="bg-brand-400 h-full transition-all duration-300" 
                  style={{ width: `${principalPercent}%` }} 
                />
                <div 
                  className="bg-amber-400 h-full transition-all duration-300" 
                  style={{ width: `${interestPercent}%` }} 
                />
              </div>
            </div>

            {/* Numerical breakdown */}
            <div className="space-y-2 text-xs border-t border-white/15 pt-4">
              <div className="flex justify-between text-slate-200">
                <span>Total Interest Payable:</span>
                <span className="font-bold text-amber-300">{formatINR(totalInterest)}</span>
              </div>
              <div className="flex justify-between text-slate-200">
                <span>Total Amount (P + I):</span>
                <span className="font-bold text-white">{formatINR(totalPayment)}</span>
              </div>
            </div>

            {/* Assistance Button */}
            <button
              type="button"
              onClick={onOpenConsultation}
              className="w-full bg-white hover:bg-brand-50 text-brand-950 font-extrabold py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 text-xs sm:text-sm group"
            >
              <Sparkles className="w-4 h-4 text-brand-700" />
              <span>Get Loan Pre-Approval Assistance</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-brand-700" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

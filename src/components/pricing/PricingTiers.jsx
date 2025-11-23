import React from 'react';

const PricingTiers = () => {
  const tiers = [
    {
      name: 'Single School',
      price: '£499',
      period: 'per year',
      description: 'Perfect for individual primary schools',
      features: [
        'Up to 100 students',
        'All 21 missions',
        '7 career zones',
        'Teacher dashboard',
        'Progress reports (CSV/PDF)',
        'Email support',
        'Parent portal access',
        'Quarterly updates'
      ],
      popular: false,
      color: 'from-wl-teal to-wl-teal-dark'
    },
    {
      name: 'Multi-Academy Trust',
      price: '£1,999',
      period: 'per year',
      description: 'Ideal for academy trusts and school groups',
      features: [
        'Up to 500 students',
        'All 21 missions',
        '7 career zones',
        'Multi-school dashboard',
        'Advanced analytics',
        'Priority email support',
        'Parent portal access',
        'Custom branding',
        'Dedicated account manager',
        'Monthly updates'
      ],
      popular: true,
      color: 'from-wl-purple to-wl-purple-dark'
    },
    {
      name: 'Local Authority',
      price: 'Custom',
      period: 'contact us',
      description: 'Comprehensive solution for local authorities',
      features: [
        'Unlimited students',
        'All 21 missions',
        '7 career zones',
        'Authority-wide dashboard',
        'Custom reporting',
        'Dedicated support line',
        'Parent portal access',
        'White-label options',
        'Training for staff',
        'API access',
        'Custom integrations'
      ],
      popular: false,
      color: 'from-wl-yellow to-wl-yellow-dark'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl border-4 ${
                tier.popular ? 'border-wl-purple' : 'border-gray-200'
              } overflow-hidden transform hover:-translate-y-2 transition-all duration-300`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-wl-purple text-white px-6 py-2 text-sm font-bold rounded-bl-xl">
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div className={`bg-gradient-to-br ${tier.color} p-8 text-white text-center`}>
                <h3 className="text-2xl font-display font-bold mb-2">{tier.name}</h3>
                <p className="text-white/80 text-sm mb-4">{tier.description}</p>
                <div className="text-5xl font-bold mb-2">{tier.price}</div>
                <div className="text-white/80">{tier.period}</div>
              </div>

              {/* Features */}
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full bg-gradient-to-r ${tier.color} text-white font-bold py-4 px-6 rounded-xl transition duration-300 transform hover:scale-105 shadow-lg`}>
                  {tier.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            All plans include a 30-day free trial. No credit card required.
          </p>
          <p className="text-sm text-gray-500">
            Prices exclude VAT. Educational discounts available.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;
import React from 'react';

const TermsPage = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: 'By accessing and using WonderLeap, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our platform.'
    },
    {
      title: '2. User Accounts',
      content: 'Schools and teachers are responsible for creating and managing user accounts. You must provide accurate information and keep your password secure. You are responsible for all activities that occur under your account.'
    },
    {
      title: '3. Permitted Use',
      content: 'WonderLeap is designed for educational purposes in primary schools. Users must not use the platform for any unlawful purposes or in any way that could damage, disable, or impair the service.'
    },
    {
      title: '4. Intellectual Property',
      content: 'All content, including missions, graphics, text, and software, is owned by WonderLeap and protected by copyright laws. You may not copy, modify, or distribute our content without written permission.'
    },
    {
      title: '5. Subscription and Payment',
      content: 'Subscriptions are billed annually. Prices are subject to change with 30 days notice. Refunds are provided on a pro-rata basis if you cancel within the first 30 days.'
    },
    {
      title: '6. Data and Privacy',
      content: 'We collect and process data in accordance with our Privacy Policy and GDPR regulations. Schools and teachers are data controllers and must comply with applicable data protection laws.'
    },
    {
      title: '7. Termination',
      content: 'We reserve the right to suspend or terminate accounts that violate these terms. Upon termination, your right to use the platform will immediately cease.'
    },
    {
      title: '8. Limitation of Liability',
      content: 'WonderLeap is provided "as is" without warranties. We are not liable for any indirect, incidental, or consequential damages arising from your use of the platform.'
    },
    {
      title: '9. Changes to Terms',
      content: 'We may modify these terms at any time. We will notify users of significant changes via email. Continued use of the platform after changes constitutes acceptance of the new terms.'
    },
    {
      title: '10. Governing Law',
      content: 'These terms are governed by the laws of England and Wales. Any disputes will be resolved in the courts of England and Wales.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-wl-teal to-wl-purple py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="text-6xl mb-6">📜</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Terms of Use
          </h1>
          <p className="text-lg text-white/90">
            Last updated: November 20, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8">
                Welcome to WonderLeap. These Terms of Use govern your access to and use of our platform. Please read them carefully.
              </p>

              <div className="space-y-8">
                {sections.map((section, index) => (
                  <div key={index}>
                    <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                      {section.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-wl-purple/10 rounded-xl border-2 border-wl-purple">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Questions About These Terms?
                </h3>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms of Use, please contact us:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>📧 Email: legal@wonderleap.co.uk</li>
                  <li>📞 Phone: +44 (0) 20 1234 5678</li>
                  <li>📍 Address: WonderLeap Ltd, London, United Kingdom</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
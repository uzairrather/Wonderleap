import React from 'react';

const PrivacyPage = () => {
  const sections = [
    {
      title: '1. Information We Collect',
      content: 'We collect information that you provide directly to us, including names, email addresses, and usage data. For students, we only collect the minimum necessary information required to provide our educational services.'
    },
    {
      title: '2. How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services, to process transactions, to send you technical notices and support messages, and to respond to your comments and questions.'
    },
    {
      title: '3. Data Protection',
      content: 'WonderLeap is fully GDPR compliant. We implement appropriate technical and organizational measures to protect personal data against unauthorized or unlawful processing and against accidental loss, destruction, or damage.'
    },
    {
      title: '4. Children\'s Privacy',
      content: 'We take children\'s privacy seriously. We do not knowingly collect personal information from children under 13 without parental consent. Parents and teachers have full control over student data and can request deletion at any time.'
    },
    {
      title: '5. Data Sharing',
      content: 'We do not sell, trade, or rent personal information to third parties. We may share information with service providers who assist us in operating our platform, subject to strict confidentiality agreements.'
    },
    {
      title: '6. Your Rights',
      content: 'You have the right to access, correct, or delete your personal data. You can also object to processing, request data portability, and withdraw consent at any time. Contact us to exercise these rights.'
    },
    {
      title: '7. Data Retention',
      content: 'We retain personal data only for as long as necessary to provide our services and comply with legal obligations. Student data is deleted within 90 days of account closure unless otherwise required by law.'
    },
    {
      title: '8. Cookies',
      content: 'We use cookies and similar technologies to provide functionality, analyze usage, and improve user experience. You can control cookie preferences through your browser settings.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-wl-purple to-wl-teal py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="text-6xl mb-6">🔒</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Privacy Policy
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
                At WonderLeap, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
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

              <div className="mt-12 p-6 bg-wl-teal/10 rounded-xl border-2 border-wl-teal">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Contact Us About Privacy
                </h3>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>📧 Email: privacy@wonderleap.co.uk</li>
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

export default PrivacyPage;
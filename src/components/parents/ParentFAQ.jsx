import React, { useState } from 'react';

const ParentFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I access my child\'s progress?',
      answer: 'You can access your child\'s progress through the parent portal using your unique parent login. Simply ask your child\'s teacher for access credentials, or sign up using your child\'s student ID.'
    },
    {
      question: 'Is WonderLeap safe for my child?',
      answer: 'Yes! WonderLeap is fully GDPR compliant with strict privacy controls. All content is age-appropriate, moderated, and designed specifically for primary school children. No personal data is shared with third parties.'
    },
    {
      question: 'Can I see what missions my child is playing?',
      answer: 'Absolutely! The parent dashboard shows you exactly which missions your child has completed, when they played, how long they spent, and what skills they developed in each mission.'
    },
    {
      question: 'Does WonderLeap replace homework?',
      answer: 'WonderLeap complements your child\'s education rather than replacing traditional homework. It\'s designed to support careers education as part of the national curriculum and can be used both in school and at home.'
    },
    {
      question: 'Can my child play at home?',
      answer: 'Yes! If your child\'s school has a WonderLeap license, students can access missions from home using their school login credentials. This allows them to continue exploring careers outside of classroom time.'
    },
    {
      question: 'How can I support my child\'s learning?',
      answer: 'Use the parent dashboard to see which careers your child is exploring, discuss their favorite missions with them, celebrate their achievements, and encourage them to try different career zones to broaden their horizons.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Parent FAQs
            </h2>
            <p className="text-xl text-gray-600">
              Common questions from parents like you
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border-2 border-gray-200 hover:border-wl-teal transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition"
                >
                  <span className="font-display font-bold text-lg text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-wl-purple transform transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="mt-12 text-center bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-gray-600 mb-4 text-lg">
              Have more questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                📧 Email Support
              </button>
              <button className="btn-outline">
                💬 Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentFAQ;
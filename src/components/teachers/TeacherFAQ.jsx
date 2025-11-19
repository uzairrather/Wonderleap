import React, { useState } from 'react';

const TeacherFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How long does it take to set up WonderLeap for my class?',
      answer: 'Setup takes just 5-10 minutes! Simply create your account, add your students, and start assigning missions. Our intuitive interface means no training is required.'
    },
    {
      question: 'Can I track individual student progress?',
      answer: 'Yes! You can view detailed analytics for each student, including missions completed, time spent, skills developed, and achievement badges earned. Reports can be downloaded as CSV or PDF.'
    },
    {
      question: 'Are the missions curriculum-aligned?',
      answer: 'Absolutely. All WonderLeap missions align with national curriculum standards for careers education and meet Gatsby Benchmark requirements for primary schools.'
    },
    {
      question: 'How much class time do missions take?',
      answer: 'Each mission takes approximately 15-30 minutes. They\'re perfect for dedicated careers lessons, computing time, or as engaging homework activities.'
    },
    {
      question: 'What support is available for teachers?',
      answer: 'We provide comprehensive onboarding, video tutorials, lesson plans, and dedicated email support. Plus, our teacher community forum lets you share best practices with other educators.'
    },
    {
      question: 'Can parents see their child\'s progress?',
      answer: 'Yes! Parents can access their child\'s progress through a dedicated parent portal, viewing completed missions, skills developed, and achievements earned.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Got questions? We've got answers!
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-wl-teal transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition"
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
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Still have questions? We're here to help!
            </p>
            <button className="btn-primary">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherFAQ;
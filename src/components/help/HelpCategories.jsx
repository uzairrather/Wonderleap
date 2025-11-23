import React from 'react';

const HelpCategories = () => {
  const categories = [
    {
      icon: '👩‍🏫',
      title: 'For Teachers',
      articles: [
        'How to create a class',
        'Assigning missions to students',
        'Viewing student progress',
        'Downloading reports',
        'Managing class codes'
      ],
      color: 'from-wl-teal to-wl-teal-dark'
    },
    {
      icon: '🎓',
      title: 'For Students',
      articles: [
        'How to join a class',
        'Playing missions',
        'Earning badges',
        'Viewing your progress',
        'Troubleshooting issues'
      ],
      color: 'from-wl-purple to-wl-purple-dark'
    },
    {
      icon: '👨‍👩‍👧',
      title: 'For Parents',
      articles: [
        'Accessing the parent portal',
        'Viewing your child\'s progress',
        'Understanding skill reports',
        'Privacy and safety',
        'Contact your child\'s teacher'
      ],
      color: 'from-wl-yellow to-wl-yellow-dark'
    },
    {
      icon: '⚙️',
      title: 'Technical Support',
      articles: [
        'Browser compatibility',
        'Login issues',
        'Password reset',
        'Audio/video problems',
        'Contact support'
      ],
      color: 'from-blue-500 to-blue-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-xl text-gray-600">
            Find answers organized by your role
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${category.color} p-6 flex items-center`}>
                <span className="text-5xl mr-4">{category.icon}</span>
                <h3 className="text-2xl font-display font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="p-6">
                <ul className="space-y-3">
                  {category.articles.map((article, idx) => (
                    <li key={idx}>
                      
                       <a href="#"
                        className="flex items-center text-gray-700 hover:text-wl-purple transition group"
                      >
                        <svg className="w-5 h-5 mr-3 text-wl-teal group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16 bg-gradient-to-r from-wl-purple to-wl-teal rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-display font-bold mb-4">
            Still Need Help?
          </h3>
          <p className="text-xl mb-8">
            Our support team is here to help you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-wl-purple hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition">
              📧 Email Support
            </button>
            <button className="bg-white/20 border-2 border-white text-white hover:bg-white hover:text-wl-purple font-bold py-3 px-8 rounded-lg transition">
              💬 Live Chat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpCategories;
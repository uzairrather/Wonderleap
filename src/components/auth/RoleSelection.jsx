import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoleSelection = () => {
  const navigate = useNavigate();

  const roles = [
    { 
      value: 'teacher', 
      label: 'Teacher', 
      icon: '👩‍🏫', 
      description: 'Manage classes and track student progress',
      color: 'from-wl-teal to-wl-teal-dark',
      path: '/signup?role=teacher'
    },
    { 
      value: 'student', 
      label: 'Student', 
      icon: '🎓', 
      description: 'Play missions and explore career zones',
      color: 'from-wl-purple to-wl-purple-dark',
      path: '/signup?role=student'
    },
    { 
      value: 'parent', 
      label: 'Parent', 
      icon: '👨‍👩‍👧', 
      description: 'Monitor your child\'s learning journey',
      color: 'from-wl-yellow to-wl-yellow-dark',
      path: '/signup?role=parent'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {roles.map((role) => (
        <button
          key={role.value}
          onClick={() => navigate(role.path)}
          className="group relative bg-white border-4 border-gray-200 rounded-2xl p-8 hover:border-wl-purple transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
          
          <div className="relative text-center">
            <div className="text-6xl mb-4">{role.icon}</div>
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
              {role.label}
            </h3>
            <p className="text-gray-600 mb-4">
              {role.description}
            </p>
            <div className="text-wl-purple font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center">
              Select
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default RoleSelection;
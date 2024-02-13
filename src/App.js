import React from 'react';
import UserProfile from './UserProfile';

const App = () => {
  const profileData = {
    name: 'John Doe',
    qualification: 'Bachelor of Science in Computer Science',
    skills: ['JavaScript', 'React', 'HTML', 'CSS'],
    interests: ['Web Development', 'Machine Learning', 'Data Science'],
    achievements: ['First place in Hackathon X', 'Published paper on AI'],
    email: 'john.doe@example.com',
    contact: '123-456-7890',
  };

  return (
    <div>
      <UserProfile {...profileData} />
    </div>
  );
};

export default App;


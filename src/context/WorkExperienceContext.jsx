import React, { createContext, useContext } from 'react';

// Create the context
const WorkExperienceContext = createContext();

// Create a provider component
export const WorkExperienceProvider = ({ children, experiences }) => {
  return (
    <WorkExperienceContext.Provider value={experiences}>
      {children}
    </WorkExperienceContext.Provider>
  );
};

// Create a custom hook to use the context
export const useWorkExperiences = () => {
  const context = useContext(WorkExperienceContext);
  if (context === undefined) {
    throw new Error('useWorkExperiences must be used within a WorkExperienceProvider');
  }
  return context;
};
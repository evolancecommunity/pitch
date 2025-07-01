import React from 'react';
import Hero, { MongoDBAccelerator } from './components/Hero';
import Problem from './components/Problem';
import Research from './components/Research';
import Solution from './components/Solution';
import Team from './components/Team';
import Funding from './components/Funding';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <MongoDBAccelerator />
      <Problem />
      <Research />
      <Solution />
      <Team />
      <Funding />
      <CTA />
    </div>
  );
}

export default App;
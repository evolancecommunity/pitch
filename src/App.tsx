import React from 'react';
import Hero, { MongoDBAccelerator } from './components/Hero';
import Emolytics from './components/Emolytics';
import Problem from './components/Problem';
import Research from './components/Research';
import Solution from './components/Solution';
import Team from './components/Team';
import Funding from './components/Funding';
import CTA from './components/CTA';
import HowWeAreDifferent from './components/HowWeAreDifferent';
import WhyNow from './components/WhyNow';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Emolytics />
      <Research />
      <HowWeAreDifferent />
      <WhyNow />
      <Team />
      <Funding />
      <CTA />
    </div>
  );
}

export default App;
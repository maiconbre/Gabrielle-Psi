import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
const About = lazy(() => import('./components/About'));
const Research = lazy(() => import('./components/Research'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div>Carregando...</div>}>
          <About />
          <Research />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
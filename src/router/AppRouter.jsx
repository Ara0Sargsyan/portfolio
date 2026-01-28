import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../shared/layout/layout/Layout'; 
import Home from '../features/home/Home';

const About = lazy(() => import('../features/about/About'));
const Contact = lazy(() => import('../features/contact/Contact'));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
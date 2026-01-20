import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../shared/layout/layout/Layout'; 
import Home from '../features/home/Home';
import About from '../features/about/About';
import Projects from '../features/projects/Projects';
import Contact from '../features/contact/Contact';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
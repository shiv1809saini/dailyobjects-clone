import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import ProductGrid from './components/ProductGrid';
import FeaturedIn from './components/FeaturedIn';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <CategoryGrid />
      <ProductGrid />
      <FeaturedIn />
      <Footer />
    </div>
  );
}

export default App;

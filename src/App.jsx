import { useEffect, useRef, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero';
import Header from './components/Header';
import How from './components/How';
import FeaturedIn from './components/FeaturedIn';
import Meals from './components/Meals';
import Testimonial from './components/Testimonial';
import Price from './components/Price';
import Subscription from './components/Subscription';
import Footer from './components/Footer';

function App() {
  const [headerFloat, setHeaderFloat] = useState(false);
  const refFeaturedIn = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeaderFloat(!entry.isIntersecting);
      },
    );
    observer.observe(refFeaturedIn.current);
    return () => observer.disconnect();
  }, []);

  return (
    <BrowserRouter>
      <Header headerFloat={headerFloat} />
      <main>
        {/* <div ref={refFeaturedIn}><Hero /></div> */}
        <Hero innerRef={refFeaturedIn} />
        <FeaturedIn />
        <How />
        <Meals />
        <Testimonial />
        <Price />
        <Subscription />
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;

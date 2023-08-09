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
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedIn />
        <How />
        <Meals />
        <Testimonial />
        <Price />
        <Subscription />
        <Footer />
      </main>
    </>
  );
}

export default App;

import Hero from './components/Hero';
import Header from './components/Header';
import How from './components/How';
import FeaturedIn from './components/FeaturedIn';
import Meals from './components/Meals';
import Testimonial from './components/Testimonial';
import Price from './components/Price';

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
      </main>
    </>
  );
}

export default App;

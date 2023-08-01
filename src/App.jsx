import Hero from './components/Hero';
import Header from './components/Header';
import How from './components/How';
import FeaturedIn from './components/FeaturedIn';
import Meals from './components/Meals';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedIn />
        <How />
        <Meals />
      </main>
    </>
  );
}

export default App;

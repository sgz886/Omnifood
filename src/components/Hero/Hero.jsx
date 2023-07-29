import styled from 'styled-components';
import hero from '../../assets/img/hero.png';
import c1 from '../../assets/img/customers/customer-1.jpg';
import c2 from '../../assets/img/customers/customer-2.jpg';
import c3 from '../../assets/img/customers/customer-3.jpg';
import c4 from '../../assets/img/customers/customer-4.jpg';
import c5 from '../../assets/img/customers/customer-5.jpg';
import c6 from '../../assets/img/customers/customer-6.jpg';

const Section = styled.section`
  background-color: var(--color-main-tint);
  padding: 6rem 0;
`;
const Container = styled.div`
  max-width: 81rem;
  margin: 0 auto;
  display: grid;
  gap: 6rem;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;
const Image = styled.img`
  width: 100%;
`;
const H1 = styled.h1`
  font-size: 3.25rem;
  font-weight: 700;
  line-height: var(--line-height-small);
  color: var(--color-grey-normal);
  letter-spacing: -0.5px;
  margin-bottom: 2rem;
`;
const P = styled.p`
  font-size: 1.25rem;
  line-height: var(--line-height-paragraph);
  margin-bottom: 3rem;
`;
const Button = styled.a`
  background-color: ${(props) => (props.$white
    ? 'var(--color-background-normal)'
    : 'var(--color-main-normal)')};
  color: ${(props) => (props.$white ? '#555' : '#fff')};

  font-size: 1.25rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 9px;
  transition: all 0.3s;
  &:hover,
  &:active {
    background-color: ${(props) => (props.$white
    ? 'var(--color-background-tint)'
    : 'var(--color-main-shade)')};
    box-shadow: ${(props) => (props.$white ? 'inset 0 0 0 3px #fff' : 'none')};
  }
`;
const Image2 = styled.img`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  margin-right: -1rem;
  border: 3px solid var(--color-main-tint);
  &:last-child {
    margin-right: 0;
  }
`;
function Hero() {
  return (
    <Section>
      <Container>
        <div>
          <H1>A healthy meal delivered to your door, every single day</H1>
          <P>
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </P>
          <Button href='/' className='mr-7'>
            Start eating well
          </Button>
          <Button $white href='/'>
            Learn more &darr;
          </Button>
          <div className='flex items-center gap-4 mt-20'>
            <div className='flex'>
              <Image2 src={c1} alt='customer' />
              <Image2 src={c2} alt='customer' />
              <Image2 src={c3} alt='customer' />
              <Image2 src={c4} alt='customer' />
              <Image2 src={c5} alt='customer' />
              <Image2 src={c6} alt='customer' />
            </div>
            <p className='text-lg font-semibold'>
              <span className='font-bold text-orange-500'>250,000+</span>
              &nbsp;meals delivered last year!
            </p>
          </div>
        </div>
        <Image src={hero} alt='' />
      </Container>
    </Section>
  );
}

export default Hero;

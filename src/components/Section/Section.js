import Calculator from '../Calculator/Calculator';
import Details from '../Details/Details';
import './section.scss';

const Section = () => {
  return (
    <section className="section">
      <Details />
      <Calculator />
    </section>
  );
};

export default Section;

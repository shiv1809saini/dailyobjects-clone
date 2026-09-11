import './FeaturedIn.css';

const PRESS = ['FORBES', 'VOGUE', 'YOURSTORY', 'ECONOMIC TIMES', 'ELLE'];

function FeaturedIn() {
  return (
    <section className="featured-in">
      <div className="container">
        <h2 className="section-title">Featured In</h2>
        <div className="featured-in__logos">
          {PRESS.map((name) => (
            <span key={name} className="featured-in__logo">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedIn;

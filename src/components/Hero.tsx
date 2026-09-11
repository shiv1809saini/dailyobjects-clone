import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="hero__content">
        <p className="hero__eyebrow">STACK CLEAR PHONE CASE</p>
        <h1 className="hero__title">
          Clearly Playful,
          <br />
          Clearly Stack
        </h1>
        <button className="hero__cta">SHOP NOW</button>
      </div>
    </section>
  );
}

export default Hero;

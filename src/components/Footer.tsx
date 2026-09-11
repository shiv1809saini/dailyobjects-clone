import './Footer.css';

const FOOTER_COLUMNS = [
  {
    title: 'KNOW US',
    links: ['About Us', 'Corporate Gifting', 'Store Locator', 'Blog', 'Careers'],
  },
  {
    title: 'HELP DESK',
    links: ['Contact Us', 'FAQs', 'Track Order', 'Shipping Policy', 'Terms & Conditions', 'Privacy Policy'],
  },
  {
    title: 'MOST SEARCHED',
    links: [
      'iPhone 15 Series Cases',
      'iPhone 14 Series Cases',
      'Samsung Galaxy S24 Cases',
      'MacBook Sleeves',
      'AirPods Cases',
    ],
  },
  {
    title: 'GIFTING',
    links: ['Gifts for Him', 'Gifts for Her', 'Gifts Under ₹999', 'Anniversary Gifts', 'Birthday Gifts'],
  },
];

const SOCIALS = ['Instagram', 'Facebook', 'YouTube', 'Twitter', 'Pinterest', 'LinkedIn'];

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__columns">
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title} className="footer__column">
            <h3>{col.title}</h3>
            <ul>
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container footer__bottom">
        <div className="footer__socials">
          {SOCIALS.map((s) => (
            <a href="#" key={s} className="footer__social-link">
              {s}
            </a>
          ))}
        </div>
        <p className="footer__copyright">
          © {new Date().getFullYear()} dailyobjects clone — built for demo purposes.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

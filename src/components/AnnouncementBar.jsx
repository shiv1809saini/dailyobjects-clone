import './AnnouncementBar.css';

const MESSAGES = [
  'FREE SHIPPING ON ALL PREPAID ORDERS',
  'FLAT 20% OFF ON YOUR FIRST ORDER',
  'EASY 15 DAYS RETURN & EXCHANGE',
];

function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="container announcement-bar__inner">
        {MESSAGES.map((msg) => (
          <span key={msg} className="announcement-bar__item">
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
}

export default AnnouncementBar;

import './CategoryGrid.css';

const CATEGORIES = [
  { name: 'Phone Cases', emoji: '📱', color: '#ffe8d6' },
  { name: 'Watch Bands', emoji: '⌚', color: '#dde7f2' },
  { name: 'Power Banks', emoji: '🔋', color: '#e4f2dd' },
  { name: 'Wireless Chargers', emoji: '🔌', color: '#f2dde9' },
];

function CategoryGrid() {
  return (
    <section className="category-grid container">
      <h2 className="section-title">Shop by Category</h2>
      <div className="category-grid__list">
        {CATEGORIES.map((cat) => (
          <a href="#" key={cat.name} className="category-card">
            <div className="category-card__image" style={{ backgroundColor: cat.color }}>
              <span>{cat.emoji}</span>
            </div>
            <p className="category-card__name">{cat.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default CategoryGrid;

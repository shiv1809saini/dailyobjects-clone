import './ProductGrid.css';

const PRODUCTS = [
  { name: 'Stack Clear Case for iPhone 15', price: '₹899', color: '#fdece3' },
  { name: 'Braided Nylon Watch Band', price: '₹1,299', color: '#e6eef7' },
  { name: '10000mAh Slim Power Bank', price: '₹1,999', color: '#eaf5e5' },
  { name: '3-in-1 Wireless Charging Pad', price: '₹2,499', color: '#f7e6ef' },
  { name: 'Vegan Leather Laptop Sleeve', price: '₹1,799', color: '#f2ecdf' },
  { name: 'MagSafe Compatible Card Holder', price: '₹1,099', color: '#e3f0f2' },
  { name: 'Everyday Sling Bag', price: '₹2,199', color: '#f5e8e3' },
  { name: 'Silicone Case for iPhone 15 Pro', price: '₹799', color: '#ece3f5' },
];

function ProductGrid() {
  return (
    <section className="product-grid container">
      <h2 className="section-title">Best Sellers</h2>
      <div className="product-grid__list">
        {PRODUCTS.map((product) => (
          <a href="#" key={product.name} className="product-card">
            <div className="product-card__image" style={{ backgroundColor: product.color }} />
            <p className="product-card__name">{product.name}</p>
            <p className="product-card__price">{product.price}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;

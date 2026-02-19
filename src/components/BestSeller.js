const BestSeller = ({ productData }) => {

  const { title, images, variants } = productData;

  return (
    <div className="dia-card">

      <img
        className="dia-logo"
        alt="diaper"
        src={images[0]?.src}
      />

      <h3>{title}</h3>

      <h4>₹ {variants[0]?.price}</h4>

      <button className="cart-btn">ADD TO CART</button>

    </div>
  );
};

export default BestSeller;

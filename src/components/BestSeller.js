import { CDN_URL, SRC_URL } from "../utils/constants";


const BestSeller = (props) => {
  const { resData } = props;

  const {
    src,
    title,
    price,
    
  } = resData?.products;

  return (
    <div className="dia-card">
      <img
        className="dia-logo"
        alt="dia-logo"
        src={
          SRC_URL+
          images.src
        }
      />
      <h3>{title}</h3>
      <h4>{price}</h4>
     
    </div>
  );
};
export default BestSeller;
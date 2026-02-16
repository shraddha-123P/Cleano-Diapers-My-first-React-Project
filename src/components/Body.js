import productList from "../utils/mockData";
import BestSeller from "./BestSeller";

const Body = () => {
  return (
    <div className="dia-container">
      {productList.products.map((product) => (
        <BestSeller key={product.id} resData={product} />
      ))}
    </div>
  );
};

export default Body;

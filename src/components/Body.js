import { useState } from "react";
import productList from "../utils/mockData";
import BestSeller from "./BestSeller";

const Body = () => {
  let [ListOfDia, setLisTOfDia] = useState(productList.products);
  return (
    <div className="body">
      <div className="filter">
      <button
      className="filter-btn" 
      onClick={()=> {
          const filteredList = ListOfDia.filter(
           (product) => 
           Number(product.variants[0]?.price) > 1000
          ); 
          setLisTOfDia(filteredList);
          }} 
       >
        Our Top Products
       </button>
       </div>
       <div className="dia-container">
      {ListOfDia.map((products) => (
        <BestSeller key={products.id} productData={products} />
      ))}
      </div>
    </div>
  );
};

export default Body;

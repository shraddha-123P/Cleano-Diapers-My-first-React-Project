import BestSeller from "./BestSeller";
import resList from "../utils/mockData"; 


const Body = () => {
  return (
    <div className="body">
      <div className="filter">
      <button className="filter-btn" 
              onClick={()=>{
              console.log("Button Clicked");
      }}
      >
        Top Rated Restaurants
        </button>
        </div>
      {/* <div className="dia-container">
        {resList.restaurants.map((restaurants) => (
          <RestaurantCard key={restaurants.info.id} resData={restaurants} />
        ))}
      </div> */}
    </div>
  );
};
export default Body;
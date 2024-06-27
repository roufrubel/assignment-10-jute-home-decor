import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const MyCraftList = () => {
    const crafts = useLoaderData();
    const {user} = useContext(AuthContext);
    const myCrafts = crafts.filter(craft => craft.user_email === user.email);
    return (
        <div className="min-h-screen">
            <h2 className="text-center mt-4 mb-4 font-bold">My Craft List</h2>
            <div>
                {
                    myCrafts.length > 0 ? (
                        <div>
                          {myCrafts.map((craft, idx) => (
                            // <li >

<div className="overflow-x-auto" key={idx}>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Craft Name</th>
        <th>Price</th>
        <th>Stock Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>{idx}</th>
        <td>{craft.item_name}</td>
        <td>${craft.price}</td>
        <td>{craft.stockStatus}</td>
      </tr>     
    </tbody>
  </table>
</div>
                          ))}
                        </div>
                      ) : (
                        <p>No crafts available</p>
                      )
                }
            </div>
        </div>
    );
};

export default MyCraftList;





{/* <h2>{craft.item_name}</h2>
                              <p>{craft.short_description}</p>
                              <img src={craft.image} alt={craft.item_name} />
                              <p>Price: ${craft.price}</p>
                              <p>Rating: {craft.rating}</p>
                              <p>Customization: {craft.customization}</p>
                              <p>Processing Time: {craft.processing_time}</p>
                              <p>Stock Status: {craft.stockStatus}</p>
                              <p>Seller: {craft.user_name} ({craft.user_email})</p>  */}
                            
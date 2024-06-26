import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const MyCraftList = () => {
    const crafts = useLoaderData();
    const {user} = useContext(AuthContext);
    const myCrafts = crafts.filter(craft => craft.user_email === user.email);
    const {_id} = crafts;
    return (
        <div>
            <h2>My Craft List</h2>
            <div>
                {
                    myCrafts.length > 0 ? (
                        <ul>
                          {myCrafts.map((craft) => (
                            <li key={_id}>
                              <h2>{craft.item_name}</h2>
                              {/* <p>{craft.short_description}</p>
                              <img src={craft.image} alt={craft.item_name} />
                              <p>Price: ${craft.price}</p>
                              <p>Rating: {craft.rating}</p>
                              <p>Customization: {craft.customization}</p>
                              <p>Processing Time: {craft.processing_time}</p>
                              <p>Stock Status: {craft.stockStatus}</p>
                              <p>Seller: {craft.user_name} ({craft.user_email})</p> */}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>No crafts available</p>
                      )
                }
            </div>
        </div>
    );
};

export default MyCraftList;
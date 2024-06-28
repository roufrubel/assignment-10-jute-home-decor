import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";


const AllCraftsCard = ({craft}) => {
    const {loading} = useContext(AuthContext);
    const {_id, image, item_name, price} = craft;
    // subcategory_name, short_description, price, rating, customization, processing_time, stockStatus, user_email, user_name

    if(loading){
        <p className="text-2xl text-amber-700">Loading....</p>
    }

    return (
       <tbody>
                                    {/* row 1 */}
       <tr>
                                        <th></th>
                                        <td>{craft.item_name}</td>
                                        <td>${craft.price}</td>
                                        <td>{craft.stockStatus}</td>
      </tr>     
   </tbody>
    );
};

export default AllCraftsCard;
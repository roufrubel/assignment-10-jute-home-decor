import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllCraftsCard from "./AllCraftsCard";
import { AuthContext } from "../providers/AuthProvider";



const AllCrafts = () => {
    const {loading} = useContext(AuthContext);
    const loadedCraft = useLoaderData();
    const [crafts, setCrafts] = useState(loadedCraft)

    if(loading){
        <p className="text-2xl text-amber-700">Loading....</p>
    }
   
    return (
      <>
      <h2 className=" mt-20 text-2xl font-bold text-center">Art & Craft Items</h2>
      <div className="grid grid-cols-1 gap-10 container mx-auto">


      <div className="overflow-x-auto">
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
                                    
                                            {
                                            crafts.map(craft => <AllCraftsCard
                                            key={craft._id}
                                            craft={craft}
                                            crafts={crafts}
                                            setCrafts={setCrafts}
                                            ></AllCraftsCard>)
                                            }
                                </table>
                                </div>

      </div>
      </>
    )
};

export default AllCrafts;
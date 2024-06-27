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
      {/* <Header></Header> */}
      <div className="grid md:grid-cols-2 gap-10 container mx-auto mt-10">      
        {
          crafts.map(craft => <AllCraftsCard
          key={craft._id}
          craft={craft}
          crafts={crafts}
          setCrafts={setCrafts}
          ></AllCraftsCard>)
        }
      </div>
      </>
    )
};

export default AllCrafts;
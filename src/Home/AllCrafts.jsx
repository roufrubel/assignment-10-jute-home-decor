import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllCraftsCard from "./AllCraftsCard";



const AllCrafts = () => {
    const loadedCraft = useLoaderData();
    const [crafts, setCrafts] = useState(loadedCraft)
   
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
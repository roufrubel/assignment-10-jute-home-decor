// import { useLoaderData } from "react-router-dom";
// import AllCraftsCard from "./AllCraftsCard";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Banner from "./Banner";
import Sale from "./Sale";
import Reviews from "./Reviews";
import Category from "./Category";
import CraftItems from "./CraftItems";


const Home = () => {
    const {loading} = useContext(AuthContext);
    // const loadedCraft = useLoaderData();
    // const [crafts, setCrafts] = useState(loadedCraft)

    if(loading){
        <p className="text-2xl text-amber-700">Loading....</p>
    }
    return (
        <>
        <Banner></Banner>
      {/* <div>
      <h2 className=" mt-20 text-2xl font-bold text-center">Art & Craft Items</h2>
      <div className="grid md:grid-cols-2 gap-10 container mx-auto mt-10">      
        {
          crafts?.map(craft => <AllCraftsCard
          key={craft._id}
          craft={craft}
          crafts={crafts}
          setCrafts={setCrafts}
          ></AllCraftsCard>)
        }
      </div>
      </div> */}
      <CraftItems></CraftItems>
      <Category></Category>
        <Sale></Sale>
        <Reviews></Reviews>
      </>
    );
};

export default Home;


// [
//     {
//       "image": "https://i.ibb.co/K2qh4x0/jute01.png",
//       "item_name": "Jute Wall Hanging",
//       "subcategory_name": "Home Decor",
//       "short_description": "A stunning jute wall hanging that adds a rustic charm to any room.",
//       "price": 25.00,
//       "rating": 4.8,
//       "customization": "yes",
//       "processing_time": "3-5 days",
//       "stockStatus": "In stock",
//       "user_email": "user1@example.com",
//       "user_name": "Alice Smith"
//     },
//     {
//       "image": "https://i.ibb.co/7NJRNyf/juteo2.png",
//       "item_name": "Jute Table Runner",
//       "subcategory_name": "Home Decor",
//       "short_description": "A beautiful jute table runner perfect for adding a natural touch to your dining table.",
//       "price": 30.00,
//       "rating": 4.7,
//       "customization": "no",
//       "processing_time": "2-4 days",
//       "stockStatus": "In stock",
//       "user_email": "user2@example.com",
//       "user_name": "John Doe"
//     },
//     {
//       "image": "https://i.ibb.co/NVhqmBf/jute03.png",
//       "item_name": "Jute Plant Holder",
//       "subcategory_name": "Home Decor",
//       "short_description": "A chic jute plant holder that is perfect for indoor plants.",
//       "price": 20.00,
//       "rating": 4.9,
//       "customization": "yes",
//       "processing_time": "1-3 days",
//       "stockStatus": "Made to Order",
//       "user_email": "user3@example.com",
//       "user_name": "Emma Johnson"
//     },
//     {
//       "image": "https://i.ibb.co/0DgjhqP/jute04.png",
//       "item_name": "Jute Coasters Set",
//       "subcategory_name": "Home Decor",
//       "short_description": "A set of handmade jute coasters that protect your furniture while looking stylish.",
//       "price": 15.00,
//       "rating": 4.6,
//       "customization": "no",
//       "processing_time": "3-5 days",
//       "stockStatus": "In stock",
//       "user_email": "user4@example.com",
//       "user_name": "Michael Brown"
//     },
//     {
//       "image": "https://i.ibb.co/GvnH708/jute05.png",
//       "item_name": "Jute Storage Basket",
//       "subcategory_name": "Home Decor",
//       "short_description": "A versatile jute storage basket that is both functional and decorative.",
//       "price": 40.00,
//       "rating": 4.5,
//       "customization": "yes",
//       "processing_time": "5-7 days",
//       "stockStatus": "Made to Order",
//       "user_email": "user5@example.com",
//       "user_name": "Sophia Davis"
//     },
//     {
//       "image": "https://i.ibb.co/D55Vq4c/jute06.png",
//       "item_name": "Jute Mirror Frame",
//       "subcategory_name": "Home Decor",
//       "short_description": "A unique jute mirror frame that adds a rustic touch to your decor.",
//       "price": 50.00,
//       "rating": 4.9,
//       "customization": "yes",
//       "processing_time": "7-10 days",
//       "stockStatus": "In stock",
//       "user_email": "user6@example.com",
//       "user_name": "William Garcia"
//     }
//   ]
  
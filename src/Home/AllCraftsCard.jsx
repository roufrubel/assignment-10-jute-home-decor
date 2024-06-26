import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const AllCraftsCard = ({craft, crafts, setCrafts}) => {
    const {_id, image, item_name, price} = craft;
    // subcategory_name, short_description, price, rating, customization, processing_time, stockStatus, user_email, user_name

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              // Swal.fire({
              //   title: "Deleted!",
              //   text: "Your file has been deleted.",
              //   icon: "success"
              // });

              fetch(`https://assignment-10-jute-home-decor-server-inh2majw4.vercel.app/craft/${_id}`, {
                method: "DELETE",
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)

                if(data.deletedCount > 0) {
                  Swal.fire({
                  title: "Deleted!",
                  text: "Your coffee has been deleted.",
                  icon: "success"
                  });
                  const remaining = crafts.filter(cof => cof._id !== _id);
                setCrafts(remaining);
                }

              })


            }
          });
    }
    return (
        <div className="card card-side border p-6">
  <figure><img src={image} alt="Movie"/></figure>
  <div className="flex items-center ml-6">
    <div>
    <h2 className="card-title">{item_name}</h2>
    <p>Price: {price}</p>
    </div>
    <div className="card-actions justify-end ml-6">
    <div className="join join-vertical">
  <button className="btn join-item mb-4">View</button>
  <Link to={`updateCraft/${_id}`}>
  <button className="btn join-item mb-4">Edit</button>
  </Link>
  <button onClick={() => handleDelete(_id)} className="btn join-item">Delete</button>
</div>
    </div>
  </div>
</div>
    );
};

export default AllCraftsCard;
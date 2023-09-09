import { FcViewDetails } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import { useQuery } from "react-query";
import Swal from "sweetalert2";

const ManageAdmins = () => {
  const { data: admins = [], refetch } = useQuery(["admins"], async () => {
    const res = await fetch("http://localhost:5000/users/admins?role=admin");
    return res.json();
  });

  console.log(admins);

  const handleRemoveAdmin = (user) => {
    fetch(`http://localhost:5000/users/removeAdmin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an teacher now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to make an teacher!",
          });
        }
      });
  };

  const handleDeleteAdmin = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "This admin delete Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to delete an admin!",
          });
        }
      });
  };

  return (
    <div>
      <div className="w-full lg:w-6/12 mx-auto py-3 bg-green-500">
        <h1 className="text-lg lg:text-2xl text-center uppercase text-white">Manage all admins</h1>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Set Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Row */}
              {admins.map((admin, index) => (
                <tr key={admin._id}>
                  <td>{index}</td>
                  <td>{admin.name}</td>
                  <td>{admin.email}</td>
                  <td>
                    {admin.role === "admin" && (
                      <button onClick={() => handleRemoveAdmin(admin)} className="btn btn-xs btn-outline btn-primary">
                        Remove Admin
                      </button>
                    )}
                  </td>
                  <td>
                    <div>
                      <button>
                        <FcViewDetails className="w-8 h-8"></FcViewDetails>
                      </button>
                      <button onClick={() => handleDeleteAdmin(admin._id)}>
                        <MdDelete className="w-8 h-8 text-red-500"></MdDelete>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageAdmins;

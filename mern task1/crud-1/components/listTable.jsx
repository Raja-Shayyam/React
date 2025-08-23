import React from 'react'
import { NavLink } from 'react-router-dom'
import { DeletePost } from '../getAXI0S/axiousing'
import { GloablHook } from '../store/context'

export const ListTable = ({ u, setuser, myuser }) => {
    const { setUpdation } = GloablHook()

  const handleDelete = async (id) => {
    console.log(id, 'u', u);

    try {
      const res = await DeletePost(id)
      console.log(id, res.data.id);
      console.log(res);
      if (res.status === 200) {
        const newdata = myuser.filter((ele) => {
          return ele.id !== id
        })
        setuser(newdata)
      }
    } catch (error) {
      console.log('> ', error);
      console.log(error);
      console.log(error.message);
      console.log(error.response.status);
      console.log(error.response.data);
    }

  }

  const getBadgeClass = (status) => {
    switch (status) {
      case "complete":
        return "bg-success"; // green
      case "Pending":
        return "bg-warning"; // yellow
      case "Cancelled":
        return "bg-danger";  // red
      default:
        return "bg-secondary"; // gray fallback
    }
  };

  const handleUpdation = (usr) => {
    console.log(usr);
    setUpdation(usr)
  }


  return (
    <tr>
      <td>{u.id}</td>
      <td>
        <div className="user_icon">
          <img src="images/img1.jpg" alt="" />
        </div>
        {u.name}
      </td>
      <td>
        <span >{u.email}</span>
      </td>
      <td>{u.date}</td>
      <td>{u.city}</td>
      <td>
        <span className={`badge ${getBadgeClass(u.status)}`}>{u.status}</span>
      </td>
      <td>
        <ul className="action-list ">
          <div className='pb-2' onClick={() => handleDelete(u.id)}>
            <span className="btn btn-danger btn-sm">
              <i className="fa fa-trash">Delete</i>
            </span>
          </div>
          <div onClick={() => handleUpdation(u)}>
            <NavLink to="/editUser" >
              <span className="btn btn-info btn-sm">
                <i className="fa fa-user"></i>
                Edit User
              </span>
            </NavLink>
          </div>
        </ul>
      </td>
    </tr>
  )
}



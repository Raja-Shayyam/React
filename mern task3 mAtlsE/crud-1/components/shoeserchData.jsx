import React, { useEffect, useState } from 'react'
import { TABLEhEADER } from './TABLEhEADER.JSX';


export const ShoeserchData = ({ searchUser, myuser }) => {
  const [thereData, setThereData] = useState([]);
  console.log('searchUser -- ', searchUser);

  //    searchUser={
  //        id:'_',   
  //        name: '----'
  // 
  // }


  useEffect(() => {
    setThereData(myuser.filter((ele) => {
      const rtrnID = ele.id === searchUser.id || true
      console.log(ele.id, searchUser.id,rtrnID);
      
      const rtrnNAME = searchUser.name ? ele.name.toLowerCase().startsWith(searchUser.name.toLowerCase()) : true
      return rtrnID && rtrnNAME
      // return ele.id === searchUser.id && ele.name[(searchUser.name).length] === searchUser.name
    }))
    console.log('}}- ', thereData);

  }, [searchUser])

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

  return (
    <>

      <div className="card-body panel-body table-responsive">
        <table className="table">
          <TABLEhEADER />
          <tbody>
            {thereData.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>
                  <div className="user_icon">
                    <img src="images/img1.jpg" alt="" />
                  </div>
                  {row.name}
                </td>
                <td>
                  <span>{row.email}</span>
                </td>
                <td>{row.date}</td>
                <td>{row.city}</td>
                <td>
                  <span className={`badge ${getBadgeClass(row.status)}`}>
                    {row.status}
                  </span>
                </td>
                <td>
                  {/* Action buttons here */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}


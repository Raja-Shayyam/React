
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // import bootstrap
import { Getpost } from "../getAXI0S/axiousing";
import { ListComp } from "../components/ListComp";
import { GloablHook } from "../store/context";
import { ShoeserchData } from "../components/shoeserchData";
// import "font-awesome/css/font-awesome.min.css"; // for icons (if using FA4)

export const Home = () => {
  const { searchUser, myuser, setuser } = GloablHook()

  const fetchingmyUsers = async () => {
    const res = await Getpost()
    console.log('RES ',res || []);
    setuser(res.data)

    console.log('myuser', myuser);
  }
  useEffect(() => {
    fetchingmyUsers()
  }, [])
  return (
    <>
      {
        searchUser.name ?
          <ShoeserchData searchUser={searchUser} myuser={myuser} />
          :
          < ListComp myuser={myuser} setuser={setuser} />
      }
    </>

  );
};

import React from 'react'
import {db} from "../Firebase"
import { useEffect } from 'react'
import {getDocs,collection} from "firebase/firestore"
import { useState } from 'react'
import "../Style/Admin.css"
const Admin = () => {
  const [Users,setUsers]=useState([]);
  const FormCollection=collection(db,"users");
  useEffect(() => {
    document.title="Firebase | Admin"
    const getdata=async()=>{
      const data =await getDocs(FormCollection);
      setUsers(data.docs.map((doc)=>({...doc.data(),id :doc.id})))
    }
    getdata();
  },[])
  return (
   <>
   <div className='dataTabel'>
    {
       Users.map((doc,index)=>{
        return(
          <div key={doc.id} className='datas'>
            <h3>id:<span>#{index+1}</span></h3>
            <h3>Name:<span>{doc.Name}</span></h3>
            <h3>PhoneNo:<span>{doc.Phone}</span></h3>
            <h3>Address:<span>{doc.Address}</span></h3>
            <h3>Message:<span>{doc.Message}</span></h3>
          </div>
        );
       })
    }
   </div>
   </>
  )
}

export default Admin

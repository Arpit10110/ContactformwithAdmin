import React from 'react'
import "../Style/Contact.css"
import {db} from "../Firebase"
import {addDoc,collection} from "firebase/firestore"
import { useState,useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
  const [Username,setUsername]=useState();
  const [UserPhone,setUserPhone]=useState();
  const [UserAddress,setUserAddress]=useState();
  const [UserMessage,setUserMessage]=useState();
  const CreateCollection=collection(db,"users");
  const CreateUser = async()=>{
    await addDoc(CreateCollection,{
      Name:Username,
      Phone:UserPhone,
      Address:UserAddress,
      Message:UserMessage
    });
    setUsername("")
    setUserPhone("")
    setUserAddress("")
    setUserMessage("")
    toast.success('Messgae Sent successfully', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  useEffect(() => {
    document.title="Firebase | Contact"
  }, [])
  
  return (
    <>
    <div className='form'>
     <input type="text" placeholder='Enter your Name' onChange={(e)=>{
      setUsername(e.target.value);
     }} value={Username} />
     <input type="text" placeholder='Enter yor PhoneNo' onChange={(e)=>{
      setUserPhone(e.target.value);
     }}  value={UserPhone}/>
     <input type="text" placeholder='Enter your Address' onChange={(e)=>{
      setUserAddress(e.target.value);
     }} value={UserAddress}/>
     <input type="text" placeholder='Enter your Messgae' onChange={(e)=>{
      setUserMessage(e.target.value);
     }} value={UserMessage} />
     <button onClick={CreateUser}>Submit</button>
    </div>
    <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </>
    
  )
}

export default Home

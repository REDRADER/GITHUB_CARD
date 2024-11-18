"use client"
import Card from "@/components/Card/Card";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [userName, setUserName] = useState("");
  const [data, setData] = useState(null);
  const getData = async (e) => {
    e.preventDefault();
  
    if (!userName.trim()) {
      alert("Please enter a valid username.");
      return;
    }
  
    try {
     
      const res = await axios.get(`https://api.github.com/users/${userName.trim()}?timestamp=${Date.now()}`, {
        
      });
      setData(res.data);
    } catch (error) {
      const errorMessage =
        error.response?.status === 404
          ? "User not found."
          : "An error occurred while fetching data.";
      alert(errorMessage);
    } 
  };
  


  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col">
      <div className="px-5 py-5 flex items-center flex-col gap-3">
        <h1 className="text-4xl font-bold">Generate Github Card</h1>
        <p className="text-xl font-semibold">Enter you github username</p>
        <form className="flex w-full  gap-1" onSubmit={getData}>
          <input type="text" value={userName} className="grow text-white h-[40px] px-[10px] rounded-[5px] border bg-transparent border-white outline-none" onChange={(e) => setUserName(e.target.value)} />
          <button className="text-black h-[40px] px-[10px] rounded-[5px] border bg-white border-white outline-none" >Generate</button>
        </form>
        {
          data&&
      <Card data={data}/>
        }
      </div>
    </div>
  );
}

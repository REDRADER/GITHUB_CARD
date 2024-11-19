"use client"
import Card from "@/components/Card/Card";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
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
    <div className="min-h-screen h-full flex justify-center items-center flex-col relative" >
      <div className="grid grid-cols-1 md:grid-cols-2  gap-5 px-5 py-5">


        <div className=" flex items-center justify-center flex-col gap-3 h-full">
          <h1 className="text-4xl font-bold print-hide">Generate Github Card</h1>
          <p className="text-xl font-semibold print-hide">Enter you github username</p>
          <form className="flex w-full  gap-1 print-hide" onSubmit={getData}>
            <input type="text" value={userName} className="grow text-[--foreground] h-[40px] px-[10px] rounded-[5px] border bg-transparent border-[--foreground] outline-none" onChange={(e) => setUserName(e.target.value)} />
            <button className="text-[--background] h-[40px] px-[10px] rounded-[5px] border bg-[--foreground] border-[--foreground] outline-none" >Generate</button>
          </form>
          <div className="text-lg print-hide w-full text-center">
          Made by <Link href={"https://www.ravinderkumar.site"} className="font-bold">Ravinder Kumar</Link>
        </div>

        </div>

        {
          data &&
          <Card data={data} />
        }
      </div>

    </div>
  );
}

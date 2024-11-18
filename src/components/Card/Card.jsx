import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Barcode from 'react-barcode';

const Card = ({ data }) => {
    return (
        <div className=' gradient_bg w-full flex flex-col mt-8 p-5 border border-white rounded-md gap-5'>
            <div className='w-full flex flex-col items-center justify-center gap-0 relative pb-[10px] before:absolute before:top-[100%] before:h-[1px] before:w-full before:bg-white'>
                <h3 className='text-3xl font-bold'>GitHub University</h3>
                <p>Place to store every Code you Type</p>
            </div>
            <div className='grid grid-cols-[1fr_2fr] gap-3'>

            <div className=' w-full'>
                <Image src={data.avatar_url || ""} width={200} height={200} alt={data.name || "image alt text"} />
            </div>
            <div className='text-lg flex flex-col gap-2'>

            <h2>
                Id No: <span className='font-bold text-xl'>{data.id}</span>
            </h2>
          
            <h2>
                Name: <span className='font-bold text-xl'>{data.name}</span>
            </h2>
            <h2>
                Admision Date: <span className='font-bold text-xl'>{data.created_at.split("T")[0]}</span>
            </h2>
            <h2>
                Profile Link: <Link href={data.html_url} target='_blank' className='font-bold text-xl'>{data.html_url}</Link>
            </h2>
            <Barcode value={data.html_url} background= {"none"}  lineColor= {"#ffffff"} height={"45px"} displayValue={false} />
            </div>
            </div>
        </div>
    )
}

export default Card
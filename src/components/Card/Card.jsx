import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Barcode from 'react-barcode';
import { Github,ArrowDown } from 'lucide-react';

const Card = ({ data }) => {
   

    const admissionDate = new Date(data.created_at); 

    const day = admissionDate.getDate(); 
    const month = admissionDate.getMonth() + 1; 
    const year = admissionDate.getFullYear(); 



    return (
        <div className='bg-[--gradient-background] w-full flex flex-col mt-8 p-5 border border-[--border-color] rounded-md gap-5 max-w-[450px] relative' style={{boxShadow:"var(--shadow)",backfaceVisibility:"hidden",backdropFilter:"blur(24px)"}}>
            <div className='absolute top-0 right-0 h-[40px] w-[40px] flex justify-center items-center bg-[--foreground] print-hide rounded-[0_0_0_10px]' onClick={()=>window.print()}>
            <ArrowDown className='text-[--background]' />

            </div>
            <div className='w-full flex items-center justify-center gap-0 relative pb-[10px] before:absolute before:top-[100%] before:h-[1px] before:w-full before:bg-white'>
                <span className='w-[30px] md:w-[50px] h-[30px] md:h-[50px]'>

                    <Github className='w-full h-full' />
                </span>

                <div className='flex flex-col items-center justify-center'>

                    <h3 className='text-2xl md:text-3xl font-bold'>GitHub University</h3>
                    <p className='text-[14px] md:text'>Empowering Coders, One Commit at a Time</p>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-3'>

                <div className=' w-full flex justify-center items-center'>
                    <Image src={data.avatar_url || ""} width={300} height={100} alt={data.name || "image alt text"} className='w-full aspect-square' />
                </div>
                <div className='text-lg flex flex-col gap-2'>

                    <h2>
                        Id No: <span className='font-bold text-xl'>{data.id}</span>
                    </h2>

                    <h2>
                        Name: <span className='font-bold text-xl'>{data.name}</span>
                    </h2>
                    <h2>
                        Admission Date: <span className='font-bold text-xl'>{`${day}-${month}-${year}`}</span>
                    </h2>
                    <h2>
                        Public Repositories: <span className='font-bold text-xl'>{data.public_repos}</span>
                    </h2>
                    <div className='flex w-full items-center gap-5'>
                        <h2>
                            Follower: <span className='font-bold text-xl'>{data.followers}</span>
                        </h2>
                        <h2>
                            Following: <span className='font-bold text-xl'>{data.following}</span>
                        </h2>
                        {/* Profile Link: <Link href={data.html_url} target='_blank' className='font-bold text-xl'>{data.html_url}</Link> */}
                    </div>
                    <Link href={data.html_url} target='_blank'>
                        <Barcode value={data.html_url} background={"none"} lineColor={"var(--foreground)"} height={"45px"} displayValue={true} className="w-full" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card
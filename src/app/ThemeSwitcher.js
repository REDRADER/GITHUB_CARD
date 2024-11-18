"use client"
import { useTheme } from 'next-themes'
import React from 'react'
import { Moon,Sun } from 'lucide-react';

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div className='flex gap-1 fixed bottom-[20px] right-[20px] z-20 bg-[var(--bg-glass-hover)] rounded-[24px] p-2 print-hide' style={{backfaceVisibility:"hidden",backdropFilter:"blur(24px)"}}>
            
            <button aria-label="Light Mode Button" className={`h-[30px] w-[30px] rounded-[50%] p-[5px] ${theme==="light"&&'bg-[var(--color-accent)] text-white'}`} onClick={() => {setTheme("light")}}><Sun className='w-full h-full'/></button>
            <button aria-label="Dark Mode Button" className={`h-[30px] w-[30px] rounded-[50%] p-[5px] ${theme==="dark"&&'bg-white text-black'}`} onClick={() => {setTheme("dark")}}><Moon className='w-full h-full'/></button>
           
        </div>

    )
}

export default ThemeSwitcher

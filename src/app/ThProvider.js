"use client"
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";


const ThProvider = ({ children }) => {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }


  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      {children}
    </ThemeProvider>
  )
}

export default ThProvider

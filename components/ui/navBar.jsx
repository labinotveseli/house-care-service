'use client'
import React, {useState, useEffect} from "react"
import '../../app/globals.css'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'

const Navbar = () => {
    const { data: session } = useSession()
    const [isSmallScreen, setIsSmallScreen] = useState(false)
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }
    useEffect(() => {
        const checkScreenSize = () => {
          setIsSmallScreen(window.innerWidth < 430)
        }
    
        checkScreenSize()
    
        window.addEventListener('resize', checkScreenSize)
    
        return () => window.removeEventListener('resize', checkScreenSize)
      }, [])

      return isSmallScreen ? (
        <div style={{width: '100%', height: '100vh'}}>
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>
            <div className={menu_class}>
            <div className="menu">
                    <Link href="/">Home</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/about">About</Link>
                    {!session && (
                        <button onClick={() => signIn('descope')}>Login / Register</button>
                    )}
                </div>
            </div>
        </div>
    ) : null
}

export default Navbar
'use client'
import React, { useState, useEffect } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'

const GoToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button
            className={`fixed bottom-6 right-10 p-2 bg-primary text-white rounded-full shadow-lg transition-opacity ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={scrollToTop}
        >
            <FaArrowCircleUp size={24} />
        </button>
    )
}

export default GoToTopButton

'use client'
import React from 'react'
import Hero from './_components/Hero'
import CategoryList from './_components/CategoryList'
import GlobalApi from './_services/GlobalApi'
import { useEffect, useState } from 'react'
import BusinessList from './_components/BusinessList'

export default function Home() {
    const [categoryList, setCategoryList] = useState([])
    const [businessList, setBusinessList] = useState([])
    useEffect(() => {
        getCategoryList()
        getAllBusinessList()
    }, [])

    useEffect(() => {
        if (window.location.hash === '#popular-businesses') {
            const section = document.getElementById('popular-businesses')
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }, [])

    /**
     * Used to get All Category List
     */
    const getCategoryList = () => {
        GlobalApi.getCategory().then((resp) => {
            setCategoryList(resp.categories)
        })
    }

    /**
     * Used to get All Business List
     */
    const getAllBusinessList = () => {
        GlobalApi.getAllBusinessList().then((resp) => {
            setBusinessList(resp.businessLists)
        })
    }
    return (
        <div>
            <Hero />

            <CategoryList categoryList={categoryList} />

            <div id="popular-businesses">
                <BusinessList
                    businessList={businessList}
                    title={'Popular Businesses'}
                />
            </div>
        </div>
    )
}

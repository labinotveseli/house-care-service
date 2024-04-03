import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import SearchResultList from './SearchResultList'
import GlobalApi from '@/app/_services/GlobalApi'

function Hero() {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const handleSearchInputChange = (e) => {
        const query = e.target.value.trim()
        setSearchQuery(query)
        if (query === '') {
            setSearchResults([])
            return
        }
        GlobalApi.searchBusinessByName(query).then((resp) => {
            setSearchResults(resp?.businessLists || [])
        })
    }

    return (
        <div className="flex items-center gap-3 flex-col justify-center pt-14 pb-7">
            <h2 className="font-bold text-[30px] text-center sm:text-[46px]">
                Find House <span className="text-primary">Care Services</span>
                <br />
                Near You
            </h2>
            <h2 className="text-lg text-gray-400 sm:text-xl">
                Explore Top House Care & Repair Services Near You
            </h2>
            <div className="mt-4 flex gap-4 items-center">
                <Input
                    placeholder="Search"
                    className="rounded-full md:w-[350px]"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                />
                <Button className="rounded-full h-[46px]">
                    <Search className="h-4 w-4" />
                </Button>
            </div>
            <SearchResultList
                searchQuery={searchQuery}
                searchResults={searchResults}
            />
        </div>
    )
}

export default Hero

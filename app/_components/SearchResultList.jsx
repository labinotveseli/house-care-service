import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { NotebookPen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import GlobalApi from '@/app/_services/GlobalApi'

function SearchResultList({ searchQuery, searchResults }) {
    return (
        <div className="md:pl-10 mb-14">
            <div className="md:block mb-12 mt-10 sm:mt-0 sm:mb-0 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {searchQuery && searchResults.length === 0 ? (
                        <p>No results found</p>
                    ) : (
                        searchResults.map((business, index) => (
                            <Link
                                href={`/details/${business.id}`}
                                className="flex sm:flex-row flex-col gap-2 mb-4 hover:border rounded-lg cursor-pointer hover:shadow-md border-primary"
                                key={index}
                            >
                                <Image
                                    src={business.images[0].url}
                                    alt={business.name}
                                    width={80}
                                    height={80}
                                    className="rounded-lg object-cover h-auto sm:h-[100px] w-full sm:w-auto"
                                />
                                <div className="flex flex-col justify-center">
                                    <h2 className="font-bold text-xs sm:text-sm">
                                        {business.name}
                                    </h2>
                                    <h2 className="text-primary text-xs sm:text-sm">
                                        {business.contactPerson}
                                    </h2>
                                    <h2 className="text-gray-400 text-xs sm:text-sm block">
                                        {business.address}
                                    </h2>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default SearchResultList

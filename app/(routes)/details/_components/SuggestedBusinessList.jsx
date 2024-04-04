import GlobalApi from '@/app/_services/GlobalApi'
import { Button } from '@/components/ui/button'
import { NotebookPen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import BookingSection from './BookingSection'

function SuggestedBusinessList({ business }) {
    const [businessList, setBusinessList] = useState([])
    useEffect(() => {
        business && getBusinessList()
    }, [business])

    const getBusinessList = () => {
        GlobalApi.getBusinessByCategory(business?.category?.name).then(
            (resp) => {
                setBusinessList(resp?.businessLists)
            }
        )
    }

    return (
        <div className='md:pl-10'>
            <BookingSection business={business}>
                <Button
                    className='flex gap-1 items-center justify-start'
                    style={{ minWidth: '150px' }}
                >
                    <NotebookPen className='flex-shrink-0' />
                    <span className='whitespace-nowrap'>Book Appointment</span>
                </Button>
            </BookingSection>

            <div className='md:block mb-12 mt-10 sm:mt-0 sm:mb-0'>
                <h2
                    className='font-bold text-lg my-3' >
                    Similar Businesses
                </h2>
                <div className=''>
                    {businessList &&
                        businessList.map((business, index) => (
                            <Link
                                key={index}
                                href={'/details/' + business.id}
                                className='flex lg:flex-row flex-col gap-2 mb-4 hover:border rounded-lg cursor-pointer hover:shadow-md border-primary' >
                                <Image
                                    src={business?.images[0].url}
                                    alt={business.name}
                                    width={80}
                                    height={80}
                                    className='rounded-lg object-cover h-auto sm:h-[100px] w-full sm:w-auto'
                                />
                                <div className='flex flex-col justify-center'>
                                    <h2 className='font-bold text-xs sm:text-sm'>
                                        {business.name}
                                    </h2>
                                    <h2 className='text-primary text-xs sm:text-sm'>
                                        {business.contactPerson}
                                    </h2>
                                    <h2 className='text-gray-400 text-xs sm:text-sm hidden sm:block'>
                                        {business.address}
                                    </h2>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default SuggestedBusinessList

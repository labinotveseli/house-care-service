/* eslint-disable quotes */

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function CategoryList({ categoryList }) {
    return (
        <div className='mx-4 md:mx-22 lg:mx-52 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4'>
            {categoryList.length > 0
                ? categoryList.map((category, index) => (
                    <Link
                        href={'/search/' + category.name}
                        key={index}
                        className={`flex flex-col items-center justify-center gap-2 border bg-gray-50 border-gray-100 shadow p-4 rounded-lg cursor-pointer hover:scale-110 hover:bg-sky-300 transition-all ease-in-out`}
                    >
                        <Image
                            src={category.icon.url}
                            alt='icon'
                            width={35}
                            height={35}
                        />
                        <h2 className='text-zinc-700 font-semibold'>{category.name}</h2>
                    </Link>
                ))
                : [1, 2, 3, 4, 5, 6].map((item, index) => (
                    <div
                        key={index}
                        className='h-[120px] w-full bg-gray-100 animate-pulse rounded-md'
                    ></div>
                ))}
        </div>
    )
}

export default CategoryList

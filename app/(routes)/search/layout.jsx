import React from 'react'
import CategorySideBar from './_components/CategorySideBar'

function Layout({ children }) {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="md:col-span-1 mt-10">
                    <CategorySideBar />
                </div>
                <div className="md:col-span-3 mt-0">{children}</div>
            </div>
        </div>
    )
}

export default Layout

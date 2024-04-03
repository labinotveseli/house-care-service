import { Button } from '@/components/ui/button'
import { Calendar, Clock, MapPin, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import GlobalApi from '@/app/_services/GlobalApi'
import { toast } from 'sonner'

function BookingHistoryList({ bookingHistory, type }) {
    const cancelAppointment = (booking) => {
        GlobalApi.deleteBooking(booking.id).then(
            (resp) => {
                if (resp) {
                    toast('Booking Canceled Successfully!')
                }
            },
            (e) => {
                toast('Error canceling the booking!')
            }
        )
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
            {bookingHistory.map((booking, index) => (
                <div className="flex mb-5">
                    <div
                        key={index}
                        className="p-4 shadow-md rounded-lg hover:shadow-lg cursor-pointer hover:shadow-primary hover:scale-105 transition-all ease-in-out"
                    >
                        {booking?.businessList?.name && (
                            <Image
                                src={booking?.businessList?.images[0]?.url}
                                alt="image"
                                width={500}
                                height={200}
                                className="rounded-lg object-cover sm:h-[100px] w-full sm:w-auto h-[200px] md:h-[200px]"
                            />
                        )}
                        <div className="flex flex-col gap-4 mt-2">
                            <h2 className="font-bold text-md md:text-lg">
                                {booking.businessList.name}
                            </h2>
                            <h2 className="flex gap-2 text-primary text-xs sm:text-sm">
                                {' '}
                                <User /> {booking.businessList.contactPerson}
                            </h2>
                            <h2 className="flex gap-2 text-gray-400 text-xs sm:text-sm">
                                {' '}
                                <MapPin className="text-primary" />{' '}
                                {booking.businessList.address}
                            </h2>
                            <h2 className="flex gap-2 text-gray-500 text-xs sm:text-sm">
                                <Calendar className="text-primary text-xs sm:text-sm" />
                                Service on :{' '}
                                <span className="text-black text-xs sm:text-sm">
                                    {' '}
                                    {booking.date}
                                </span>
                            </h2>
                            <h2 className="flex gap-2 text-gray-500 text-xs sm:text-sm">
                                <Clock className="text-primary text-xs sm:text-sm" />
                                Service on :{' '}
                                <span className="text-black text-xs sm:text-sm">
                                    {' '}
                                    {booking.time}
                                </span>
                            </h2>
                            <button
                                onClick={() => cancelAppointment(booking)}
                                className="mt-2 bg-red-500 text-white p-2 rounded"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BookingHistoryList

import React, { useState } from 'react'
import { getMonth } from "./util"
import CalendarHeader from "./components/CalendarHeader"
import Sidebar from "./components/SideBar"
import Month from "./components/Month"
import '../index.css'

export default function Calendar() {
    const [currentMonth, setCurrentMonth] = useState(getMonth())

    return (
        <>
            <div className="h-screen flex flex-col">
                <CalendarHeader />
                <div className="flex flex-1">
                    <Sidebar />
                    <Month month={currentMonth} />
                </div>
            </div>
        </>
    )
}
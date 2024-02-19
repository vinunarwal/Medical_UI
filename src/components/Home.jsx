import React from 'react'
import PatientInfo from './PatientInfo'
import Medi from './Medi'
import Test from './Test'

function Home() {
    return (
        <div className="m-3 flex flex-row justify-around h-screen">
            <div className='flex flex-column print-d-none'>
                <PatientInfo />
                <Test />
            </div>

            <Medi />
            {/* <DbData /> */}
        </div>
    )
}

export default Home

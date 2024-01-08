import React from 'react'

function Foot() {
    return (
        <>
            <div className='Footer'>
                <div className='container'>
                    <div className='Foott flex justify-between mb-40'>
                        <div className='col-md-5' id='head'>
                            <div className='text-center pl-28 text-xl'>
                                <p>Thanks for Reference</p>
                            </div>
                        </div>
                        <div className='col-md-7 text-xl'>
                            <p> ****End of Report****</p>
                        </div>
                    </div>
                    {/* <table>
                        <tbody>
                            <tr>
                                <td colSpan={3}>Thanks for Reference</td>
                                {/* <tr> }
                                <td>****End of Report****</td>
                                {/</tr>}
                            </tr>
                        </tbody>

                    </table> */}
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='text-center'>
                                <p className='text-xl'><span className='block font-bold'>Medical Lab Technician</span>
                                    (DMLT, BMLT)</p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='text-center'>
                                <p className='text-xl'><span className='block font-bold'>Dr. Payal Shah</span>
                                    (MD, Pathologist)</p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='text-center'>
                                <p className='text-xl'><span className='block font-bold'>Dr. Vimal Shah</span>
                                    (MD, Pathologist)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Foot
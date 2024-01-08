import React from 'react';
// import qr from '../assests/qrcode.png';
// import barcode from '../assests/barcode.png';

function Hero() {
    return (
        <>
            <div className='container'>
                <div className='row hero_section flex justify-around pt-9'>
                    <div className='col-md-4 patient'>
                        <h1 className='patient_name font-bold text-xs'>Yash M. Patel</h1>
                        <div className='patient_box'>
                            <div className='patient_details'>
                                <h3 className='leading-8 age text-xs'>Age : 21 Years</h3>
                                <h3 className='leading-8 text-xs'>Sex : Male</h3>
                                <h3 className='leading-8 text-xs'>PID : 555</h3>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 samples'>
                        <h1 className='font-bold leading-8 text-xs'>Sample Collected At :</h1>
                        <h4 className='leading-8 text-xs'>125, Shivam, Bungalow, S G Road,<span> <br />Mumbai</span></h4>
                        <h2 className='leading-8 text-xs'>Ref. By: <span className='font-bold'> Dr. Hiren Shah</span></h2>
                    </div>

                    <div className='col-md-4 test_dates'>
                     
                        <div className='report'>
                            <div className='report_detail'>
                                <p className='text-sm'><span className='font-bold'>Registered on:</span> 02:31 PM 02 Dec, 22</p>
                                <p className='text-sm'><span className='font-bold'>Collected on:</span> 03:11 PM 02 Dec, 22</p>
                                <p className='text-sm'><span className='font-bold'>Reported on:</span> 04:35 PM 02 Dec, 22</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero;

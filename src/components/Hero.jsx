import React from 'react';
import { Namedt } from '../data/Namedata';

function Hero() {
  return (
    <>
      <div className='container'>
        <div className='row hero_section flex justify-around'>
          <div className='col-sm-3 patient text-base'>
            {Namedt.map((item, index) => (
              <div className='patient_details'>
                <h1 className='patient_name font-bold text-xl'>{item.Name}</h1>
                <p>Age :{item.Age}</p>
                <p>Sex : {item.Sex}</p>
                <p>PID : {item.PID}</p>
              </div>
            ))}
          </div>
          {Namedt.map((item, index) => (
            <div className='col-sm-4 samples border-r-2 border-l-2'>
              <p className='font-bold text-lg'>Sample Collected At :</p>
              <p>{item.Address}<span>{item.City}</span></p>
              <h2 className='text-lg pt-1'>Ref. By: <span className='font-bold'> {item.Dr}</span></h2>
            </div>
          ))}
          <div className='col-sm-5 test_dates'>
            <div className='report'>
              <div className='report_detail text-sm'>
                <p><span className='font-bold'>Registered on:</span> 02:31 PM 02 Dec, 22</p>
                <p><span className='font-bold'>Collected on:</span> 03:11 PM 02 Dec, 22</p>
                <p><span className='font-bold'>Reported on:</span> 04:35 PM 02 Dec, 22</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

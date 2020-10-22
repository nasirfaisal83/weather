import React, { useState } from 'react';
import './App.css';


function SecondComponent() {
    const [weathers] = useState(
        [
            {
                id : 1 ,
                day : 'Wed' ,
                img : 'https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png',
                min_tempreture : '67',
                max_tempreture : '78'
            },
            {
                id : 2 ,
                day : 'Thu' ,
                img : 'https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png',
                min_tempreture : '66',
                max_tempreture : '83'
            },
            {
                id : 3 ,
                day : 'Fri' ,
                img : 'https://cdn4.iconfinder.com/data/icons/weather-forecast-flat-1/64/rain_rainy_weather_weather_forecast-512.png',
                min_tempreture : '65',
                max_tempreture : '77'
            },
            {
                id : 4 ,
                day : 'Sat' ,
                img : 'https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png',
                min_tempreture : '64',
                max_tempreture : '78'
            },
            {
                id : 5 ,
                day : 'Sun' ,
                img : 'https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png',
                min_tempreture : '62',
                max_tempreture : '77'
            },
            {
                id : 6 ,
                day : 'Mon' ,
                img : 'https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png',
                min_tempreture : '61',
                max_tempreture : '71'
            },
            {
                id : 7 ,
                day : 'Tue' ,
                img : 'https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png',
                min_tempreture : '60',
                max_tempreture : '70'
            },{
                id : 8 ,
                day : 'Wed' ,
                img : 'https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png',
                min_tempreture : '60',
                max_tempreture : '73'
            },
        ]
    );
  return (
    <div >
        {weathers.map((value,index)=>{
            return (
                <div key={value.id} className='flexbox'>
                   <div className='flex'>
                        <p>{value.day}</p>
                        <img alt='weather condition' className='img' src={value.img}></img>
                        <p>{value.min_tempreture}{' '}{value.max_tempreture}</p>
                   </div>
                    
                </div>
            )
        })}
    </div>
  );
}

export default SecondComponent;
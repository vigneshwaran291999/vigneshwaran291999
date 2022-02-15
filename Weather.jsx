import React from 'react';

const Weather=(props) =>{
  return (<div>
     <div className="container mx-auto text-center ">
   <h1 className='display-5'>{props.city}</h1>
   <h5 className="py-4 display-1">
          <i className={props.icon}></i>
   </h5>
   {props.temp?<h3 className='my-4 '>{props.temp}&deg;</h3>:null}
      {minmax(props.max_temp,props.min_temp)}
      <h2 className="display-6 py-4">{props.desc}</h2>
     </div>
  </div>)
}
function minmax(min,max){
  if(min&&max){
  return(
    <h4>
      <span className='mx-5'>
        {min}&deg;
      </span>
      <span className='mx-5'>
        {max}&deg;
      </span>
    </h4>
  )
}}
export default Weather
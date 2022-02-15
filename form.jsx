import React from 'react';

function Form(props) {
  return (<div>
      <div className="container my-4 ">
      <div>{props.error ? error():null}</div>
          <form onSubmit={props.loadweather}>
              <div className="row md-4">
                  <div className="col md-2 offset-md-3">
                      <input type='text' placeholder='city' className='form-control' autoComplete='off' name='city'></input>
                  </div>
                  <div className="col md-2  mt-md-0  text-md-left">
                      <button className="btn btn-primary ">get weather</button>
                  </div>
                  </div>
          </form>
      </div>
  </div>)
}
function error(){
    return(
    <div className="alert alert-danger mx-5 text-center" role='alert'>
        please enter city
    </div>
    );
}

export default Form;

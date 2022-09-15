import React from 'react';
import './style.css'


export default class Login extends React.Component{
   render(){
    return (
   <div  className="input">
      <div className="box">
         <h3>SIGNUP</h3>
          <div className="parentInput">
             <input className="childInput" type="text"  placeholder="Email" />
             <input className="childInput" type="password"  placeholder="Enter your password"/>
          </div>
         {/* <div className="checkbox">
            <input type="checkbox"  />
            <p>Remember me?</p>
         </div> */}
         <button className="btn" > LogIn</button>
          {/* <p className='password'> Forgot password?</p> */}
         <div className='user'>
           <p>Already a user </p> <a onClick={this.props.onClick}> LogIn</a>
         </div>
      </div>
    </div>
    );
  }}
  
  
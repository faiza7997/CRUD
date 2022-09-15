import React from 'react';
import './style.css'

// function Login ()  {
export default class Login extends React.Component{
   render(){
    return (
   <div  className="input">
      <div className="box">
         <h3>LOGIN</h3>
          <div className="parentInput">
             <input className="childInput" type="text"  placeholder="Email" />
             <input className="childInput" type="password"  placeholder="Enter your password"/>
          </div>
         <div className="checkbox">
            <input type="checkbox"  />
            <p>Remember me?</p>
         </div>
        
         <button className="btn"> LogIn</button>
          <p className='password'> Forgot password?</p>
          <p className='accaunt'>Need an accout <a onClick={this.props.onClick}>SignUp</a></p>
      </div>
    </div>
    );


   }
}
  
  
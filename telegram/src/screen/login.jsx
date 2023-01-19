import { useEffect } from "react";
import { useState } from "react";
import { users } from "../api";
import { Button, message, Space } from 'antd';

const Login = () => {
    const local = localStorage.getItem('id');
    const Logged = () =>{
        if (local != null){
            window.location.href = "/telegram";
        }
    }
    useEffect(()=>{
        Logged();
    },[])
    const [login,SetLogin] = useState();                                                          
    const Signin = () =>{
        if(login != ""){
            const user = users.filter(i => i.phone == login);
            if(user.length > 0){
                localStorage.setItem('id',user[0].id);
                window.location.href = '/telegram';
        }else{
            message.open({
                type: 'error',
                content: 'This is an error message',
              });
        }
        }else{
             message.open({
                type: 'warning',
                 content: 'This is a warning message',
            });   
        }
        
    }
    return (
        <div>
            <div className="container-fluid ">
                <div className="row mt-5 text-center">
                    <div className="col-md-12 ">
                        <img src="https://groupstelegram.com/wp-content/uploads/2021/07/grupo-de-Telegram-da-India.png" width={250} height={150}></img>
                    </div>
                </div>
                <div className="row text-center mt-2">
                    <div className="col-md-12">
                        <h2>Telegram</h2>
                        Please confirm your country code and enter your phone number.
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <small>Country</small>
                        <br></br>
                        <select className="form-control">
                            <option>Kyrgyzstan</option>
                            <option>Brazil</option>
                            <option>Russia</option>
                        </select>
                    </div>
                    <div className="col-md-4"></div>

                    <div className="row mt-3">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 ">
                            <small>Your phone number</small>
                            <br></br>
                            <input type="text" className="form-control" placeholder="+996" onChange={(e) => {SetLogin(e.target.value)}} />
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <button onClick={Signin} className="form-control btn-light text-primary">
                                NEXT
                            </button>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;
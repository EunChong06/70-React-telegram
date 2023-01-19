import { useEffect, useState } from "react";
import { users } from "../api";
import Logout from "./logout";
import { Button, Drawer, Layout, Radio, Space } from 'antd';

const Setting=()=>{
    
    const local = localStorage.getItem('id');
    const user = users.filter(i => i.id == local);
    const Logged = () =>{
        if(local == null){
            window.location.href ="/";
        }
    }
    useEffect(()=>{
        Logged();
    },[])
    const[open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('top');
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const onChange = (e) => {
        setPlacement(e.target.value);
    };
    return(
        <div>
            <div className="container-fluid">
                <div className="row text-light bg-primary">
                    <div className="col-9">
                        <a href="/telegram" ><h4><i class="fa-solid fa-arrow-left text-light"></i></h4></a>
                    </div>
                    <div className="col-1"><h4><i class="fa-solid fa-qrcode"></i></h4></div>
                    <div className="col-1"><h4><i class="fa-solid fa-magnifying-glass"></i></h4></div>
                    <div className="col-1">
                        <a href="#" onClick={showDrawer}>
                            <h4><i class="fa-solid fa-ellipsis-vertical text-light"></i></h4>
                        </a>
                    </div>
                </div>
                <div className="row text-light bg-primary">
                    <div className="col-2 mb-3">
                        <img src={user[0].avatar} width={80} height={80} style={{borderRadius:"50%"}}></img>
                    </div>
                    <div className="col-10">
                        <h4>
                            {user[0].nickname}
                        </h4>
                        <small>online</small>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-primary mb-3 mt-3">
                        <small>Account</small>
                    </div>
                    <div className="col-12">
                        <b>{user[0].phone}</b>
                    </div>
                    <br></br>
                    <small>Tap to change phone number</small>
                    <hr></hr>
                    <div className="col-12">
                        <b>None</b>
                        <br></br>
                        <small>Username</small>
                    </div>
                    <hr></hr>
                    <div className="col-12">
                        <b>Bio</b>
                        <br></br>
                        <small>Add a few words about yourself</small>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12"><big><i class="fa-regular fa-bell me-2"></i></big><b>Notifications and Sounds</b></div>
                    <hr></hr>
                    <div className="col-12"><big><i class="fa-solid fa-lock me-2"></i></big><b>Pravicy and Security</b></div>
                    <hr></hr>
                    <div className="col-12"><big><i class="fa-solid fa-circle-half-stroke me-2"></i></big><b>Data and Storage</b></div>
                    <hr></hr>
                    <div className="col-12"><big><i class="fa-regular fa-comment me-2"></i></big><b>Chat sttings</b></div>
                    <hr></hr>
                    <div className="col-12"><big><i class="fa-regular fa-note-sticky me-2"></i></big><b>Stikers and Emoji</b></div>
                    <hr></hr>
                    <div className="col-12"><big><i class="fa-regular fa-folder me-2"></i></big><b>Chat Folders</b></div>
                    <hr></hr>
                    <div className="col-12"><big><i class="fa-solid fa-computer me-2"></i></big><b>Devices</b></div>
                    <hr></hr>
                    <div className="col-12"><big><i class="fa-solid fa-globe me-2"></i></big><b>Language</b></div>
                    <hr></hr>
                </div>
                <div className="row mt-4">
                    <div className="col-12">
                        <big><i class="fa-regular fa-star me-2"></i></big><b>Telegram Premium</b>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 text-primary mb-1"><small>Help</small></div>
                    <div className="col-12">
                        <big><i class="fa-regular fa-comment-dots me-2"></i></big>
                        <b>Ask a Question</b>
                    </div>
                    <hr></hr>
                    <div className="col-12">
                        <big><i class="fa-light fa-circle-question me-2"></i></big>
                        <b>Telegram FAQ</b>
                    </div>
                    <hr></hr>
                    <div className="col-12">
                        <big><i class="fa-solid fa-shield me-2"></i></big>
                        <b>Privacy Policy</b>
                    </div>
                </div>
                <div className="row bg-secondary">
                    <div className="col-12 text-center">
                        <small>
                            Telegram for Android v9.1.6(2929)store bundled<br></br>
                            arm64-v8a
                        </small>
                    </div>
                </div>
            </div>
            <Drawer
                title="Menu"
                placement={placement}
                closable={false}
                onClose={onClose}
                open={open}
                key={placement}
            >
                <Logout />
            </Drawer>
        </div>
    )
}
export default Setting;
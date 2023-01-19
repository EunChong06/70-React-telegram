import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { users } from "../api";

const Menu=()=>{
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
    return(
        <div>
            <div className="container-fluid">
                <div className="row bg-primary text-light">
                    <div className="col-md-10">
                        <img className="my-2" src={user[0].avatar} width={80} height={80} style={{borderRadius:"50%"}}></img>
                    </div>
                    <div className="col-md-1"><h4><i class="fa-solid fa-moon mt-4"></i></h4></div>
                </div>
                <div className="row bg-primary text-light">
                    <div className="col-md-10">
                        <big>{user[0].nickname}</big>
                        <br></br>
                        <small>{user[0].phone}</small>
                    </div>
                    <div className="col-md-1"><h4><i class="fa-solid fa-chevron-down"></i></h4></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-2"><h4><i class="fa-solid fa-users"></i></h4></div>
                    <div className="col-md-10"><big><b>New Group</b></big></div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-2"><h4><i class="fa-solid fa-user"></i></h4></div>
                    <div className="col-md-10 "><a href={"/contact"}><big className="text-dark"><b>Contacts</b></big></a></div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-2"><h4><i class="fa-solid fa-phone"></i></h4></div>
                    <div className="col-md-10"><big><b>Calls</b></big></div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-2"><h4><i class="fa-solid fa-person"></i></h4></div>
                    <div className="col-md-10"><big><b>People Nearby</b></big></div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-2"><h4><i class="fa-solid fa-bookmark"></i></h4></div>
                    <div className="col-md-10"><big><b>Saved Messages</b></big></div>
                </div>
                <hr></hr>
                <div className="row ">
                    <div className="col-md-2"><h4><i class="fa-solid fa-gear"></i></h4></div>
                    <div className="col-md-10 ">
                        <a href="/settings"><big><b className="text-dark">Settings</b></big></a>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-2"><h4><i class="fa-solid fa-user-plus"></i></h4></div>
                    <div className="col-md-10"><big><b>Invite Friends</b></big></div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-2"><h4><i class="fa-solid fa-circle-question"></i></h4></div>
                    <div className="col-md-10"><big><b>Telegram Features</b></big></div>
                </div>
            </div>
        </div>
    )
}
export default Menu;
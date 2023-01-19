import { useEffect, useState } from "react";
import { chats, users } from "../api";

const Contact = ()=>{

    const local = localStorage.getItem('id');
    const user = users;
    const Logged = () =>{
        if(local == null){
            window.location.href ="/";
        }
    }
    useEffect(()=>{
        Logged();
    },[])
    const[open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('left');
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
            <div className="container-fuid">
                <div className="row bg-primary text-light">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-1">
                        
                        <a href="/telegram" className="text-light"><h4><i class="fa-solid fa-arrow-left-long"></i></h4></a>
                    </div>
                    <div className="col-sm-8">
                        <h4>Contact</h4>
                    </div>
                    <div className="col-sm-1">
                        <h4><i class="fa-solid fa-magnifying-glass"></i></h4>
                    </div>
                    <div className="col-sm-1">
                        <h4><i class="fa-solid fa-grip-lines"></i></h4>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-1"><h4><i class="fa-solid fa-user-plus"></i></h4></div>
                    <div className="col-sm-10"><h5>Invite Friends</h5></div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-1"><h4><i class="fa-solid fa-location-dot"></i></h4></div>
                    <div className="col-sm-10"><h5>Find People Nearby</h5></div>
                </div>
                <div className="row bg-secondary">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-11">
                        Sorted last seen time
                    </div>
                </div>
                {user != null ?
                    <>
                        <div className="row">
                            {user.map((item) =>
                                <>
                                    <div className="col-sm-1"></div>
                                    <div className="col-sm-1 mt-1">
                                        <a href={"/profile/"+ item.id} >
                                            <img src={item.avatar} width={60} height={60} style={{ borderRadius: "50%" }} />
                                        </a>
                                    </div>
                                    <div className="col-sm-10 mt-3"><h5>{item.nickname}</h5><small className="text-primary"></small></div>
                                    <hr></hr>
                                </>)}
                        </div>
                    </>
                    : <></>
                }

            </div>
        </div>
    )
}
export default Contact;
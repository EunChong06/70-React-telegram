import { useState } from "react";
import { useEffect } from "react";
import { chats,messages } from "../api";
import Menu from "./menu,";
import { Button, Drawer, Radio, Space } from 'antd';

const Main = () => {
    const local = localStorage.getItem('id');
    const Logged = () => {
        if (local == null) {
            window.location.href = "/";
        }
    }
    useEffect(() => {
        Logged();
    }, [])
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
    return (
        <div>
            <div className="container-fluid ">
                <div className="row bg-primary text-light ">
                    <div className="col-md-2 ">
                        <a href="#" onClick={showDrawer}><h3><i class="fa-solid fa-bars text-light"></i></h3></a>
                    </div>
                    <div className="col-md-8">
                        <h3>Telegram</h3>
                    </div>
                    <div className="col-md-2">
                        <h3><i class="fa-solid fa-magnifying-glass"></i></h3>
                    </div>
                </div>
                {chats != null ?
                    <>
                        <div className="row">
                            {chats.map((item) =>
                                <>
                                    <div className="col-md-2 mt-1">
                                        <a href={"/chat/" + item.id} >
                                            <img src={item.avatar} width={60} height={60} style={{ borderRadius: "50%" }} />
                                        </a>
                                    </div>
                                    <div className="col-md-7 mt-3"><h5>{item.nickname}</h5><small className="text-primary"></small></div>
                                    <div className="col-md-3">6:06pm</div>
                                    <hr></hr>
                                </>)}
                        </div>
                    </>
                    : <></>
                }
            </div>

            <Drawer
                title="Menu"
                placement={placement}
                closable={false}
                onClose={onClose}
                open={open}
                key={placement}
            >
                <Menu />
            </Drawer>
        </div>
    )
}
export default Main;
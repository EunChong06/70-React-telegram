import { useParams } from "react-router-dom";
import { chats, messages } from "../api";
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { useState } from "react";
import React from 'react';
import { Skeleton } from 'antd';



const Chat = () => {
    const params = useParams();
    const id = params.id;
    const user = chats.filter(i => i.id == id);
    console.log('user', user)
    const message = messages.filter(i => i.chat_id == id);
    console.log(message);
    const Message = (value) => {
        if (value.user1 == localStorage.getItem('id')) {
            return (
                <div className="col-md-12 text-end">
                    {value.message}
                </div>
            )
        } else {
            return (
                <div className="col-md-12 text-start">
                    {value.message}
                </div>
            )
        }
    }
    const [fileList, setFileList] = useState([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
    ]);
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };
    return (
        <div>
            <div className="container-fluid">
                <div className="row bg-primary text-light">
                    <div className="col-md-1 mt-3"><h3><a href="/telegram"><i class="fa-solid fa-arrow-left text-light"></i></a></h3></div>
                    <div className="col-md-2 my-2">
                        <img src={user[0].avatar} width={50} height={50} style={{ borderRadius: "50%" }} />
                    </div>
                    <div className="col-md-8"><h3>{user[0].nickname}</h3>last seen at 6:12 PM</div>
                    <div className="col-md-1 mt-3"><h3><i class="fa-solid fa-ellipsis-vertical"></i></h3></div>
                </div>
                {message != null ?
                    <>
                    
                        <div className="row text-center">
                            {message.map((item) =>
                                <>
                                    {Message(item)}
                                </>)}
                        </div>
                    </>
                    : 
                    <>
                     <Skeleton active />;   
                    
                    </>
                }
                <div className="row border" style={{ marginTop: "480px" }}>
                    <div className="col-md-1"><h3><i class="fa-regular fa-face-smile"></i></h3></div>
                    <div className="col-md-8"><input className="form-control" /></div>
                    <div className="col-md-1"><h3><i class="fa-regular fa-paper-plane"></i></h3></div>
                    <div className="col-md-1"><h3><i class="fa-solid fa-paperclip"></i></h3></div>
                    <div className="col-md-1"><h3><i class="fa-solid fa-microphone"></i></h3></div>
                </div>
                <ImgCrop rotate>
                    <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList}
                        onChange={onChange}
                        onPreview={onPreview}
                    >
                        {fileList.length < 5 && '+ Upload'}
                    </Upload>
                </ImgCrop>
            </div>
        </div>
    )
}
export default Chat;

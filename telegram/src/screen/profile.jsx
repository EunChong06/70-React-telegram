
import { useParams } from "react-router-dom";
import { users } from "../api";

const Profile =()=>{
    const params = useParams();
    const id = params.id;
    const user = users.filter(i => i.id == id);
    console.log('user', user)
    return(
        <div>
            <div className="container-fluid">
                <div className="row text-light bg-primary">
                    <div className="col-md-9"><a href="/contact"><h4><i class="fa-solid fa-arrow-left-long text-light"></i></h4></a></div>
                    <div className="col-md-1"><h4><i class="fa-solid fa-video"></i></h4></div>
                    <div className="col-md-1"><h4><i class="fa-solid fa-phone"></i></h4></div>
                    <div className="col-md-1"><h4><i class="fa-solid fa-ellipsis-vertical"></i></h4></div>
                </div>
                <div className="row text-light" style={{backgroundImage: 'url('+user[0].avatar+')'}} >
                    <div className="col-md-12" style={{marginTop:"300px"}}>
                        <h3>{user[0].nickname}</h3>
                    </div>
                    <div className="col-md-12">
                        <small>last seeb at 12:03AM</small>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-primary mb-3 mt-2">
                        <b>Info</b>
                    </div>
                    <div className="col-md-12">
                        {user[0].phone}
                        <br/>
                        <small>mobile</small>
                        <hr/>
                    </div>
                    <div className="col-md-12">
                        non
                        <br/>
                        <small>user name</small>
                        <hr/>
                    </div>
                    <div className="col-md-12">
                        Notification
                        <br/>
                        <small>off</small>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;
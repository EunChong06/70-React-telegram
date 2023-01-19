import { useEffect } from "react";

const Logout = () => {
    const local = localStorage.getItem('id');
    const Logged = () => {
        if (local == null) {
            window.location.href = "/telegram";
        }
    }
    useEffect(() => {
        Logged();
    }, [])
    const Exit = () => {
        localStorage.removeItem('id');
        window.location.href = '/';
    }
    return (
        <div>
            <div className="container text-dark  mt-2">
                <div className="row">

                    <div className="col-md-12 mt-2">
                        <button className="form-control">Edit Name</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mt-2">
                        <button className="form-control">Set New Photo or Video</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mt-2">
                        <button className="form-control" onClick={Exit}>Log Out</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Logout;
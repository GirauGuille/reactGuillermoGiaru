import React from "react";

const Loading = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12 text-center ">
                    <button className="btn bg-black" type="button" disabled>
                        <span className="spinner-border spinner-border-sm text-warning" role="status" aria-hidden="true"></span>
                        <span className="visually-hidden">Loading...</span>
                    </button>
                </div>
            </div>
        </div>
    )
    
}

export default Loading;
import React from "react";
import { getData } from "../utils/data";

function NoteDetail({ show, onHide, title, body }) {
    return (
        <div className={`modal fade ${show ? "show" : ""}`} tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none' }}>
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                <div 
                    className="modal-content bg-light text-dark"
                    style={{
                        border: "2px solid #7f36db",
                        borderRadius: "25px",
                        boxShadow: "0px 0px 10px 3px #7f36db",
                    }}
                >
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold">{title}</h5>
                        <button type="button" className="btn-close" onClick={onHide}></button>
                    </div>
                    <div className="modal-body">
                        <p>{body}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NoteDetail;

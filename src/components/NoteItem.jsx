import React, { useState } from "react";
import NoteDetail from "./NoteDetail";

function formatDate(inputDate) {
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

    const date = new Date(inputDate);
    const dayOfWeek = days[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;
}

function NoteItem({ title, body, id, createdAt, archived, onDelete, onArchive }) {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
      setShowModal(true);
    };
  
    const handleHideModal = () => {
      setShowModal(false);
    };
    
    return (
        <div className="col-lg-4">
            <div
                className="card my-4 p-2 bg-dark text-light"
                style={{
                    border: "2px solid #7f36db",
                    borderRadius: "25px",
                    boxShadow: "0px 0px 10px 3px #7f36db",
                    height: "350px",
                }}
            >
                <div className="card-body">
                    <div style={{
                        height: "50px",
                        overflow: "hidden",
                    }}>
                        <h5 className="card-title fw-bold text-center">{title}</h5>
                    </div>
                    <p className="text-center">{formatDate(createdAt)}</p>
                    <hr></hr>
                    <p
                        className="card-text"
                        style={{
                            textAlign: "justify",
                            height: "135px",
                            overflow: "hidden",
                        }}
                    >
                        {body}
                    </p>
                </div>
                <div className="d-flex justify-content-center mb-2">
                    <a
                        className="btn"
                        title="Detail"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        onClick={handleShowModal}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#0077FE" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                        </svg>
                    </a>
                    <a
                        className="btn mx-3 note-item__delete"
                        title="Hapus"
                        onClick={() => onDelete(id)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                        </svg>
                    </a>
                    {
                        !archived ?
                            <a
                                className="btn"
                                title="Arsipkan"
                                onClick={() => onArchive(id)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="yellow" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                                </svg>
                            </a> :
                            <a
                                className="btn"
                                title="Pindahkan"
                                onClick={() => onArchive(id)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="yellow" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
                                </svg>
                            </a>
                    }
                </div>
            </div>
            {showModal && <NoteDetail show={showModal} onHide={handleHideModal} id={id}/>}
        </div>
    );
}

export default NoteItem;

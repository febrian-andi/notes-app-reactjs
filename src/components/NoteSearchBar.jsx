import React from "react";

function NotesSearchBar({ onSearch }) {
    return (
        <div className="d-flex justify-content-center">
            <form style={{ width: "50%" }}>
                <div className="d-flex mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="search-bar"
                        placeholder="Cari catatan..."
                        onChange={onSearch}
                    />
                </div>
            </form>
        </div>
    );
}

export default NotesSearchBar;

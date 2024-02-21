import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            titleError: null,
            maxTitleLength: 50
        };
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
    onTitleChangeEventHandler(event) {
        const { value } = event.target;
        this.setState({
            title: value,
            titleError: null
        });
    };
    onBodyChangeEventHandler(event) {
        this.setState({
            body: event.target.value,
        });
    };
    onSubmitEventHandler(event) {
        event.preventDefault();
        const { title, body } = this.state;
        if (title.length === 0 || body.length === 0) {
            this.setState({
                titleError: "Judul catatan atau isi catatan tidak boleh kosong",
            });
        } else {
            this.props.addNote({
                title,
                body
            });
            this.setState({
                title: "",
                body: "",
                titleError: null,
            });
        }
    };
    render() {
        const { title, body, titleError, maxTitleLength } = this.state;
        const remainingChars = maxTitleLength - title.length; // Menghitung sisa karakter untuk judul
        return (
            <div className="my-3">
                <form onSubmit={this.onSubmitEventHandler}>
                    {titleError && (
                        <div className="alert alert-danger" role="alert">
                            {titleError}
                        </div>
                    )}
                    <div className="mb-4">
                        <input
                            type="text"
                            className="form-control bg-dark text-light border-0 p-2 mb-1"
                            id="title"
                            name="title"
                            placeholder="Judul Catatan"
                            maxLength={maxTitleLength}
                            style={{
                                border: "2px solid #ffffff",
                                borderRadius: "8px",
                                boxShadow: "0px 0px 5px 1px #ffffff",
                            }}
                            value={title}
                            onChange={this.onTitleChangeEventHandler}
                        />
                        <p className="text-muted">{remainingChars} karakter tersisa</p>                        
                    </div>
                    <textarea
                        className="form-control bg-dark text-light border-0 p-2 mb-3"
                        id="body"
                        name="body"
                        placeholder="Isi Catatan"
                        style={{
                            border: "2px solid #ffffff",
                            borderRadius: "8px",
                            boxShadow: "0px 0px 5px 1px #ffffff",
                            height: "150px",
                        }}
                        value={body}
                        onChange={this.onBodyChangeEventHandler}
                    />
                    <div className="d-flex flex-column">
                        <button
                            type="submit"
                            className="btn text-light fw-bold p-2"
                            style={{
                                backgroundColor: "#7f36db",
                                borderRadius: "8px",
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = "#6a2aa7"}
                            onMouseLeave={(e) => e.target.style.backgroundColor = "#7f36db"}
                        >Tambah Catatan</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default NoteInput;

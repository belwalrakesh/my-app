import React, { useState } from 'react'



export default function Home(props) {
    const handleUpClick = () => {

        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleLoClick = () => {

        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case", "success");
    }
    const handleclearClick = () => {

        let newText = "";
        setText(newText)
        props.showAlert("clear succesfully", "success");
    }
    const handlecopyClick = () => {
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy successfull", "success");
    }
    const handleExtraClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space removed succesfully", "success");

    }


    const handleOnClick = (event) => {

        setText(event.target.value);

    }




    const [text, setText] = useState("");

    return (
        <>
            <div className="container card-body text-center" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h5 className="card-title my-2" >Enter Text Below</h5>
                <div className="form-group">

                    <textarea className="form-control my-2" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'dark' ? 'white' : 'black' }} id="exampleFormControlTextarea1" onChange={handleOnClick} value={text} placeholder="Input Text" rows="8"></textarea>


                </div>
                <button className="btn btn-success my-4 my-sm-0" onClick={handleUpClick} >Upper Case</button>
                <button className="btn btn-warning mx-4 my-4 my-sm-0" onClick={handleLoClick} >Lower Case</button>
                <button className="btn btn-primary my-4 my-sm-0" onClick={handleExtraClick} >Remove Extra Space</button>
                <button className="btn btn-secondary mx-4 my-sm-0" onClick={handlecopyClick} >Copy</button>
                <button className="btn btn-danger my-4 my-sm-0" onClick={handleclearClick} >Clear</button>


            </div>
            <div className="container" >
                <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Your Text Summary</h1>
                <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}> {text.length === (0) ? text.length : text.split(" ").length} words and {text.length} characters</p>

                <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}> Preview </h1>
                <div className="card">
                   
                    <div className="card-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'dark' ? 'white' : 'black' }}>
                        {text}
                    </div>
                </div>
                <br/>
            </div>

        </>
    )
}

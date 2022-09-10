import React, { useState } from 'react'



export default function TextForm(props) {
    const [text, setText] = useState("");
    //setText("Hello World");

    const handleUpClick = (event)=>{
        event.preventDefault()
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleDownClick = (event) =>{
        event.preventDefault()
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClear = (event) =>{
        event.preventDefault()
        let newText = " ";
        setText(newText);
    }

    const handleOnChange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    } 

  return (
    <div>
        <h1>{props.heading}</h1>
        <form>
            
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Text box</label>
                <textarea type="email" className="form-control" value={text} id="exampleInputEmail1" rows="8" aria-describedby="emailHelp" onChange={handleOnChange} placeholder="Enter text" />
                <small id="emailHelp" className="form-text text-muted">Enter text to use the operations</small>
            </div>
            {/* <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div> */}

            <div className="container m-0 p-0">
                <h2>Text summary</h2>
                <p>{text.trim().split(" ").length} words and {text.trim().length} characters</p>
                <p>{0.008 * (text.trim().split(" ").length)} Minutes Read</p>
            </div>
            <button className="btn btn-secondary" onClick={handleDownClick}>Convert to Lowercase</button> 
            <button className="btn btn-secondary mx-4 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-secondary my-1" onClick={handleClear}>Clear the Text</button> <br/> <br/>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <h2 className='my-2'>Preview: </h2>
        <p>{text.trim()}</p>
    </div>
  )
}

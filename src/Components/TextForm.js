import React, {useState} from 'react'

//useState helps to amke a state variable

export default function TextForm(props) {
    const [text, setText] = useState(''); 
    // text = "new text" // Wrong way to change the state
    // setText = ("new text"); // Correct way to change the state

    function handleClick(){
        // console.log("Uppercase was clicked", + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    function handleOnChange(event){
        console.log("On Change");
        setText(event.target.value);
    }

    function handleLoClick(){
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    function handleClearClick(){
        let newText = ('');
        setText(newText);
        props.showAlert("Text is cleared!", "success");
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text is copied to clipboard!", "success");
    }

    function handleExtraSpacess (){
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success");
    }



  return (
    <>
    <div className='container' style= {{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange} style= {{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} value={text}></textarea>
        </div>
        <button className='btn btn-primary mx-1 my-1' onClick={handleClick}>Covert to uppercase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Covert to lowercase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleExtraSpacess}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style= {{color:props.mode==='dark'?'white':'#042743'}}> 
        <h2>Your text summary</h2>
        {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
        <p>{text.split(" ").filter((element)=>{return element.length}).length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length}  minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something into the textbox above to preview it here."}</p>
    </div>
    </>
  )
}

// my-2 or 3gives margin from the top
import React,{useState} from 'react';


function Form (){

const [message,setMessage]=useState("")
const [words,setWords]=useState([])
const [word,setWord]=useState("")
const [full,setFull]=useState(false)
const [btn,setBtn]=useState(false)



    // FormMethods
    const handleSubmit=(event)=>{
        event.preventDefault();
      
      
    }

    const  AddWord=()=>{

        if(words.length<3){
               setWords([...words,word])
             setWord("")
        }
        if(words.length===2){
            setMessage("now you may click on show me messsage")
            setBtn(true)
            setTimeout(() => {
                setMessage("")
            }, 3000);
            setWord("")
        }
     


    }
 const showMessage=()=>{

        if(words.length<3){
        setMessage("please add atleast 3 words")
        setTimeout(() => {
            setMessage("")
        }, 2000);
        }else{
            setFull(true)
        }
 
        
    }


 
return(

<article>
    <h1>Generate Password</h1>
    
    {full? <h1>done</h1>:    <form onSubmit={handleSubmit} className="flex">
 
        <div className="container">
  
        <div>
        <label>Add word </label>
        </div>
        <div className="input">
        <input name="message" value={word} onChange={(e)=>setWord(e.target.value)} />
        </div>

       <div className="button">   
       <p>{message}</p>
        <button onClick={showMessage} >Shwo me the Message</button>
        <button onClick={AddWord} disabled={btn}>Add new word</button>
        </div>
  </div>
    </form> }
 
</article>
)
    }






export default Form;
 
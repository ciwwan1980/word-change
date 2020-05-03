import React,{useState} from 'react';


function Form (){

const [message,setMessage]=useState("")

    // FormMethods
    const handleSubmit=(event)=>{
        event.preventDefault();
      
      
    }

    const  messageChange=(event)=>{

        const {name,value} = event.target;


    }
 const  wordChange=(event)=>{

         const{name,checked} = event.target;
    
 
        
    }


 
return(

<article>
    <h1>Generate Password</h1>
    
    
    <form onSubmit={handleSubmit} className="flex">
 
        <div className="container">
  
        <div>
        <label>Add word </label>
        </div>
        <div className="input">
        <input name="message" value={message} />
        </div>

       <div className="button">   
        <button onChange={wordChange}>Shwo me the Message</button>
        <button onChange={messageChange}>Add new word</button>
        </div>
  </div>
    </form>
</article>
)
    }






export default Form;
 
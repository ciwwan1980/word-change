import React,{useState} from 'react';


function Form (){

const [message,setMessage]=useState("")
const [words,setWords]=useState([])
const [word,setWord]=useState("")
const [full,setFull]=useState(false)



    // FormMethods
    const handleSubmit=(event)=>{
        event.preventDefault();
      
      
    }

    const  AddWord=()=>{

        if(words.length<3){
               setWords([...words,word])
             setWord("")
        }else{
            setMessage("now you may click on show me messsage")
        }
     


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
        <input name="message" value={word} onChange={(e)=>setWord(e.target.value)} />
        </div>

       <div className="button">   
        <button onClick={wordChange}>Shwo me the Message</button>
        <button onClick={AddWord}>Add new word</button>
        </div>
  </div>
    </form>
</article>
)
    }






export default Form;
 
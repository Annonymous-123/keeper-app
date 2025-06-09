import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
const[notes,setNotes]=useState([]);
function onClickAdd(note){
    setNotes((prevValue)=>{
      return[...prevValue,note]
    })
  }
  function onClickDelete(id){
    setNotes((prevNotes)=>{
      
    return prevNotes.filter((note,index)=>{
      return id!==index})})
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={onClickAdd}/>
       {notes.map((note,index)=>{
        return <Note
                 onClick={onClickDelete}
                 key={index} id={index} 
                 title={note.title} 
                 content={note.content}/>;
                  })}
         
      <Footer />
    </div>
  );
}

export default App;

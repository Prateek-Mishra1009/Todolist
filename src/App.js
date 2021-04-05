import React, { useState } from 'react';

const App=()=>
{
  const [inputList,setInputList]=useState("");
  const [Items,setItems]=useState([]);
  const listofItems=()=>{
    setItems((olditems)=>{
      return [...olditems,inputList];
    } )

  };
const itemEvent=(event)=>
{
setInputList(event.target.value);
};

 return(
<>
<div className='main_div'>
<div className='center_div'>
  <br />
  <h1> ToDo List</h1>
  <br />
  <input type='text' placeholder="ADD AN ITEM" onChange={itemEvent}  />
  <button onClick={listofItems}>   +     </button>
  

 <ol>
      {Items.map( (itemval)=>{
        return<li>{itemval}</li>
      })}
 </ol>

</div>

 </div>



</>

 );
};export default App
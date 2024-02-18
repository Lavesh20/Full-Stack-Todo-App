import { useState } from "react";

export function CreateTodo(props){

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    return <div>
        <input type="text" placeholder="Title" onChange={function(e){
            const value = e.target.value;
            setTitle(value)
        }}/><br /><br />


        <input type="text" placeholder="Description" onChange={function(e){
            const value = e.target.value;
            setDescription(value)
        }}/><br /><br />


        <button onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Content-Length": JSON.stringify({
                        title: title,
                        description: description
                    }).length.toString()
                }
            })
            .then(async function(res){
                const json = await res.json();
                alert("todo addded");
            })
        }}>Add a todo</button>
    </div>
}
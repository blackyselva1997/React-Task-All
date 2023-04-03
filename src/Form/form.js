import React, { useState } from 'react'

const Form = () => {
    const [taskName, setTaskName] = useState("");
    const [taskDes, setTaskDes] = useState("");
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [check, setCheck] = useState();
    const [tasks, setTasks] = useState([]);

    const handleInputChange = (e) => {
        console.log(e.target.value, e.target.name);
        if (e.target.name === "name") {
            setTaskName(e.target.value);
        } else {
            setTaskDes(e.target.value);
        }
    }
    const checkBox = (e) => {
        if (e.target.checked) {
            setCheck(true);
        } else {
            setCheck(false);
        }
    }
    const handleSubmit = () => {
        setIsFormSubmitted(true);
        console.log(taskName, taskDes);
        if (taskName === "" || taskDes === "") return;
        console.log(taskName, taskDes, check);
        setTasks([...tasks, {name: taskName, description: taskDes, complete: check}]);
        setTaskName("")
        setTaskDes("")
        setCheck("")
    }
    const Delete = (index) => {
      let newtask = [...tasks]
      newtask.splice(index,1)
      setTasks(newtask)
    }
  return (
    <>
      <h1>Form</h1>
      <form>
        <input name="name" value={taskName} onChange={handleInputChange} />
        {taskName === "" && isFormSubmitted && <p>Task name is required.</p>}
        <input name="des" value={taskDes} onChange={handleInputChange} />
        {taskDes === "" && isFormSubmitted && <p>Task name is required.</p>}
        <input type={"checkbox"} value={check} name="box" onChange={checkBox} />
      </form>
      <button onClick={() => handleSubmit()}>Submit</button>
        
      <table>
        <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Description</th>
            <th>Complete</th>
            <th>Delete</th>
        </tr>
        {tasks.map((value, index) => {
          return (<tr key={index}>
            <td>{index+1}</td>
            <td>{value.name}</td>
            <td>{value.description}</td>
            <td>{value.complete ? "true": "false"}</td>
            <td><button onClick={(e) => Delete(index)}>delete</button></td>    
            </tr>
      )})}
      </table>
    </>
  );
}

export default Form

















// import React, { useState } from 'react'

// const Form = () => {
//     const [taskName, setTaskName] = useState("");
//     const [taskDes, setTaskDes] = useState("");
//     const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//     const [check, setCheck] = useState();
//     const [tasks, setTasks] = useState([]);

//     const handleInputChange = (e) => {
//         console.log(e.target.value, e.target.name);
//         if (e.target.name === "name") {
//             setTaskName(e.target.value);
//         } else {
//             setTaskDes(e.target.value);
//         }
//     }
//     const checkBox = (e) => {
//         if (e.target.checked) {
//             setCheck(true);
//         } else {
//             setCheck(false);
//         }
//     }
//     const handleSubmit = () => {
//         setIsFormSubmitted(true);
//         console.log(taskName, taskDes);
//         if (taskName === "" || taskDes === "") return;
//         console.log(taskName, taskDes, check);
//         setTasks([...tasks, {name: taskName, description: taskDes, complete: check}]);
//         setTaskName("")
//         setTaskDes("")
//         setCheck("")
//     }
//   return (
//     <>
//         <h1>Form</h1>
//         <form>
//             <input name='name' value={taskName} onChange={handleInputChange}/>
//             {taskName === "" && isFormSubmitted && <p>Task name is required.</p>}
//             <input name='des' value={taskDes} onChange={handleInputChange}/>
//             {taskDes === "" && isFormSubmitted && <p>Task name is required.</p>}
//             <input type={'checkbox'} value={check} name="box" onChange={checkBox}/>
//         </form>
//         <button onClick={() => handleSubmit()}>Submit</button>

//         <div>
//             {tasks.map((value, index) => {
//                 return (
//                     <div key={index}>
//                         <h1>{value.name}: {value.description} : {value.complete ? "true": "false"}</h1>
//                     </div>
//                 )
//             })}
//         </div>
//     </>
//   )
// }

// export default Form
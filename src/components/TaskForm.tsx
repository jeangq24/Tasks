import {ChangeEvent, FormEvent, useState} from 'react';
import {BsFillPatchPlusFill} from "react-icons/bs";
import { Task } from '../interfaces/Task';

interface Props {
    newAddTask: (task: Task)=>void,
    
}
type HandleInputChange = ChangeEvent<HTMLInputElement|HTMLTextAreaElement>

export default ({newAddTask}: Props)=> {

    const [task, setTask] = useState({
        title: "",
        description: ""
    });

    const handleInputChange = (e: HandleInputChange) => {
        const {name, value} = e.target;
        setTask({
            ...task, [name]: value
        });
    };

    const numberRamdon = ():number => {
      return new Date().getTime()
    }
    const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        newAddTask({...task, id: numberRamdon(), completed: false});
        setTask({
            title: "",
            description: ""
        })
    };


    return (
        <div className="card card-body bg-secondary text-dark">
            <h1>Añadir tarea</h1>
            <form onSubmit={handleNewTask}>
                <input type="text" placeholder="Write a title" name="title" className="form-control mb-3 rounded-0 shadow-none border-0" onChange={handleInputChange} value={task.title}/>

                <textarea  name="description" rows={2} placeholder="Write a description" className="form-control mt-3 shadow-none rounded-0" onChange={handleInputChange} value={task.description}></textarea>

                <button className="btn btn-primary mt-3">
                    Save
                    <BsFillPatchPlusFill/>
                </button>
            </form>
        </div>
    )
}
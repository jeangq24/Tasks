import { Task } from "../interfaces/Task";
import {FcApproval, FcCancel, FcHighPriority} from "react-icons/fc";
interface Props {
    task: Task,
    deleteTask: (id: number)=>void
    editTask: (id: number)=>void
    
}

export default ({editTask, task, deleteTask}: Props)=> {
    return (
        <div className="card card-body bg-secondary rounded-0 text-dark">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button className="btn btn-danger" onClick={()=>deleteTask(task.id)}>
                Delete
                <FcHighPriority/>
            </button>
            {!task.completed?
            <button className="btn btn-success" onClick={()=>editTask(task.id)}>
                Completed
                <FcApproval/>
            </button>
            :
            <button className="btn btn-warning" onClick={()=>editTask(task.id)}>
                Cancel
                <FcCancel/>
            </button>
            }
        </div>
    )
}
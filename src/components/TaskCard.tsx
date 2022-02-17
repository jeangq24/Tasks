import { Task } from "../interfaces/Task"

interface Props {
    task: Task,
    deleteTask: (id: number)=>void
}

export default ({task, deleteTask}: Props)=> {
    return (
        <div className="card card-body bg-secondary rounded-0 text-dark">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button className="btn btn-danger" onClick={()=>deleteTask(task.id)}>
                Delete
            </button>
        </div>
    )
}
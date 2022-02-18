import { Task } from '../interfaces/Task';
import TaskCard from './TaskCard';

interface Props {
    tasks: Task[]
    deleteTask: (id: number)=>void
    editTask: (id: number)=>void
    cancelCompletedTask: (id: number)=>void
}

export default function TaskList({ editTask, tasks, deleteTask, cancelCompletedTask }: Props) {
    return (

        <>
        {tasks.map(task => (
            <div className="col-md-4 pb-3" key={task.id}>
                <TaskCard cancelCompletedTask={cancelCompletedTask} editTask={editTask} deleteTask={deleteTask} task={task}/>

            </div>
        ))}
        </>

    )
}
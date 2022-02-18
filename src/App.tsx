import './App.css';
import { useState } from 'react';
import Logo from './logo.svg';
import { Task } from './interfaces/Task';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

interface Props {
  title: string
}

export function App({ title }: Props) {

  const [tasks, setTasks] = useState<Task[]>([{
    id: 1,
    title: "react typescript",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    completed: false
  }]);

  const newAddTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => {
      return id!==task.id
    }));
  
  }
  const completedTask = (id: number) => {
      let newTasks: Task[]= [...tasks];
      tasks.forEach((task,index)=>{
        if (task.id === id) newTasks[index].completed = !task.completed;
      });
      setTasks([...newTasks]);
  }



  

  return (

    <div className="bg-dark text-white" style={{ height: '100vh' }}>

      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={Logo} alt="React Logo" style={{ width: '4rem' }} />
            {title}
          </a>
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm newAddTask={newAddTask}/>
          </div>
          <div className="col-md-8">
            <div className="row">

              <TaskList editTask={completedTask} deleteTask={deleteTask} tasks={tasks} />

            </div>
          </div>
        </div>
      </main>

    </div>
  );
}



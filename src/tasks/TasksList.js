import React, { useState } from 'react'
import Form from './Form'
import Task from './Task';

function TasksList() {
    const [tasks, setTasks] = useState([])

    const addTask = task => {
        // Filtering spaces
        if (!task.text || /^\s*$/.test(task.text)) {
            return
        }

        const newTasks = [task, ...tasks]

        setTasks(newTasks)

    };

    const updateTask = (taskId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setTasks(prev => prev.map(item => (item.id === taskId ? newValue : item)))
    }

    const removeTask = id => {
        const removeArr = [...tasks].filter(task => task.id !== id)

        setTasks(removeArr)
    }

    const completeTask = id => {
        let updatedTasks = tasks.map(task => {
            if (task.id === id) {
                task.isComplete = !task.isComplete;
            }
            return task;
        })
        setTasks(updatedTasks);
    }

  return (
    <div>
        <Form onSubmit={addTask}/>
        <Task tasks={tasks} completeTask={completeTask} removeTask={removeTask} updateTask={updateTask}/>
    </div>
  )
}

export default TasksList
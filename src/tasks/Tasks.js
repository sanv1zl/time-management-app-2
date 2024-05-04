import TasksList from "./TasksList"

export default function Tasks() {
    return (<>
    <ul className="task-ul">
        <li>
            <div className="tasks-left">
                <h1>Options</h1>
            </div>
        </li>
        <li><div className="tasks-right">
                <TasksList />
                <h1 className="task-header">Tasks</h1>
            </div>
        </li>
    </ul>
    </>)
}
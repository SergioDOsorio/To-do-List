function Task({tasks}) {
    console.log(tasks)
    return (
        <>
            {tasks.map((task, taskIndex)=>(
                <li key={taskIndex}>{task}</li>
            ))}
        </>
    )

}
export default Task;
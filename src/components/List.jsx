import plusIcon from '../img/plus-regular-240.png'
import Task from './Task';
function List({ listName, listTasks }) {
   
    return (
        <>
            <div className="h-5/6">
                <h2 className="text-3xl ">{listName}</h2>
                <ul className='p-4'>
                    <Task tasks={listTasks}></Task>
                </ul>
            </div>
            <div className="h-9 bg-neutral-800">
                <hr className='border-neutral-50' />
                <div className='flex gap-2 mt-1 '>
                    <img src={plusIcon} alt="Add icon" className='w-8 ' />
                    <input type="text" className="w-full
                    bg-transparent"
                        placeholder='Add a new task' />
                </div>

            </div>
        </>
    )
}

export default List;
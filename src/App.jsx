import { useState } from 'react'
import './App.css'
import ListName from './components/ListName'
import sunIcon from './img/sun-regular-240.png';
import starIcon from './img/star-regular-240.png';
import calendarIcon from './img/calendar-alt-regular-240.png';
import homeIcon from './img/home-alt-regular-240.png';
import List from './components/List';
import plusIcon from './img/plus-regular-240.png'


function handleCreateList() {
  userLists.push( {name: "test", img: sunIcon, list: []})
  return
}

function App() {
  const [selectedList, setSelectedList] = useState("My day");
  const lists = [
    { name: "My day", img: sunIcon, tasks: ["Comprar huevos","Sacar al perro"] },
    { name: "Important", img: starIcon, tasks: [] },
    { name: "Planned", img: calendarIcon, tasks: [] },
    { name: "Tasks", img: homeIcon, tasks: [] }
  ];
  const userLists = [
    
  ];

  const selectedListComplete = lists.find(list => list.name === selectedList)
  const tasks = selectedListComplete.tasks
 
  return (
    <>
      <div className='flex h-screen text-neutral-50 font-sans'>
        <div className='w-1/5 bg-neutral-800 text-lg'>
          <div className='h-5/6'>
            <h1 className='text-5xl text-blue-400  text-center cursor-default mt-3 '>To-Do</h1>
            <div className='w-full'>
              <ul className='flex flex-col w-full p-3 gap-2'>
                {lists.map((list, index) => (
                  <ListName
                    key={index}
                    listName={list.name}
                    listImg={list.img}
                    onSelect={setSelectedList}
                    isSelected={selectedList === list.name}
                  />
                ))}
              </ul>
            </div>
            <hr className='border-slate-400' />
            <div className='p-3'>Listas
              {userLists.map((userList, index) => (
                <ListName
                  key={index}
                  listName={userList.name}
                  listImg={userList.img}
                  onSelect={setSelectedList}
                  isSelected={selectedList === userList.name}></ListName>
              ))}
            </div>
          </div >
          <div>
            <hr className='border-slate-400' />
            <div className='p-3 text-blue-400 flex gap-2'>
              <img src={plusIcon} alt="Add icon" className='w-8 ' />
              <button onClick={handleCreateList} className='text-xl'>Create new list</button>
            </div>
          </div>
        </div>
        <div className='w-4/5 bg-neutral-900 p-4' >
          <div className='bg-neutral-800 rounded p-3 h-full flex flex-col justify-around	'>
            {
              <List listName={selectedList} listTasks={tasks}></List>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App

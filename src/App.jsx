import { useState } from 'react'
import './App.css'
import ListName from './components/ListName'

function handleCreateList() {
  return
}

function App() {
  const [selectedList, setSelectedList] = useState(null);
  const lists = ["My day", "Important", "Planned", "Tasks"];

  return (
    <>
      <div className='flex h-screen bg-gray-300 text-neutral-50'>
        <div className='w-1/5 bg-neutral-800 text-lg'>
          <h1 className='text-2xl text-blue-400 font-bold text-center cursor-default'>To-Do Lists</h1>
          <div className='w-full'>
            <ul className='flex flex-col w-full p-3 gap-2'>
              {lists.map((listName, index) => (
                <ListName
                  key={index}
                  listName={listName}
                  listImg={`${listName}-regular-240.png`}
                  onSelect={setSelectedList}
                  isSelected={selectedList === listName}
                />
              ))}
            </ul>
          </div>
          <hr className='border-neutral-50' />
          <div className='p-3'>Listas
            {lists.map((_, index) => (
              <div key={index}></div>
            ))}
          </div>
          <hr className='border-neutral-50' />
          <div className='p-3 text-blue-400'>
            <button onClick={handleCreateList}>Create new list</button>
          </div>
        </div>
        <div className='w-4/5 bg-neutral-900'>Hola</div>
      </div>
    </>
  )
}

export default App

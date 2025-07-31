import { useState, useRef } from 'react'
import { DeletionDialog } from './alertDialog'

let id = 0

const Todo = () => {
  const [n, setn] = useState(0)
  const [task, setTask] = useState('')
  const [tasklist, setTasklist] = useState([])
  const dragItem = useRef(null)
  const dragOverItem = useRef(null)

  const handleDragStart = (i) => {
    dragItem.current = i
  }

  const handleDragEnter = (i) => {
    dragOverItem.current = i
  }

  const handleDrop = () => {
    const items = [...tasklist]
    const draggedSong = items[dragItem.current]
    items.splice(dragItem.current, 1)
    items.splice(dragOverItem.current, 0, draggedSong)

    setTasklist(items)
    dragItem.current = null
    dragOverItem.current = null
  }

  const handleOnChange = (e) => {
    setTask(e.target.value)
  }

  const handleAdd = () => {
    if (task.trim() === ''){
      return
    }
    setTasklist([
      { id: id++, task: task, checked: false},
      ...tasklist
    ])
    setTask('')
    setn(n+1)
  }

  const toggleCheck = (titem) => {
    setTasklist(tasklist.map(t => {
      if (t === titem){
        t.checked = !t.checked
      }
      return t
    }))
    if (titem.checked === true){
      setn(n => n-1)
    }
    else {
      setn(n => n+1)
    }
  }


  return (
    <div className="max-w-2xl w-full mx-auto mt-20 px-5 bg-gradient-to-r from-indigo-900 via-black to-sky-900 border-2 border-blue-200 text-center font-[Open_Sans]">
      <p className='font-bold text-5xl text-blue-200 my-6'>To-Do List App</p>
      <p className='font-medium italic text-2xl text-blue-200 my-9'>
        Your go-to task application, where you can create, re-order, delete or manage your daily to-do tasks!
      </p>

      <div className='space-x-6 space-y-7'>
        <input className='border-2 border-blue-950 bg-blue-200 text-cyan-700 font-semibold w-7/10 px-3 py-1.5'
        placeholder='Enter your task...' value={task} onChange={handleOnChange} />

        <button className='bg-blue-200 text-cyan-800 hover:bg-blue-300 hover:scale-104 transition-all duration-300 font-semibold rounded cursor-pointer px-4 py-1.5' 
        onClick={handleAdd}>Add</button>
      </div>


      <ul className='flex flex-col gap-3 items-center my-12'>
        {/* format for each task item (titem) */}

        {tasklist.map((titem, index) =>
          <li 
            className='w-9/10 px-3 py-2 border-2 bg-blue-200 text-cyan-700 font-semibold capitalize flex justify-between transition-all duration-300 ease-in-out hover:bg-gray-200' 
            key={titem.id} 
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragEnter={() => handleDragEnter(index)}
            onDragEnd={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <div className='flex gap-4'>
              <span className='text-2xl'>≡</span>
              <input className='scale-140' type="checkbox" checked={titem.checked} onChange={()=> toggleCheck(titem)}/>
              <p className={titem.checked? 'line-through mt-1' : 'mt-1'} >{titem.task}</p>
            </div>
            
              <DeletionDialog list={tasklist} setList={setTasklist} titem={titem} n={n} setn={setn} />
            
          </li>
        )}
      </ul>

      {(n === 0 || tasklist.length === 0)? <span className='text-blue-200 text-lg'>You have no Pending Tasks!</span> 
      : <span className='text-blue-200 text-lg'>Pending Tasks: {n}</span>}

    </div>
  )
}

export default Todo
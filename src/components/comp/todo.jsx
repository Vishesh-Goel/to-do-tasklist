import { useState, useEffect, useRef } from 'react'
import { DeletionDialog } from './alertDialog'
import { BiTask } from 'react-icons/bi'
import { motion } from "framer-motion"

let id = 0

const Todo = () => {
  const [n, setn] = useState(localStorage.getItem("pendingCount")? JSON.parse(localStorage.getItem("pendingCount")) : 0)
  const [task, setTask] = useState('')
  const [tasklist, setTasklist] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")) : [])
  const dragItem = useRef(null)
  const dragOverItem = useRef(null)


  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(tasklist))
    localStorage.setItem("pendingCount", JSON.stringify(n))
  },[tasklist, n])


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

  const handleDelete = (titem) => {
    setTasklist(tasklist.filter(t => t.id !== titem.id))
    if (titem.checked === true){
      setn(n)
    }
    else {
      setn(n => n-1)
    }
}

  const handleDeleteAll = () => {
    setTasklist([])
    setn(0)
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
    <div className="max-w-2xl w-full mx-auto mt-20 px-5 bg-gradient-to-r from-indigo-900 via-black to-sky-900 border-2 border-blue-200 text-center font-poppins">
      <p className='poppins-semibold text-5xl text-blue-200 my-10 flex justify-center gap-5'> <BiTask/> To-Do List App</p>
      <p className='text-xl text-blue-200 my-10'>
        Your go-to task application, where you can create, re-order, delete or manage your daily to-do tasks!
      </p>

      <div className='space-x-6 space-y-7'>
        <input className='border-2 border-blue-950 bg-blue-200 text-cyan-700 poppins-semibold w-7/10 px-3 py-1.5'
        placeholder='Enter your task...' value={task} onChange={handleOnChange} />

        <button className='bg-blue-200 text-cyan-800 hover:bg-blue-300 hover:scale-104 transition-all duration-300 poppins-semibold rounded cursor-pointer px-4 py-1.5' 
        onClick={handleAdd}>Add</button>
      </div>


      <ul className='flex flex-col gap-3 items-center my-12'>
        {/* format for each task item (titem) */}

        {tasklist.map((titem, index) =>
          <motion.li 
            className='w-9/10 px-3 py-2 border-2 bg-blue-200 text-cyan-700 poppins-medium capitalize flex justify-between transition-all duration-300 ease-in-out hover:bg-sky-100' 
            key={titem.id}
            layout
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragEnter={() => handleDragEnter(index)}
            onDragEnd={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            whileHover={{scale: 1.015}}
            whileTap={{scale: 0.95}}
            transition={{type: "keyframes", stiffness: 300, damping: 20}}
          >
            <div className='flex gap-4'>
              <span className='text-2xl'>≡</span>
              <input className='scale-140' type="checkbox" checked={titem.checked} onChange={()=> toggleCheck(titem)}/>
              <p className={`transition-all duration-800 mt-1 ${titem.checked? 'line-through text-gray-400' : ''}`} >{titem.task}</p>
            </div>
            
              <DeletionDialog func={() => handleDelete(titem)} message="Do you want to Delete this Task?" button_msg="Delete"/>
            
          </motion.li>
        )}
      </ul>

      <DeletionDialog func={handleDeleteAll} message="This will permanently delete all the tasks!!" button_msg='Delete All'/>

       
      <div className='text-blue-200 text-xl my-7'> {(n === 0 || tasklist.length === 0)? <p>You have no Pending Tasks!</p> : <p>Pending Tasks: {n} </p>}</div>

    </div>
  )
}

export default Todo

"use client"

import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")

  //maintask work
  const [mainTask, setMainTask] = useState<{ title: string; desc: string }[]>([])

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMainTask([...mainTask, { title, desc }])
    settitle("")
    setdesc("")
    console.log(mainTask)
  }

  const deleteHandler = (i: number) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setMainTask(copytask)
  }

  //maintask work
  let renderTask: React.ReactNode = <h2>No Task available</h2>

  //maintask work
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-8'>
          <div className='flex items-center justify-between w-2/3'>
            <h5 className='text-2xl flex justify-between mb-5'>{t.title}</h5>
            <h6 className='text-lg font-medium'>{t.desc}</h6>
          </div>

          <button
            onClick={() => {
              deleteHandler(i)
            }}
            className='bg-red-400 text-white px-4 py-2 rounded font-bold'
          >
            Delete
          </button>
        </li>
      )
    })
  }

  return (
    <div className='bg-green-100 min-h-screen'>
      <h1 className='bg-black text-white p-5 text-3xl sm:text-5xl font-bold text-center'>
        My Todo List
      </h1>

      <form onSubmit={submitHandler} className='flex flex-col sm:flex-row items-center'>
        <input
          type="text"
          className='text-xl sm:text-2xl border-zinc-800 border-2 m-4 sm:m-8 px-4 py-2 w-[90%] sm:w-auto'
          placeholder='Enter Title here'
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }}
        />

        <input
          type="text"
          className='text-xl sm:text-2xl border-zinc-800 border-2 m-4 sm:m-8 px-4 py-2 w-[90%] sm:w-auto'
          placeholder='Enter Description here'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}
        />

        <button className='bg-black text-white px-4 py-3 text-xl sm:text-2xl font-bold rounded m-4 sm:m-5'>
          Add Task
        </button>
      </form>

      <hr />

      <div className='p-4 sm:p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </div>
  )
}

export default page

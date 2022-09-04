import React, { useState } from 'react'

const InputTask = () => {
  const [term, setTerm] = useState('');
  const handleChange = e => {
    console.log(e.target.value);
    setTerm(e.target.value);
  }
  return (
    <>
    <form>
      <div className="mt-4 md:mt-10">
          <input value={term} onChange={handleChange} className='font-bold tracking-[1.2px] p-2 md:text-2xl w-[400px] text-slate-700 border-2 md:w-[600px] md:p-3 rounded-md focus:outline-purple-300 placeholder:pl-5 placeholder:font-normal' type="text" placeholder='Write your task...'/>
      </div>
    </form>
    </>
  )
}

export default InputTask
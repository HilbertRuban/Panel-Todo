import React from 'react'

const TaskPad = () => {
  // let a = ['hi','dlad','aenfkankj','afnenafja','aefnalnfk','hqeodandk','wndkjaenkjn','daenajnj','afnanfja'];
  let a = [];
  let list = a.map(item => (
    <>
    <div className="text-[30px] flex flex-col items-center relative top-10 h-[90px] font-[cursive]">
      {item}
      <span className="bg-slate-500 h-[2px] w-[100%]"></span>
    </div>
    </>
  ))
  return (
    <div className="
      bg-[#FFF]
        rounded-tl-[30px]
        rounded-tr-[30px]
        w-[60%] 
        min-h-[500px]
        overflow-y-hidden
        relative
        border-purple-300
        border-l-[12px]
        border-r-[12px]
        border-b-[12px]
        rounded-[10px]
        z-0
        ">
          <div className="
            bg-purple-300
              absolute
              w-[100%]
              h-[40px]
              rounded-tl-[20px]
              rounded-tr-[20px]
          ">
          </div>
          <p className='text-center underline decoration-slice text-[30px] pb-12 text-[#581c87] tracking-wider font-serif relative top-12'>Hilbert's Task</p>
          {list}
    </div>
  )
}

export default TaskPad
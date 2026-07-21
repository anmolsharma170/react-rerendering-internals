import { useState,memo, useCallback, useMemo } from 'react'
import './App.css'
import SlowComponent from './SlowComponent'
import Modal from './Modal'
// const MemoizedSlowComponent = memo(SlowComponent);

const MemoizedSlowComponent = memo(function ModifiedSlowComponent({time}){
  return <SlowComponent time={time}/>
})

function App() {
  const [isOpen,setIsOpen] = useState(false);
  const someFunction = useCallback(()=>{},[]);
  const timeArray = useMemo(()=>{
    return [1000];
  },[]);
  return (
    <>
    <button onClick={()=>setIsOpen(true)}>Open Modal</button>
    {isOpen && <Modal close={()=>setIsOpen(false)}  /> }
      <div>
      Something done here
      </div>
      <div>
        Something done here
      </div>
      <MemoizedSlowComponent time={1000} custom={someFunction}/>
      </>
  )
}

export default App

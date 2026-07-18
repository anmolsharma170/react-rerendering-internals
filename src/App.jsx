import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SlowComponent from './SlowComponent'
import Modal from './Modal'
import ButtonWithModal from './ButtonWithModal'
import RefactorComponent from './RefactorComponent'
function App() {
  return (
    <>
    <RefactorComponent>
      <>
      <div>
      Something done here
      </div>
      <ButtonWithModal/>
      <div>
        Something done here
      </div>
      <SlowComponent/>
      </>
    </RefactorComponent>
    </>
  )
}

export default App

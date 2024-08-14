import {State} from './Components/Hooks/State'
import { Crud } from './project/crud'
import { Toggle } from './project/Toggle'

function App() {
  return (
    <>
      <State/>
      <Toggle />
      <Crud/>
    </>
  )
}

export default App

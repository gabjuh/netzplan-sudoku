import './App.css'
import Step from './components/Step'
import Arrows from './components/Arrows'
import process from './datas/process'

function App() {

  return (
    <>
      {process.map((step, index) => (
        <Step 
          key={index}
          posX={step.posX}
          posY={step.posY}
          faz={step.faz}
          fez={step.fez}
          ps={step.ps}
          pn={step.pn}
          pd={step.pd}
          gp={step.gp}
          fp={step.fp}
          saz={step.saz}
          sez={step.sez}
          arrowTo={step.arrowTo && step.arrowTo}
        />
      ))}
      {/* {process.map((step, index) => (
        <Arrows 
          key={index}
          posX={step.posX}
          posY={step.posY}
          arrowTo={step.arrowTo && step.arrowTo}
          size={50}
          posStep={280}
        />
      ))} */}
    </>
  )
}

export default App

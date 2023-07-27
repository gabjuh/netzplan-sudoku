import './App.css'
import Step from './components/Step'
import Arrows from './components/Arrows';
import process from './datas/process'

function App() {

  return (
    <>    
      <div className="">
        <div 
          className="bg-[#333] absolute left-0 top-0 w-[100vw] h-[100vh]"
          id="arrows-layer"
        >
          <Arrows
            posX={process[0].posX}
            posY={process[0].posY}
            arrowTo={process[0].arrowTo}
            size={50}
            posStep={280}
          />   
        </div>
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
      </div>
    </>
  )
}

export default App

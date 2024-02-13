import { useState } from "react"
import CalculatedData from "./components/calculateddata"
import UserInputData from "./components/userInputData"
import { calculateInvestmentResults } from "./util/investment"
let initialData = 
  {
    initialInvestment: 100,
    annualInvestment: 100,
    expectedReturn: 100,
    duration: 2
  }



function App() {
  const[userInput, setUserInput] = useState(initialData)
  let calculation_results = []
  function handleUserInputChange(paramName, paramValue){
    
    setUserInput((previousInput) => { return{
      ...previousInput, 
      [paramName] : +paramValue
      
    };
      }
    );
  }

  console.log(userInput)
  calculation_results = calculateInvestmentResults(userInput)
  console.log(calculation_results)
  

  return (
    <>
    <UserInputData onEdit={handleUserInputChange} />
    <CalculatedData data={calculation_results}/>
    </>
  )
}

export default App

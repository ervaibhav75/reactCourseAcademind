import { useState,useRef } from "react"
import ResultModal from "./ResultModal";

export default  function TimerChallenge({title, targetTime}){
    const [timeRemaining, setTimeRemaining] = useState(targetTime *1000);

    const  timer = useRef() 
    const  dialog = useRef(); // this ref is used to share bw two components 
    //like pass from one component to other using that in other component it will get a cistomised
    //behaviour  and we will be able to control its switch from this component

    const timerisActive = timeRemaining > 0 && timeRemaining < targetTime*1000;


    if(timeRemaining <= 0 ){
        console.log("in here")
        clearInterval(timer.current)
       
        dialog.current.open();

    }


    function handleStart(){
       timer.current =  setInterval(()=>{
            setTimeRemaining((previousTime) => previousTime-10)
        }, 10)
    }
    function handleStop(){

        dialog.current.open();
        clearInterval(timer.current)
       

    }
    function handleReset(){
        setTimeRemaining(targetTime * 1000)
    }
    return(
        <>
        <ResultModal ref={dialog} targetTime={targetTime} lapsedTime={timeRemaining}
         handleReset={handleReset} />

        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-TimerChallenge">
                {targetTime} second {targetTime>1?'s':''}
            </p>
            <p>
                <button onClick={timerisActive? handleStop: handleStart}>
                   {timerisActive?'Stop':"start"}
                </button>
            </p>
            <p className={timerisActive ? 'Active' : undefined}>
                {timerisActive?<p> Timer Is Runnning !</p> : <p> Timer Inactive</p>}
            </p>
        </section>
        </>

    )

}
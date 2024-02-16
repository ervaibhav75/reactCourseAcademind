    import { forwardRef, useRef, useImperativeHandle } from "react";


    const ResultModal = forwardRef( function ResultModal({lapsedTime,targetTime, handleReset }, ref){
        let result  = false
        console.log(`time is : ${lapsedTime}`)
        if (lapsedTime > 0 ){
            console.log(`time is : ${lapsedTime}`)
            result = true
        }
        const formattedLapsedTime = (lapsedTime/1000).toFixed(2)
        const score = Math.round((1- lapsedTime / (targetTime*1000)) * 100);

        const dialog = useRef();
        // This reference is then forwarded using forwardRef 
        // to allow the parent component to imperatively interact with the ResultModal component.

        useImperativeHandle(ref, ()=>{ 
            // The useImperativeHandle hook is used to expose a method (open) via the ref.
            // The open method is intended to show the modal when called from the parent component.
                    return{
                        open(){   //any name can be given to this method
                                dialog.current.showModal();
                        }
                    }       //used for detaching timer challenge from result modal component 
                            //making it more generalised
        });
        //main thing is with above code person working on result modal can change any internal
        //composition of open method or even jsx code below as long as u have an open method exposed

        return(
             //onClose builtin prop for closing with escape key and setill resetting the timer
            <dialog ref={dialog} className="result-modal" onClose={handleReset} >
                <h2>{result?"you won :)":"You Lost :("} </h2>
                {result && <h2>your score {score} </h2>}
                <p>time target time was <strong>{targetTime } seconds</strong></p>
                <p>You stopped timer with <strong>{formattedLapsedTime} second left</strong></p>
                <form method="dialog" onSubmit={handleReset}>
                    <button type="submit">Close</button>
                </form>
            </dialog>
        );
    })

    export default ResultModal;





    //here a story to understand whats agoing on here
    /*
    Imagine you have two friends, Tim and Mike. Tim is an expert in setting up challenges, and Mike is a master in presenting results. They want to collaborate on a project where Tim creates a time challenge, and Mike displays the result modal.

    Now, Tim (representing the TimerChallenge component) has a stopwatch. When the time is up, he wants to call Mike (representing the ResultModal component) to display the result. However, Tim doesn't know exactly how Mike will choose to present the result – Mike might use a poster, a screen, or some other method.

    Here's how they collaborate:

    Tim (TimerChallenge) and His Stopwatch:

    Tim has a stopwatch (represented by timer.current).
    He knows that when the time is up, he wants to notify Mike to display the result.
    Mike (ResultModal) and His Presentation:

    Mike knows how to present the result using a dialog (represented by dialog.current).
    He also exposes an open method so that anyone, including Tim, can ask him to show the result.
    Connecting Tim and Mike with Refs:

    Tim wants to call Mike when the time is up, but he doesn't know how Mike will present the result.
    Tim creates a communication channel by giving Mike a phone (represented by dialog ref) and says, 
    "Mike, whenever I call you, use this phone to show the result."
    Two Phones, One Conversation:

    Tim and Mike each have a phone (a dialog ref). Tim has one, and Mike has one.
    When the time is up, Tim calls Mike using his phone (dialog.current.open()), and Mike answers on his 
    phone.
    Mike's phone (dialog.current) is connected to his presentation method (the actual dialog element).
    Tim doesn't need to know the details of how Mike's phone works; he just knows that calling it (dialog.
        current.open()) will make Mike present the result.
    In the code, ResultModal creates its own phone (dialog ref) and exposes an open method. 
    TimerChallenge has its own phone (dialog ref) that it passes to ResultModal when 
    they collaborate (<ResultModal ref={dialog} ... />).

    The two refs act as phones that enable communication between TimerChallenge and ResultModal, 
    allowing Tim and Mike to collaborate without knowing the internal details of 
    each other's implementations.
        */
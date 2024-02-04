export default function Tabs({children, buttons, buttonsContaineer="menu"}){
        const ButtonsContaineer = buttonsContaineer
    return(
        <>        
        <ButtonsContaineer>
        {buttons}
        </ButtonsContaineer>
        {children}
        </>

    )

}
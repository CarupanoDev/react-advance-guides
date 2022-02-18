import {useRef, Fragment, RefObject} from "react";

const CustomTextInput = ({inputRef, focus}: {inputRef: RefObject<HTMLInputElement>, focus: (inputRef: RefObject<HTMLInputElement>) => void}) => {
    return (
        <>
            <Fragment>
                <input type="text" ref={inputRef}/>
                <button type={"button"} onClick={() => focus(inputRef)}>Focus</button>
            </Fragment>
        </>
    )
}

const Parent = () => {
    const inputElement = useRef<HTMLInputElement | null>(null)

    const focus = (inputElement: RefObject<HTMLInputElement>): void => {
        if(inputElement.current){
            inputElement.current.focus()
        }
    }

    return (
        <>
            <CustomTextInput inputRef={inputElement} focus={focus}/>
        </>
    )
}

export default Parent;
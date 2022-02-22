import {MutableRefObject, useEffect, useRef} from "react";

const FocusInput = () => {
    const inputRef = useRef() as MutableRefObject<HTMLInputElement>

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return(
        <div>
            <input ref={inputRef} type="text"/>
        </div>
    )
}

export default FocusInput;
import {useEffect, useState, createRef} from "react";


function OuterClickExample() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggleContainer = createRef<HTMLDivElement>();

    const onClientHandler = () => {
        setIsOpen((prevState => !prevState))
    }

    useEffect(() => {
        function onClickOutsideHandler(event: MouseEvent) {
            if (isOpen) {
                if (toggleContainer.current == event.target) {
                    setIsOpen(false);
                }
            }
        }

        window.addEventListener('click', (event) => {
            onClickOutsideHandler(event)
        });

        return function cleanup() {
            window.removeEventListener('click', (event) => {
                onClickOutsideHandler(event)
            })
        }
    })

    return (
        <div id={"divEvent"} ref={toggleContainer}>
            <br/>
            <div>
                <button onClick={onClientHandler}
                        aria-haspopup="true"
                        aria-expanded={isOpen}>Select an option
                </button>
                {isOpen && (
                    <ul>
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                    </ul>
                )}
            </div>
        </div>
    )
}

function BlurExample() {
    const [isOpen, setIsOpen] = useState(false)
    let timeOutId: any = null;

    const onClickHandler = () => {
        setIsOpen((prevState => !prevState))
    }
    const onBlurHandler = () => {
        timeOutId = setTimeout(() => {
            setIsOpen(false);
        });
    }
    const onFocusHandler = () => {
        clearTimeout(timeOutId);
    }

    return (
        <div>
            <br/>
            <div onBlur={onBlurHandler}
                 onFocus={onFocusHandler}>
                <button onClick={onClickHandler}
                        aria-haspopup="true"
                        aria-expanded={isOpen}>
                    Select an option
                </button>
                {isOpen && (
                    <ul>
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                    </ul>
                )}
            </div>
        </div>
    )
}

function PointerEvent() {

    return (
        <div>
            <hr/>
            <OuterClickExample/>
            <BlurExample/>
        </div>
    )
}

export {PointerEvent}
import React, {useState} from "react";

const withCounter = (WrappedComponent: any) => {
    return () => {
        const [count, setCount] = useState<number>(0)

        const handleClick = () => {
            setCount(count + 1)
        }

        return <WrappedComponent count={count} handleClick={handleClick}/>
    };
}

export default withCounter
import withCounter from "./withCounter";

const ClickCounter = ({count, handleClick}: any) => {
    return (
        <button onClick={handleClick}>Clicked {count} times</button>
    )
}

export default withCounter(ClickCounter);
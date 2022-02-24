import withCounter from "./withCounter";

const HoverCounter = ({count, handleClick}: any) => {
    return (
        <h1 onMouseOver={handleClick}>Hover {count} times</h1>
    )
}

export default withCounter(HoverCounter);
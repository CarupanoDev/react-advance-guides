import {useState} from "react";
import logo from './assets/descarga.png'
import POPOSSpaceProps from "./POPOSSpaceProps";

const POPOSSpace = () => {
    const [prop] = useState<POPOSSpaceProps>({
        name: "50 California Street",
        image: logo,
        address: "50 California Street"
    })

    return(
        <>
            <img src={prop.image} width="300" height="300" alt="Hello"/>
            <h1>{ prop.name }</h1>
            <div>{ prop.address }</div>
        </>
    )
}

export default POPOSSpace
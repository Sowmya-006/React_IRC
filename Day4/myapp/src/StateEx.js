import React from 'react'
import { useState } from 'react'
const StateEx = () => 
{
    // const [data, setData] = useState(0);
    // const inc = () => {
    //     setData(data + 1);
    // }
    // const dec = () => {
    //     setData(data - 1);
    // }
    const [visible, setVisible] = useState(true);
    const toggle =()=>
    {
        setVisible(!visible)
    }
    setTimeout(() =>{
        setVisible(false)
    },5000)
    
    return (
        <>
        {visible ? (
            <div className='card-wrapper'>
                <div className="card">
                    <p className="cookieHeading">We use cookies.</p>
                    <p className="cookieDescription">This website uses cookies to ensure you get the best experience on out</p>
                    <div className="buttonContainer">
                        <button className="acceptButton" onClick={toggle}>Allow</button>
                        <button className="declineButton" onClick={toggle}>Decline</button>
                    </div>
                </div>
            </div>
        ) : (<button onClick={toggle}>Manage Cookies </button>)
        }
            </>
    )
}
export default StateEx

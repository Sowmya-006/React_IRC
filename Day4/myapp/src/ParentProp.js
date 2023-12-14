import React from 'react'
import childProp from './childProp'

const ParentProp = () => {
    const name1 = "Sowmya"
    const email1 = "Sowmi@gmail.com"
    const name2 = "Ananthi"
    const email2 = "Ananthi@gmail.com"
    return (
        <>
        <childProp name ={name1}/>
        <childProp email={email1}/>
        </>
    )
}
export default ParentProp
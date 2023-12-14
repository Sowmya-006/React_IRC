import { Component } from 'react'
//class component
class Temp extends Component {
    render(){
        return(
            <div>Hello World</div>
        )
    }
}
//Function component
function Temp1(){
    return(
        <div>Hello World</div>
    )
}
//Function component(Arrow functions)
const Temp2 =() =>{
    return(
        <div>Hello World</div>
    )
}
export default Temp
import React from "react";


export default class Form extends React.Component{
    constructor(){
        super()
this.state={
    message : '',
    fruit : 'apple',
}    }


handleChange= (event)=> {
  console.log(event.target.value);
  this.setState({message:event.target.value })
}

setFruit = (e)=>{
this.setState({fruit: e.target.value });
console.log(e.target.value);
}
    render(){
        const {message,fruit} = this.state;
        return <div>
            <form>
        <input value={message} onChange={this.handleChange}/>
          <h3> input value is : {message} </h3>
          <select onChange={this.setFruit}>
            <option value="apple">apple</option>
            <option value="banana">banana</option>
         <option value="orange">orange</option>

           </select>
           <p> fruit is : {fruit}</p>
            </form>
         
        </div>
    } 
}
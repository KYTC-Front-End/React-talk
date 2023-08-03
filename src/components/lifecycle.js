import React from "react";


export default class Lifecycle extends React.Component{

constructor(){
    super()
    this.state = {text: 'dummy text'}
    console.log("one");
}

componentDidMount(){
    console.log("Mount");
    //api call 
    //set state
    this.setState({text:"ccccccccccccccccc"})

}

componentDidUpdate(prevProps, prevState){
    if (prevState.text !== this.state.text) { // "ccccccccccc != ""dummy text "
   this.setState({text:" aaaaaaaaaaaaa"})
   console.log("update state");

    }
console.log("update");

}


render(){
    console.log("two");
    return <div>
        {this.state.text}
    
    </div>;
}

} 
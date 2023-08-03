import React, {Component} from 'react';



// class First extends Component {

//   constructor(props){
//      super(props)
//      this.state = {
//       count : 0,
//      };
//   }

// handleCounter(){
// this.setState({count : this.state.count +1 })

// }
// render(){
//   console.log(this.state);
// return (
//   <div>
//   <p>Counter is : {this.state.count}</p>  
//   <button onClick={this.handleCounter}>Click me</button>
//   </div>
// )
// }
// }




// export default First






















class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      clicked: this.props.name ,
    };
  }
  

  increment  () {
    this.setState({count : this.state.count +1})
  };

    handleClick = () => {
    this.setState((prevState) => ({ clicked: !prevState.clicked }));
  };
  

  render() {
    console.log(this.props.name, "props");
        console.log(this.state.clicked, "state");

    // const {count} = this.state;
    return (
      <div style={{backgroundColor: this.props.color , borderRadius: '50%'}}>
        {/* <p>Count: {this.state.count}</p> */}
        <p> Count : {this.state.count}</p>
        <button onClick={this.increment.bind(this)}>Increment</button>
     <button onClick={this.handleClick}>{this.state.clicked? <p>clicked</p> : <p>uncliked</p>}</button>

      </div>
    );
  }
}

export default Counter;

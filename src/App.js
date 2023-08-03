import React from 'react'; 
// import FirstComponent from './components/firstComponent';
// import SecondComponent from './components/secondComponent';
// import NamedComponent from './components/namedComponent';
// import Tweet from './components/tweet';
// import First from './components/classsComponent';
// import Person from './components/person';
// import Counter from './components/classsComponent';
// import Lifecycle from './components/lifecycle';
import Form from './components/form';

import './App.css'


class App extends React.Component {

constructor(props){
    super(props);
    this.state = {show : true}
}

// handleToggle = ()=>{
// this.setState({show : !this.state.show})
// }

render(){
    return <div >
{/* 
      <FirstComponent/>
      <SecondComponent/>
      <NamedComponent  name = "razan" />
     <NamedComponent  name = "nahed" />
     <Tweet userName = "saja1" name = "saja" date = {new Date().toDateString()}   message = "this my first tweet"/>
     <Tweet userName = "hanan" name = "hanan" date = {new Date().toDateString()}   message = "Hello tweet"/>
     <Person name="bara"   age ="23" hobbies={['swimming', 'drawing']} />
     <Person name="soha"   age ="17" hobbies={['swimming', 'drawing']} /> */}
     {/* <Counter name="yasmeen"/> */}

      {/* <Lifecycle/> */}
     {/* {this.state.show && <Lifecycle/>} */}
  

     {/* <button onClick={this.handleToggle}>Toggle</button> */}



      <Form/>


        

    </div>
}
}
export default App; 
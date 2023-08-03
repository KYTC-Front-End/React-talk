import React from 'react'; 

const NamedComponent = (props)=> {
    console.log(props);
   return <div>
    <p>my name is : {props.name} </p>
   </div>
}

export default NamedComponent;
import React from 'react';


const Person = (props) => {
    const {name, age, hobbies} = props;
    return <div>
   <p>Learn some information about this person</p>
   <h3>name is : {name.slice(0,3)}</h3>
   {age > 21 ? <h3> have a drink</h3> : <h3> you must be 21</h3>}
   <ul>{hobbies.map((item,index) => 
    <li key={index}>{item}</li>
    )}</ul>
    </div>
}

export default Person;
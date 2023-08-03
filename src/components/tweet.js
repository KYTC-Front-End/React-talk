import React from 'react' ; 

const Tweet = ({userName, name , date , message})=>{
    return <div>
        <p>user name : {userName} </p>
        <p>name : {name}</p>
        <p>date :{date} </p>
        <p>Message: {message} </p>





    </div>
}

export default Tweet;
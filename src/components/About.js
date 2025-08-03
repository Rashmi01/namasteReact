import User from "./User"
import UserClass from "./UserClass"
import React from "react"

class About extends React.Component{
    constructor(props){
        super(props);
        //console.log("Parent constructor")
    }

    componentDidMount(){
        //console.log("Parent component did mount")
    }

    render(){
        //console.log("Parent render")
        return(
        <div> 
            <h1>About Class component</h1>
            <User name={"Rashmi Functional Comp props"} />
            <UserClass name={"First Child Component - Rashmi Class Comp props"} location={" Location is Bangalore"} />
        </div>
    )
    }
}

export default About
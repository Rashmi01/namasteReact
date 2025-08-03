import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props);
       // console.log(this.props.name + "USer constructor")
        this.state = {
            userInfo:{
                name: "Dummy",
                location: "Bangalore"
            }
        };
    }
    async componentDidMount(){
        //console.log(this.props.name +"USer component did mount")
        const data = await fetch("https://api.github.com/users/RASHMI");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json
        })
    }

    componentDidUpdate(){
        console.log("component did update");
    }

    componentWillUnmount(){
        console.log("component will unmount");
    }
    render(){
        //console.log("USer Render")
        const {name, location, avatar_url} = this.state.userInfo;
        return(
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2>Class Component</h2>
                <h2>Name : {name}</h2>
                <h2>Location :{location} </h2>
                <h2>Contact : xxxxxx@gmail.com</h2>

            </div>
        )
    }
}

export default UserClass
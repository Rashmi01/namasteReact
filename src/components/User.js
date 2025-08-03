import { useState } from "react";


const User = (props) => {
    const [count] = useState(0);
    return (
        <div className="user-card">
            <h2>Functional Component</h2>
            <h2>Count : {count}</h2>
            <h2> Name : {props.name}</h2>
            <h2> Location: Bangalore</h2>
            <h2> Contact: xxxxxxx@gmail.com</h2>
        </div>
    );
};
export default User;
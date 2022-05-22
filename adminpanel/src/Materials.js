import { useState, useEffect } from "react";
import axios from "axios";
import {FaBook} from 'react-icons/fa'
import Add from './Add';

function TodoCard({ data }) {
    const [id,setId]=useState('');
    return (
        <div className="material" key={data._id}>
           <a href={data.materialUrl} target="_blank"> 
          <span className="icon">
          <FaBook />
          </span>
          <h4>{data.materialName}</h4>
       </a>
        </div>
    );
}

export default function Materials() {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        axios
            .get("https://cseclassroom.herokuapp.com/exercise")
            .then((res) => {
                console.log("output"+res.data);
                setTodo(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="material-container">
            <Add />
            <h2>Software-Testing</h2>
                    {todo.map((data) => (
                        <TodoCard data={data} />
                    ))}
           </div>
    );
}
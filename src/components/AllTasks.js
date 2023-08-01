import "./AllTasks.css"
import data from "../data"
import {useState} from "react"

const AllTasks = () => {

    const [myTasks, setMyTasks] = useState(data)

    const tasksHandler = (idecko) => {
        const filteredTasks = myTasks.filter( (oneTask)=> {
            return oneTask.id !== idecko
        })

        setMyTasks(filteredTasks)
    }

    return <div>
            {
                myTasks.map( (oneTask) => {
                    const {id, name} = oneTask

                    return <div className= "oneTask" key={id}>
                        <h4>{name}</h4>
                        <button onClick={() => tasksHandler(id)}>Vymazať</button>
                    </div>
                })
            }
        </div>
    }

export default AllTasks
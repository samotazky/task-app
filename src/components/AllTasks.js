import "./AllTasks.css"
import data from "../data"

const AllTasks = () => {

    const tasksHandler = () => {
        console.log("klik")
    }


    return <div>
            {
                data.map( (oneTask) => {
                    const {id, name} = oneTask

                    return <div className= "oneTask" key={id}>
                        <h4>{name}</h4>
                        <button onClick={tasksHandler}>Vymazať</button>
                    </div>
                })
            }
        </div>
    }

export default AllTasks
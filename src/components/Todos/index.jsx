import React, { useEffect, useState } from "react";
import { API } from '../../API/index'

const index = () => {

    const [todo, setTodo] = useState([]);
    const [load, setLoad] = useState(false);



    const [point, setPoint] = useState(10)
    const [fristStep, setFristStep] = useState(1)




    useEffect(() => {
        API.getAllPosts()
            .then((data) => {
                setTodo(data.data)
                setLoad(true)
            })
    }, [])


    const lastData = fristStep * point
    const lastPage = lastData - point

    const sliceTodos = todo.slice(lastPage, lastData)

  
 

    const steps = []

    for (let i = 1; i <= Math.ceil(todo.length / point); i++) {
        steps.push(i)
    }

    if (!load) {
        return <h1>Loading..</h1>
    }

    const paginate = (num) => {
        setFristStep(num)
    }
    
    return (
        <div className='container mt-5'>
            <ul className="list-group">
                {
                    sliceTodos.length > 0 ? sliceTodos.map(item => {
                        return <li key={item.id} className="list-group-item">{item.id}. {item.title} </li>
                    })
                        : "NOT FOUND"}
            </ul>

            <nav aria-label="..." className=" mx-auto d-block mt-5 w-25">
                <ul className="pagination pagination-sm">
                    {
                        steps.map((e) => {
                            return <li key={e}  onClick={() => paginate(e)} className={`page-item ${e == fristStep ? "active" : ""}`} aria-current="page">
                                <span className="page-link ">{e}</span>
                            </li>


                        })

                    }
                </ul>
            </nav>


        </div>
    )
}
export default index
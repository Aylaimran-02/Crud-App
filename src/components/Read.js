import axios from "axios";
import React from "react"
import { Link } from "react-router-dom";
function Read() {

    const [apiData, setApiData] = React.useState([])

    function getData() {
        axios.get('https://6476275ee607ba4797dd5e9e.mockapi.io/crud')
            .then((response) => {
                setApiData(response.data);
            }).catch((err)=>{
                console.log(err);
            })
    }

    function handleDelete(id) {
        axios.delete(`https://6476275ee607ba4797dd5e9e.mockapi.io/crud/${id}`)
            .then(() => {
                getData()
            }).catch((err)=>{
                console.log(err);
            })
    }

 function setDataToStorage(id, name, age, email){
localStorage.setItem('id', id)
localStorage.setItem('name' , name)
localStorage.setItem('age', age)
localStorage.setItem('email', email)
 }

    React.useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="mb-2 mt-2">
                        <Link to='/create'>
                            <button className="btn btn-primary">create New Data</button>
                        </Link>
                    </div>
                    <table className="table table-bordered table-striped table-dark table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                 <th>NAME</th>
                                <th>AGE</th>
                                <th>EMAIL</th>
                                <th>EDIT</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                apiData.map((item) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.e_name}</td>
                                                <td>{item.e_age}</td>
                                                <td>{item.e_email}</td>
                                                <td>
                                                    <Link to='/edit'>
                                                    <button className="btn btn-primary" onClick={()=> setDataToStorage(item.id, item.e_name, item.e_age, item.e_email)}> Edit </button>
                                                    </Link> 
                                                     </td>
                                                <td> <button className="btn btn-danger" onClick={() => {
                                                    if (window.confirm('Are you Sure to delete data?')) {
                                                        handleDelete(item.id)
                                                    }
                                                }}> Delete </button> </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
};

export default Read;

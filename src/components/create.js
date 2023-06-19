import axios from "axios";
import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Create() {

    const [name, setName] = React.useState('')
    const [age, setAge] = React.useState('')
    const [email, setEmail] = React.useState('')

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://6476275ee607ba4797dd5e9e.mockapi.io/crud', {
            e_name: name,
            e_age: age, 
            e_email: email
        }).then(()=>{
            navigate('/')
        }).catch((err)=>{
            console.log(err);
        })
    }

    return (
        <>
            <div className="row">
                <div className="col-md-4">
                <div className="mb-2 mt-2">
                       <Link to='/'>
                       <button className="btn btn-primary">Read Data</button>
                       </Link>
                    </div>
                    <div className="bg-primary p-4 text-center">
                        <h1>Create Data</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="">Enter Name: </label>
                            <input type="text" placeholder="Name" className="form-control" onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Enter Age: </label>
                            <input type="number" placeholder="Age" className="form-control" onChange={(e) => setAge(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Email </label>
                            <input type="email" placeholder="Email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <br />
                        <div className='d-grid'>
                            <input type="submit" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};

export default Create;

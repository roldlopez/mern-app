import React, {Fragment, useState } from "react";

const Form = () => {
    const [ data, setData ] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        if(!data) return;
        try {
            const response = await fetch("http://localhost:5000/api/description/", {
                method: "POST",
                body: JSON.stringify({description: data}),
                headers: { 'Content-Type': 'application/json' }
            });
            console.log(response);
            window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <Fragment>
           <form className="form" onSubmit={onSubmitForm}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Ingresa una actividad" onChange={(e)=>{ setData(e.target.value) }}/>
                </div>
                <button type="submit" className="btn btn-primary">Crear actividad</button>
            </form>
        </Fragment>
    )
}

export default Form;



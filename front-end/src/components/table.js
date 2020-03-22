import React, {Fragment, useState, useEffect } from "react";
import Edit from "./edit";

const Table = () => {
    const [ data, setData ] = useState([]);
    const getData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/description/");
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() =>{
        getData();
    }, []);

    const deleteItem = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/description/${id}`,{
                method: "DELETE"
            });
            console.log(response);
            setData( data.filter((todo) => todo._id !== id));

        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <Fragment>
            <table className="table table-bordered mt-5">
                <thead>
                    <tr>
                        <th>Actividad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
            <tbody>
                {
                    data.map((item, id) => (
                        <tr key={id}>
                            <td>{item.description}</td>
                            <td>
                                <button className="btn btn-warning mx-1" data-toggle="modal" data-target={`#target${item._id}`}>Editar</button>
                                <Edit data={item}/>
                                <button className="btn btn-danger mx-1" onClick={e => {deleteItem(item._id)}}>Eliminar</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
            
        </Fragment>
    )
}

export default Table;


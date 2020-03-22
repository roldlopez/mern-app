import React, {Fragment, useState} from "react";

const Edit = ({data}) => {
    const [value, setValue] = useState(data.description);
    const updateActividad = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`http://localhost:5000/api/description/${data._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({description:value})
            });
            window.location = "/";
            console.log(response);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <Fragment>
            <div id={`target${data._id}`} className="modal" tabIndex="-1" role="dialog" onClick={e => setValue(data.description)}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={e => setValue(data.description)}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label className="col-form-label">Actividad:</label>
                            <input type="text" className="form-control" value={value} onChange={(e) => { setValue(e.target.value) }}/>
                        </div>
                    </div>
                    <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={e => setValue(data.description)}>Cerrar</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={updateActividad}>Actualizar</button>
                        </div>
                    </div>
                </div>
                </div>
        </Fragment>
    )
}

export default Edit;
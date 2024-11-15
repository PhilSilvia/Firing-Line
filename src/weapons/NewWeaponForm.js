import { useState } from "react";

function validateData(formData){
    const oneToSix = /[1-6]/g;
    const oneToSixWithPlus = /[1-6]\+/g;
    if (!formData.name)
        return new Error("Must have a name");
    if (!formData.quantity || formData < 0)
        return new Error("Must have a non-negative number");
    if (!formData.accuracy){
        
    }

}

function NewWeaponForm({ weapons, setWeapons, setError }){
    const [ formData, setFormData ] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        const error = validateData(formData);
        if (error)
            setError(error);
        else {

        }
    };

    const changeHandler = (e) => {
        const value = e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value
        });
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <thead>
                    <th></th>
                    <th>Name</th>
                    <th>Number</th>
                    <th>WS/BS</th>
                    <th>A</th>
                    <th>S</th>
                    <th>AP</th>
                    <th>D</th>
                </thead>
                <tr>
                    <td>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </td>
                    <td>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="name" 
                            id="name" 
                            onChange={changeHandler} 
                            value={formData.name} 
                        />
                    </td>
                    <td>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="quantity" 
                            id="quantity" 
                            onChange={changeHandler} 
                            value={formData.quantity} 
                        />
                    </td>
                    <td>
                        <input 
                            type="text" 
                            className="form-control col-1" 
                            name="accuracy" 
                            id="accuracy" 
                            onChange={changeHandler} 
                            value={formData.accuracy} 
                        />
                    </td>
                    <td>
                        <input 
                            type="text" 
                            className="form-control col-1" 
                            name="attacks" 
                            id="attacks" 
                            onChange={changeHandler} 
                            value={formData.attacks} 
                        />
                    </td>
                    <td>
                        <input 
                            type="text" 
                            className="form-control col-1" 
                            name="strength" 
                            id="strength" 
                            onChange={changeHandler} 
                            value={formData.strength} 
                        />
                    </td>
                    <td>
                        <input 
                            type="text" 
                            className="form-control col-1" 
                            name="AP" 
                            id="AP" 
                            onChange={changeHandler} 
                            value={formData.AP} 
                        />
                    </td>
                    <td>
                        <input 
                            type="text" 
                            className="form-control col-1" 
                            name="damage" 
                            id="damage" 
                            onChange={changeHandler} 
                            value={formData.damage} 
                        />
                    </td>
                </tr>
            </div>
        </form>
    );
}

export default NewWeaponForm;
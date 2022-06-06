import { useState } from "react";
import MenuItemModel from "../models/MenuItemModel";
import Button from './Button';

const courseTypes = [
    'Antipasto',
    'Primo',
    'Secondo',
    'Dolce',
]

const MenuForm = (props) => {
    const [courseName, setCourseName] = useState('');
    const nameChangeHandler = (event) => {
        setCourseName(event.target.value);
    }

    const [courseType, setCourseType] = useState('');
    const courseChangeHandler = (event) => {
        setCourseType(event.target.value);
    }

    const [coursePrice, setCoursePrice] = useState('');
    const priceChangeHandler = (event) => {
        setCoursePrice(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const formData = new MenuItemModel(undefined, courseName, courseType, Number(coursePrice));
        props.onFormSubmit(formData);
    }
    return (
        <form onSubmit={submitHandler} className="menu-form">
            <div className="form-row">
                <div className="form-block">
                    <label>Nome piatto</label>
                    <input onChange={nameChangeHandler} type="text"/>
                </div>
                <div className="form-block">
                    <label>Portata</label>
                    <select onChange={courseChangeHandler}>
                        <option value="">--</option>
                        {courseTypes.map(ct => 
                            <option key={ct} value={ct}>{ct}</option>    
                        )}
                    </select>
                </div>
                <div className="form-block">
                    <label>Prezzo €</label>
                    <input type="number" onChange={priceChangeHandler} />
                </div>
                <div className="form-block">
                    <Button>
                        {props.buttonText}
                    </Button>
                </div>
            </div>
        </form>
    )
}

export default MenuForm;
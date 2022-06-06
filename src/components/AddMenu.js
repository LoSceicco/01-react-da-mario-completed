import MenuForm from "./MenuForm";

const AddMenu = (props) => 
    <MenuForm 
        buttonText="Aggiungi" 
        onFormSubmit={props.onAdd}/>

export default AddMenu;
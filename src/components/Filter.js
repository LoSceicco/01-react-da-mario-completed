import MenuForm from "./MenuForm";

const Filter = (props) => 
    <MenuForm 
        initialValue={props.startFilter}
        buttonText="Filtra"
        onFormSubmit={props.onFilter} />

export default Filter;
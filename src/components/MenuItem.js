import Button from './Button';
import Card from './Card'

const MenuItem = (props) => {
    const { name, courseType } = props.menuItem;
    
    const deleteHandler = () => {
        props.onDelete(props.menuItem.id);
    }

    return (
        <Card>
            <div className="info">
                <h2>{name}</h2>
                <h4>{courseType}</h4>
            </div>
            <div className="price">
                <h2>{props.menuItem.formattedPrice()}</h2>
            </div>
            {props.isEdit && <div className="btn-delete">
                <Button className="float-btn" onClick={deleteHandler}>
                    Elimina
                </Button>
            </div>}
        </Card>
    )
}

export default MenuItem;
import MenuItem from './MenuItem';

const Menu = (props) =>
    (<div className="container">
        {props.menu.map((menuItem) => 
            <MenuItem 
                key={menuItem.id}
                menuItem={menuItem}
                onDelete= {props.onDeleteItem}
                isEdit={props.isEdit}
            />
        )}
    </div>)

export default Menu;
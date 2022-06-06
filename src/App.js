import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import Menu from './components/Menu';
import menu from './menu.json';
import { useState } from 'react';
import AddMenu from './components/AddMenu';
import Filter from './components/Filter';
import SwitchMode from './components/SwitchMode';
import MenuItemModel from './models/MenuItemModel';

const getStartMenu = () => menu.map(mi => new MenuItemModel(mi.id, mi.name, mi.courseType, mi.price))

function App() {
  // MENU ITEMS
  const [menuItems, setMenuItems] = useState(getStartMenu());
  // MANAGE MODE
  const [isEdit, setEdit] = useState(false);
  const switchMode = (event) => {
    setEdit((previousMode) => !previousMode);
    setFilter(null);
  }

  // READ MODE
  // SHOW/HIDE FILTER
  const [showFilter, setShowFilter] = useState(true);
  const showFilterText = showFilter ? "Nascondi" : "Mostra";
  const toggleShowFilter = () => {
    setShowFilter((previousShowState) => !previousShowState);
  }
  // FILTER
  const [filter, setFilter] = useState();
  const filteredItems = filter ? menuItems.filter(mi =>
    (!filter.name || mi.name.toLowerCase().includes(filter.name.toLowerCase()))
    && (!filter.courseType || mi.courseType === filter.courseType)
    && (!filter.price || mi.price <= filter.price)
  ) : menuItems;

  // EDIT MODE
  // ADD AND DELETE
  const addItemHandler = (menuItem) => {
    setMenuItems((previousMenuItems) => [menuItem, ...previousMenuItems]);
  }
  const deleteItemHandler = (idToDelete) => {
    setMenuItems(previousMenuItems => 
      previousMenuItems.filter(mi => mi.id !== idToDelete)  
    )
  }

  return (
    <div>
      <Header switchModeComponent={<SwitchMode isEdit={isEdit} switchModeHandler={switchMode}/>}/>
      
      {isEdit && 
      <div>
        <Title titleText="Aggiungi"/>
        <AddMenu onAdd={addItemHandler}/>
      </div>}
      
      {!isEdit && 
        <Title titleText="Filtra" showButton={true} buttonText={showFilterText} buttonHandler={toggleShowFilter}/>
      }
      {!isEdit && showFilter && 
        <Filter startFilter={filter} onFilter={(filter) => setFilter(filter)} />
      }
      
      <Title titleText="Menu"/>
      <Menu isEdit={isEdit} menu={isEdit ? menuItems : filteredItems} onDeleteItem={deleteItemHandler}/>
    </div>
  );
}


export default App;

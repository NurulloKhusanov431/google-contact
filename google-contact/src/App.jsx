import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contacts from './components/Contacts/Contacts';
import History from './components/History/History';
import Favourite from './components/Favourite/Favourite';
import NavbarC from './components/NavbarC/NavbarC';
import SidebarC from './components/SidebarC/SidebarC';
import CreateContact from './components/CreateContact/CreateContact';
import { useState }  from 'react';
import { FunctionsContext } from './components/Context/Context';

function App() {
  const [contacts, setContacts] = useState([
    {id: 1, name: "Abdulhamid Muhtorov", email: "example@gmail.com", number: "+998943334433", compony: "Schwarzkopf", is_fav: true},
    {id: 2, name: "Sanjorrbek Kamolov", email: "examplekimdir@gmail.com", number: "+998989977766", compony: "Apple", is_fav: false},
    {id: 3, name: "Abdulaziz O`ktamov", email: "exampleqaysidir@gmail.com", number: "+998949998877", compony: "iCode Academy", is_fav: false},
    {id: 4, name: "Bobirjon Qodirov", email: "exampleoshadir@gmail.com", number: "+998912224455", compony: "Google", is_fav: true}
  ]);

  const [eContact, setEContact] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const ChangeFavourite = (id) => {
    setContacts(contacts.map(contact => {
      if(id === contact.id) {
        contact.is_fav = !contact.is_fav;
      }
      return contact;
    }))
  }

const CreateContactF = (obj) => {
  let nId = null;
  contacts.length !== 0 ? nId = contacts[contacts.length -1].id + 1 : nId = 1;
  obj.id = nId;
  setContacts([...contacts, obj]);
}

const EditContact = (obj) => {
   setIsEdit(true);
   setEContact(obj); 
}

  return (
    <div>
      <FunctionsContext.Provider value={{ChangeFavourite, EditContact}}>
      <Router>
      <NavbarC />
      <div className="without-navbar">
      <SidebarC CreateContactF={CreateContactF} />
    <Switch>
      <Route path="/" exact render={()=> <Contacts contacts={contacts} />} />
      <Route path="/history" exact render={()=> <History />} />
      <Route path="/favourite" exact render={()=> <Favourite />} />
      <Route path="/add" exact render={()=> <CreateContact CreateContactF={CreateContactF} isEdit={isEdit} eContact={eContact} />} />
    </Switch>
      </div>
      </Router>
      </FunctionsContext.Provider>
    </div>
  );
}

export default App;

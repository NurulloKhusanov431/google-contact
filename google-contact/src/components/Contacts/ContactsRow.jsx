import { useContext, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FunctionsContext } from '../Context/Context';
import './Contacts.css';

function ContactRow({ obj, index }) {
    const iconsRef = useRef();
    const Functions = useContext(FunctionsContext);

    const EnterMouse = () => {
        iconsRef.current.classList.add("opacity-100");
        iconsRef.current.classList.remove("opacity-0");
        iconsRef.current.style = "pointer-events: unset";

    }

    const LeaveMouse = () => {
        iconsRef.current.classList.add("opacity-0");
        iconsRef.current.classList.remove("opacity-100");
        iconsRef.current.style = "pointer-events: none";

    }

    return (
        <tr onMouseEnter={EnterMouse} 
            onMouseLeave={LeaveMouse}>
            <td>{obj.name}</td>
            <td>{obj.email}</td>
            <td>{obj.number}</td>
            <td className="text-end">
             <span ref={iconsRef} className="opacity-0">
                 {
                     obj.is_fav ?
                     <i onClick={() => Functions.ChangeFavourite(obj.id)} className="mx-2 bi bi-star-fill text-primary"></i>
                     :
                     <i onClick={() => Functions.ChangeFavourite(obj.id)} className="mx-2 bi bi-star"></i>
                 }
                <NavLink to="/edit" exact><i onClick={() => Functions.EditContact(obj)} className="mx-2 bi bi-pencil"></i></NavLink>
                <i className="ms-2bi bi-three-dots-vertical"></i>
             </span>
            </td>
        </tr>
    )
}

export default ContactRow;
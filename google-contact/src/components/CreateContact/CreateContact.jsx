import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './CreateContact.css';


export default function CreateContact({ CreateContactF, isEdit, eContact }) {
    const name_ref = useRef();
    const number_ref = useRef();
    const compony_ref = useRef();
    const email_ref = useRef();
    const is_fav_ref = useRef();
    
    useEffect(() => {
      if(eContact !== null) {
        name_ref.current.value = eContact.name;
        compony_ref.current.value = eContact.conpony;
        email_ref.current.value = eContact.email;
        number_ref.current.value = eContact.number;
        is_fav_ref.current.value = eContact.is_fav;
      }
    }, [eContact]);

    const ClearInputs = () => {
      name_ref.current.value = "";
      email_ref.current.value = "";
      number_ref.current.value = "";
      compony_ref.current.value = "";
      is_fav_ref.current.chcked = false;
    }

  const SendObjToApp = () => {
    let contact = {
      id: null,
      name: name_ref.current.value,
      email: email_ref.current.value,
      number: number_ref.current.value,
      compony: compony_ref.current.value,
      is_fav: is_fav_ref.current.chcked
    };
    
    if(contact.name !== "" && contact.email !== "" && contact.number !=="" && contact.compony !=="") {
      CreateContactF(contact);
      ClearInputs()
    } else {
      alert("Fill all the gaps, Plis!");
    }
  }

    return(
        <>
          <div className="card w-75">
            <div className="card-header">
              <div className="fs-3">Create Contact</div>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" id="name" className="form-control" ref={name_ref} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-control" ref={email_ref} />
              </div>
              <div className="mb-3">
                <label htmlFor="number" className="form-label">Phone Number</label>
                <input type="text" id="number" className="form-control" ref={number_ref} />
              </div>
              <div className="mb-3">
                <label htmlFor="compony" className="form-label">Compony</label>
                <input type="text" id="compony" className="form-control" ref={compony_ref} />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" ref={is_fav_ref} id="exampleCheck1" />
                <label className="form-check-label" htmlfor="exampleCheck1">Favourite</label>
              </div>
            </div>
            <div className="card-footer text-end">
            <NavLink to="/" exact><button onClick={SendObjToApp} 
              className="btn btn-primary text-white">
                <i className="bi bi-plus text-white"></i>Create</button>
            </NavLink>
            </div>
          </div>
        </>
    )
}
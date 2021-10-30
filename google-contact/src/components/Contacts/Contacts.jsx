import './Contacts.css';
import ContactRow from './ContactsRow';

export default function Contacts({ contacts }) {
    return(
        <>
          {
             <table className="table">
                 <thead>
                     <tr>
                       <th>Name</th>
                       <th>Emeil</th>
                       <th>Namber</th>
                       <th className="text-end"><i className="bi bi-three-dots-vertical"></i></th>
                     </tr>
                 </thead>
                 <tbody>
                     {
                         contacts.map((contact, index) => {
                             return <ContactRow obj={contact} index={index} key={contact.id} />
                         })
                     }
                 </tbody>
             </table>
          }
        </>
    )
}
import React, { useContext } from 'react'
import ContactContext from '../../context/contact/contactContext'


const ContactItem = ({ contact }) => {
    const contactContext = useContext(ContactContext)
    const {deleteContact, setCurrent, clearCurrent} = contactContext;

    const onDelete = () => {
        deleteContact(id)
        clearCurrent()
    }


    const {name, id, email, phone, type} = contact;
    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {name}{' '}<span className={'badge ' + (type === 'professional' ? 
                'badge-success' : 'badge-primary')} style={{ float: 'right' }}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
            </h3>
            <ul className='list'>
                {email && (<li><i className="fas fa-envelope-open" /></li>)}
                {phone && (<li><i className="fas fa-phone" />{phone}</li>)}
            </ul>
            <p>
                <button className="btn btn-dark btn-sm" 
                onClick={() => setCurrent(contact)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
            </p>
        </div>
    )
}

export default ContactItem

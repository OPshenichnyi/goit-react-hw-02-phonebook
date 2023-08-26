import { Formik, Field, Form } from 'formik';

export const ContactList = ({ phoneBook, removeContact, filterContact}) => {

    return (
        <ul>
            <form>
                <label htmlFor="name">
                    Filter 
                    <br />
                    <input
                        type="text"
                        name="filter"
                        onChange={(e) => { filterContact(e.target.value)}}
                    />
                </label>
            </form>

            {phoneBook.filter(user => user.name.includes('')).map(({ id, name, number }) => (
                <li key={id}>
                    <span>{name}:</span>
                    <span> {number}</span>
                    <button
                        type="button"
                        value={id}
                        onClick={(e) => removeContact(e.target.value)}
                    >Delete</button>
                </li>
            ))}
        </ul>
    )
}
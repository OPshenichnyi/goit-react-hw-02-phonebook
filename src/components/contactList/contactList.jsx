

export const ContactList = ({ phoneBook, removeContact }) => {
      
    return (
        <ul>
            {phoneBook.map(({ id, name, number }) => (
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
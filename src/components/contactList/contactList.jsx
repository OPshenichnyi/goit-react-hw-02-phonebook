

export const ContactList = ({ phoneBook, removeContact, filterContact, filter}) => {

    return (
        <ul>
            <form>
                <label htmlFor="name">
                    Filter 
                    <br />
                    <input
                        type="text"
                        name="filter"
                        onChange={(e) => {
                            e.preventDefault()
                            filterContact(e.target.value)
                        }}
                    />
                </label>
            </form>

            {phoneBook.filter(user => user.name.toLowerCase().includes(filter.toLowerCase())).map(({ id, name, number }) => (
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
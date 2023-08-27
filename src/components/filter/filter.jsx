

export const Filter = ({filterContact}) => {
    return (
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
    )
}
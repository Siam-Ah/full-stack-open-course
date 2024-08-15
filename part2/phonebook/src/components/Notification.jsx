const Notification = ({ message }) => {
    if (message === null) {
        return null
    }

    return message ? (
        <div className="added">
            {message}
        </div>
    ) : null
}

export default Notification
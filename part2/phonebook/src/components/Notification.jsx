const Notification = ({ message, isError }) => {
    if (message === null) {
        return null
    }

    return message ? (
        <div className={isError ? "error" : "added"}>
            {message}
        </div>
    ) : null
}

export default Notification
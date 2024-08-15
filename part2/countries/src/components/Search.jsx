export default function Serach(props) {
    return (
        <div>
            find countries <input value={props.countryName} onChange={props.handleNameChange} />
        </div>
    )
}
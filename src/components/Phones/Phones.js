import "./Phones.css";

const phones = ["Iphone", "Galaxy", "Redmi", "OnePlus"];

const ListPhones = () => {
    return (
        <div>
            <h1 className='headerPhone'>Teléfonos:</h1>
            <ul>
                {phones.map((phone) => {
                    return <li key={phone}>{phone}</li>
                })}
            </ul>
        </div>

    );
}

export default ListPhones;
import "./MyNewButton.css";


const MyNewButton = (props) => {
    return (
        <button onClick={props.handleClick} className="my-button">
            {props.text}
        </button>
    );
}

export default MyNewButton;
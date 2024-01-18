import "./Messages.css";

const Messages = (props) => {
    return (
        <div>
            <p className="MessageCard">Hola {props.name}</p>
        </div>
    ) 
}

export default Messages; 
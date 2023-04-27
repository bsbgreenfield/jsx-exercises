const Tweet = (props) => {
    return (
        <div className="tweet">
            <h2>username: {props.username}</h2>
            <p>name: {props.name}</p>
            <p>date: {props.date}</p>
            <h4>{props.message}</h4>
        </div>
    )
 }
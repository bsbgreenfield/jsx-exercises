const Person = (props) => {
    let dispName;
    props.name.length > 8 ? dispName = props.name.slice(0,6) : dispName = props.name
    let votes;
    if (props.age >= 18 ){
        votes = <h3>please go vote</h3>
    }
    else{
        votes  = <h3>You must be 18</h3>
    }
    return (
        <div className="person">
            <p>Learn some information about this person</p>
            <p>name: {dispName}  </p>
            <p>{votes}</p>
            <ul>
                {props.hobbies.map(h => <li>{h}</li>)}
            </ul>
        </div>
   
    )
}
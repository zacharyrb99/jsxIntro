const Person = props => {
    return(
        <div>
            <p>Learn some information about this person</p>
            <h3>Name: {props.name.slice(0,6)}</h3>
            <h3>{props.age >= 18 ? "Please go vote!" : "You must be 18 to vote"}</h3>
            <ol>{props.hobbies.map(h => <li>{h}</li>)}</ol>
        </div>
    )
}
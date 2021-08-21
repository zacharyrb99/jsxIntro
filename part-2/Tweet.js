const Tweet = props => {
    return(
        <div>
            <h1>Tweeted by {props.username}</h1>
            <p>{props.msg}</p>
            <p>-{props.name}</p>
        </div>
    )
}
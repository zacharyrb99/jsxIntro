const App = () => {
    return(
        <div>
            <Tweet username="user1" msg="Hello this is the first tweet" name="User 1"/>
            <Tweet username="user2" msg="Hello this is the second tweet" name="User 2"/> 
            <Tweet username="user3" msg="Hello this is the third tweet" name="User 3"/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));
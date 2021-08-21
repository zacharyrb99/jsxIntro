const App = () => {
    return(
        <ol>
            <li><Person age={21} name="Zachary" hobbies={['basketball', 'photography']}/></li>
            <li><Person age={21} name="Mariah" hobbies={['animals', 'painting']}/></li>
            <li><Person age={13} name="Addyson" hobbies={['art', 'exercise']}/></li>
        </ol>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));
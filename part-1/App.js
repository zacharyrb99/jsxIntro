const App = () => {
    return(
        <div>
            <FirstComponent/>
            <NamedComponent name="Zach"/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));
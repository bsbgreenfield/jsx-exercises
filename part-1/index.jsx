const App = () => {
    return (
        <div>
            <FirstComponent/>
            <NamedComponent name="Benji"/>
        </div>
    )
}
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App/>)
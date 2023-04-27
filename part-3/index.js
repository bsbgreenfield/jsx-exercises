const App = () => {
    return (
        <div>
            <Person        
                name="Benji"
                age = {23}
                hobbies = {["chess", "coding", "history"]}
                />
            <Person
                name="john"
                age = {12}
                hobbies = {["voting", "legos"]} 
                />
            <Person
                name="bob"
                age = {45}
                hobbies = {["reading", "running for office"]}
                />
        </div>
      
    )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App/>)

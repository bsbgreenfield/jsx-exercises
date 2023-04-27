const App = () => {
    return (
        <div>
            <Tweet
                username="bsbgreen"
                name="Benji"
                date="4/27/2023"
                message="This is my first tweet!" 
                />
            <Tweet
                username="otheruser"
                name="otheguy"
                date="4/24/2023"
                message="Hello there!" 
                />
            <Tweet
                username="admin"
                name="adminuser"
                date="4/21/2023"
                message="Welcome to the app!" 
                />
        </div>
      
    )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App/>)

import { BusinessCard } from "./components/BuisnessCard"

function App() {
  const users = [{
    name: 'Ram Krishna Singh',
    description: 'Full Stack Data Scientist',
    interests: ['Coding', 'Travelling', 'Coffee']

  }]
  return (
    <div>
      {users.map((user) => {
        return <BusinessCard
          name={user.name}
          description={user.description}
          interests={user.interests}
        ></BusinessCard>
      })}
    </div>
  )
}

export default App
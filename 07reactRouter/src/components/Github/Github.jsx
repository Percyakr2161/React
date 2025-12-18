import { useLoaderData } from 'react-router-dom'
import './Github.css'

function Github() {
  const data = useLoaderData()

  return (
    <div className="github">
      <h2>Github Followers: {data.followers}</h2>
      <img src={data.avatar_url} alt="Avatar" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const res = await fetch('https://api.github.com/users/Percyakr2161')
  return res.json()
}

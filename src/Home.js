import { useContext } from "react"
import Feed from "./Feed"
import DataContext from "./context/DataContext"

const Home = () => {
  const {searchResults} = useContext(DataContext)
  return (
    <main className="Home">
      {searchResults.length?(
        <Feed />
      ):(
        <p style={{marginTop:"2rem"}}>
          No posts to display
        </p>
      )}
    </main>
  )
}
export default Home
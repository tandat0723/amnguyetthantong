import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Body from './Pages/HomePage/Body'
// import AuthorPage from './Pages/ProfilePage/Profile'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
// import PostPage from './Pages/PostPage/PostPage'
// import MostLikedPost from './Pages/MostLikedPost/MostLikedPost'
// import NavigationBar from './components/NavBar/NavigationBar'
import Footer from './components/Footer/Footer'
import NavigationBar from './components/NavBar/NavigationBar'

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Body} />
          {/* <Route exact path="/MostLikedPost" component={MostLikedPost} />
          <Route exact path="/MostCommentPost" component={MostLikedPost} />
          <Route exact path="/:pageNo" component={Body} />
          <Route exact path="/profile/:authorId" component={AuthorPage} />
          <Route exact path="/Post/:postId" component={PostPage} /> */}
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App

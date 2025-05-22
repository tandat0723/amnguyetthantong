import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Body from './Pages/HomePage/Body'
import AuthorPage from './Pages/ProfilePage/Profile'
import { BrowserRouter as Router, Switch, Route, useLocation} from 'react-router-dom'
import PostPage from './Pages/PostPage/PostPage'
import MostLikedPost from './Pages/MostLikedPost/MostLikedPost'
import NavigationBar from './components/NavBar/NavigationBar'
import Footer from './components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Body} />
            <Route exact path="/MostLikedPost" component={MostLikedPost} />
            <Route exact path="/MostCommentPost" component={MostLikedPost} />
            <Route exact path="/:pageNo" component={Body} />
            <Route exact path="/profile/:authorId" component={AuthorPage} />
            <Route exact path="/Post/:postId" component={PostPage} />
          </Switch>
          <Footer />
        </Router>
      </BrowserRouter>

    </div>
  )
}

export default App

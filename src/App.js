import './App.css'
import News from './components/News/News'
import Messages from './components/Messages/Messages'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Friends from './components/Friends/Friends'
import Account from './components/Account/Account'
function App(props){
    return(
        <BrowserRouter>
        <div className="wrapper">
            <Header />
            <Nav />
            <main className="section">
                <Routes>
                    <Route path="/" element={<News/>}/>
                    <Route path="/messages" element={<Messages/>}/>
                    <Route path="/friends" element={<Friends/>}/>
                    <Route path="/account" element={<Account/>}/>
                </Routes>
            </main>
        </div>
        </BrowserRouter>
    )
}
export default App
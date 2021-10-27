import React from 'react'
import Home from './Home'
import About from './About'
import Yoga from './Yoga'
import Heal from './Heal'
import Contact from './Contact'
import Header from '../components/Header'
import { Switch, Route } from 'react-router-dom'

const Main = () => {
    return (
        <main className="h-screen w-screen bg-white">
            <Header />

            <Switch>
                <Route path="/" exact component={() => <Home />} />
                <Route path="/about" component={() => <About />} />
                <Route path="/yoga" component={() => <Yoga />} />
                <Route path="/heal" component={() => <Heal />} />
                <Route path="/contact" exact component={() => <Contact />} />
            </Switch>
        </main>
    )
}

export default Main

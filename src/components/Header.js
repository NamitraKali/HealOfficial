import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'


const yogaTitle = 'Yoga';
const yogaLinks = [
    {
        'name': "In Studio",
        'route': "/yoga/in_studio"
    },
    {
        'name': "Online",
        'route': "/yoga/online"
    }
]

const healTitle = 'Heal';
const healLinks = [
    {
        'name': "Workshops",
        'route': "/heal/workshops"
    },
    {
        'name': "Programs",
        'route': "/heal/programs"
    },
    {
        'name': "Mentorship",
        'route': "/heal/mentorship"
    },
    {
        'name': "Testimonials",
        'route': "/heal/testimonials"
    }
]

const Header = () => {
    return (
        <header className="flex justify-between items-center bg-transparent fixed w-screen">
            <h1 className="mx-4 my-2 font-serif font-light text-3xl">
                <Link to="/">
                    Hela Kali
                </Link> 
            </h1>

            <ul className="space-x-4 mx-2 px-2">
                <li className="inline-block">
                    <Link to="/about">About</Link>
                </li>
                <li className="inline-block">
                    <Dropdown title={yogaTitle} links={yogaLinks} />
                </li>
                <li className="inline-block">
                    <Dropdown title={healTitle} links={healLinks} />
                </li>
                <li className="inline-block">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header

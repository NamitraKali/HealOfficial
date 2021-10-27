import React from 'react'
import { Popover } from '@headlessui/react'
import { Link } from 'react-router-dom'

const Dropdown = ( {title, links} ) => {
    return (
        <Popover className="relative" >
            <Popover.Button>{title}</Popover.Button>

            <Popover.Panel className="absolute z-10">
                <div className="grid grid-cols-1">
                    {links.map( (link, id) => { return (
                        <Link to={link.route}>{link.name}</Link>
                    )})}
                </div>
            </Popover.Panel>
        </Popover>
    )
}

export default Dropdown
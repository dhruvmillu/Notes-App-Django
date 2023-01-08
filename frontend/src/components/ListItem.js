import React from 'react'
import { Link } from 'react-router-dom'

let setTime = (note) => {
    return new Date(note.updated).toLocaleDateString()
}

let setTitle = (note) => {

    let title = note.body.split('\n')[0]
    if (title.length > 45) {
        return title.slice(0, 45)
    }
    return title
}


let getbody = (note) => {
    let title = setTitle(note)
    let body = note.body.replaceAll('\n', ' ')
    body = body.replaceAll(title, '')

        return body.length > 45 ? body.slice(0, 45) + '...': body
    
}


const ListItem = ({ note }) => {
    return (
        <Link to={`/note/${note.id}`}>
            <div className="notes-list-item" >
                <h3>{setTitle(note)}</h3>
                <p><span>{setTime(note)}</span>{getbody(note)}</p>
            </div>

        </Link>
    )
}

export default ListItem

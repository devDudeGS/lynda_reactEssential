import React from 'react'
import ReactDOM from 'react-dom'

class Message extends React.Component {
    render() {
        return (
            <div>
                <h1>Konnichiwa Everyone!</h1>
            </div>
        )
    }
}

// // CSS variable
// var style = {
//     backgroundColor: 'orange',
//     // text color
//     color: 'white',
//     // text font
//     fontFamily: 'Arial'
// }

// // create an element that must be rendered to the DOM
// const title = React.createElement(
//     // ul = unordered list
//     'ul',
//     {id: 'title', className: 'header', style: style},
//     React.createElement(
//         // li = list item
//         'li',
//         {},
//         'item on our list'
//     )
// )

ReactDOM.render(
    // what?
    <Message />,
    // where? (this is a div in public > index.html)
    document.getElementById('root')
)
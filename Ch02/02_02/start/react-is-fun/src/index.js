import React, { Component } from 'react'
import { render } from 'react-dom'

// array object with data (typically from database)
let bookList = [
    {"title": "The Sun Also Rises", "author":"Ernest Hemingway", "pages": 260},
    {"title": "Homo Deus", "author":"Herari", "pages": 460},
    {"title": "The Art of Learning", "author":"Josh Waitzkin", "pages": 360},
    {"title": "Paddle Your Own Canoe", "author":"Nick Offerman", "pages": 360}
]

// child component, implemented in parent
const Book = ({title, author, pages, freeBookmark}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by {author}</p>
            <p>Pages: {pages} pages</p>
            <p>Free Bookmark Today: {freeBookmark ? 'yes!':'no!'}</p>
        </section>
    )
}

const Hiring = () =>
    <div>
        <p>The library is hiring. Go to www.library.com/jobs for more.</p>
    </div>

const NotHiring = () =>
    <div>
        <p>The library is not hiring. Check back later for more info.</p>
    </div>

// parent component with 1+ child components
class Library extends Component {
    // src of truth
    state = {
        open: true,
        freeBookmark: true,
        hiring: true
    }

    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }
    render() {
        console.log(this.state)
        const { books } = this.props
        return (
            <div>
                {this.state.hiring ? <Hiring /> : <NotHiring />}
                <h1>The Library is {this.state.open ? 'open' : 'closed'}</h1>
                <button onClick={this.toggleOpenClosed}>Change</button>
                {books.map(
                    (book, i) => <Book
                        key={i}
                        title={book.title}
                        author={book.author}
                        pages={book.pages}
                        freeBookmark={this.state.freeBookmark}/>
                )}
            </div>
        )
    }
}

// // object
// let skiData = {
//     total: 50,
//     powder: 20,
//     backcountry: 10,
//     goal: 100
// }
//
// const getPercent = decimal => {
//     return decimal * 100 + '%'
// }
// const calcGoalProgress = (total, goal) => {
//     return getPercent(total/goal)
// }
//
// // creating component as a function
// const SkiDayCounter = ({total, powder, backcountry, goal}) => {
//     return (
//         <section>
//             <div>
//                 <p>Total Days: {total}</p>
//             </div>
//             <div>
//                 <p>Powder Days: {powder}</p>
//             </div>
//             <div>
//                 <p>Backcountry Days: {backcountry}</p>
//             </div>
//             <div>
//                 <p>Goal Progress: {calcGoalProgress(total, goal)}</p>
//             </div>
//         </section>
//     )
// }

// class SkiDayCounter extends Component {
//     // methods local to Component
//     getPercent = decimal => {
//         return decimal * 100 + '%'
//     }
//     calcGoalProgress = (total, goal) => {
//         return this.getPercent(total/goal)
//     }
//
//     render() {
//         const { total, powder, backcountry, goal } = this.props
//         return (
//             <section>
//                 <div>
//                     <p>Total Days: {total}</p>
//                 </div>
//                 <div>
//                     <p>Powder Days: {powder}</p>
//                 </div>
//                 <div>
//                     <p>Backcountry Days: {backcountry}</p>
//                 </div>
//                 <div>
//                     <!-- calling method -->
//                     <p>Goal Progress: {this.calcGoalProgress(total, goal)}</p>
//                 </div>
//             </section>
//         )
//     }
// }

// class Message extends React.Component {
//     render() {
//         console.log(this.props)
//         return (
//             <div>
//                 <h1 style={{color: this.props.color}}>
//                     {this.props.msg}
//                 </h1>
//                 <p>I'll hit you up in {this.props.minutes} minutes</p>
//             </div>
//         )
//     }
// }

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

// render(
//     // what?
//     <SkiDayCounter
//         total={skiData.total}
//         powder={skiData.powder}
//         backcountry={skiData.backcountry}
//         goal={skiData.goal}/>,
//     //<Message color="blue" msg="how are you?" minutes={5}/>,
//     //<Message age={50} msg="how are you?" />,
//     // where? (this is a div in public > index.html)
//     document.getElementById('root')
// )

render(
    // what?
    <Library books={bookList} />,
    // where? (this is a div in public > index.html)
    document.getElementById('root')
)
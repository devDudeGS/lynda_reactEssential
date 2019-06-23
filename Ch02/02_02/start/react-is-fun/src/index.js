import React from 'react'
import { render } from 'react-dom'
import Library from './Library'

// array object with data (typically from database)
let bookList = [
    {"title": "The Sun Also Rises", "author":"Ernest Hemingway", "pages": 260},
    {"title": "Homo Deus", "author":"Herari", "pages": 460},
    {"title": "The Art of Learning", "author":"Josh Waitzkin", "pages": 360},
    {"title": "Paddle Your Own Canoe", "author":"Nick Offerman", "pages": 360}
]

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

// class FavoriteColorForm extends Component {
//     state = { value: ''}
//
//     newColor = e =>
//         this.setState({ value: e.target.value })
//
//     submit = e => {
//         console.log(`New Color: ${this.state.value}`)
//         e.preventDefault()
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.submit}>
//                 <label>Favorite Color:
//                     <input
//                         type="color"
//                         onChange={this.newColor}/>
//                 </label>
//                 <button>Submit</button>
//             </form>
//         )
//     }
// }

render(
    // what?
    <Library books={bookList} />,
    //<FavoriteColorForm />,
    // where? (this is a div in public > index.html)
    document.getElementById('root')
)
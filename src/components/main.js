import ReactDOM from 'react';
import React from 'react';
import Tweet from './Tweet';
import Tweetdata from './Tweetdata';


class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: Tweetdata
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.liked = !todo.liked
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
        console.log("Changed", id)
    }
    render() {
        const TweetComponents = this.state.todos.map(tweeta => <Tweet handleChange={this.handleChange} key={tweeta.id} TweetMessage={tweeta.TweetMessage} Tweethandle={tweeta.Tweethandle} />)
        const todoItems = this.state.todos.map(tweeta => <Tweet key={tweeta.id} item={tweeta} handleChange={this.handleChange}/>)
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}

export default Main

import ReactDOM from 'react';
import React from 'react';
import Tweet from './Tweet';
import Tweetdata from './Tweetdata';


class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: Tweetdata,
            tweeeet : []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    
    componentDidMount(){
     
        fetch("http://localhost:5000/api/v1.0/Tweet/all")
        .then(response => response.json())
        .then(data => {
            this.setState({
                
                tweeeet: data
                
            })
        }).then(console.log(this.state.tweeeet))
       
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        liked: !todo.liked
                    }
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
       // const TweetComponents = this.state.todos.map(tweeta => <Tweet handleChange={this.handleChange} key={tweeta.id} TweetMessage={tweeta.TweetMessage} Tweethandle={tweeta.Tweethandle} />)
       const TweetComponentsdb = this.state.tweeeet.map(tweeta => <Tweet handleChange={this.handleChange} key={tweeta._id} userID={tweeta.userID} tweetTime={tweeta.tweetTime} TweetMessage={tweeta.tweetMessage} Tweethandle={tweeta.tweethandle} />)
        
       //const TweetComponentsdb = this.state.tweeeet.map(tweeta => <Tweet handleChange={this.handleChange} key={this.state.tweeeet._id} TweetMessage={this.state.tweeeet.tweetMessage} Tweethandle={this.state.tweeeet.tweethandle} />)
       // const todoItems = this.state.tweeeet.map(tweeta => <Tweet key={this.state.tweeeet._id} item={this.state.tweeeet} handleChange={this.handleChange}/>)
        return (
            <div className="todo-list">
                {TweetComponentsdb}
            </div>
        )    
    }
}

export default Main

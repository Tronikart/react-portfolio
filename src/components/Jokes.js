import React, { Component } from 'react';


const Joke = ({ jokeInfo:  { setup, punchline }  }) => (
        <p style={{ margin: 20 }}>{setup} <em>{punchline}</em></p>
)

class Jokes extends Component {
    state = { joke: {}, jokes: [] };

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(json => this.setState({joke:json}))
            .catch(error => alert(error.message));
    }

    moreJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => this.setState({jokes: json}))
        .catch(error => alert(error.message));
    }

    render() {
        return (
        <div>
            <h2>Highlighted Joke</h2>
            <Joke jokeInfo={this.state.joke} />
            <hr />
            <button onClick={this.moreJokes}>Get ten more </button>
            <div>
            {
                this.state.jokes.map(joke  => (
                    <Joke key={joke.id} jokeInfo={joke} />
                ))
            }
            </div>
        </div>
        )
    }
}

export default Jokes;
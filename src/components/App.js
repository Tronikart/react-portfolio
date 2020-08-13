import React, { Component } from 'react';
import Projects from './Projects';
import Socials from './Socials';
import profile from '../assets/profile.jpg';
import Title from './Title.js';

class App extends Component {
  state = { displayBio: false};
  toggleDisplayBio = () => {
    this.setState({displayBio : !this.state.displayBio})
  }

  render() {

    return (
      <div>
        <img src={profile} alt='profile' className='profile'/>
        <h1>Hello!</h1>
        <p>My name is Abraham.</p>
        <Title />
        <p>I need new job</p>
        {
          this.state.displayBio ? (
            <div>
              <p>I live in Country and code every day.</p>
              <p>My favorite past time is creating new things and learning about several topics</p>
              <p>I also like improving myself constantly, even outside of the work-related things</p>
              <button onClick={this.toggleDisplayBio}>Show less</button>
            </div>
          ) : (
            <div>
              <button onClick={this.toggleDisplayBio}>Read more</button>
              </div>
          )
        }
        <hr />
        <Projects />
        <hr />
        <Socials />
      </div>
    )
  }
}

export default App;
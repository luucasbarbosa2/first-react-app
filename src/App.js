import React, { Component } from 'react';
import axios from 'axios';


import {SubmitButton} from "./Components/basic/buttons"
import { PostField } from "./Components/basic/forms"





const api = axios.create({
  baseURL: 'http://localhost:3333'
})
class App extends Component {
  
  state = {
    newPostContent: '',
    posts: [],
    clearText: () => {},
    buttonStatus : true
  }

  async componentDidMount() {
    const { data: posts } = await api.get('/posts');
    this.setState({ posts });
  }

  handlePostSave = async (e) => {
    e.preventDefault()
    const { data: post } = await api.post('/posts', { content: this.state.newPostContent })
    this.setState({ posts: [...this.state.posts, post], newPostContent: '' })
    this.state.clearText()

  }

  handleChange(data, fn = {}){
    this.setState({ newPostContent: data })
    this.state.newPostContent.length > 1 ? this.setState({ buttonStatus: false }) : this.setState({ buttonStatus: true })
    this.setState({clearText: fn})
  }


  render() {
    return (
      <div className="App" >
        <form onSubmit={this.handlePostSave}>
          <PostField value = {this.state.newPostContent} onChange={this.handleChange.bind(this)}/>
          <SubmitButton color = "primary" text = "Enviar" disabled = {this.state.buttonStatus}/>
   
        </form>

        <ul>
          {this.state.posts.map(post => (
            <li key={post.id}>{post.content}</li>
          ))}

        </ul>
      </div>

    );
  }
}

export default App;

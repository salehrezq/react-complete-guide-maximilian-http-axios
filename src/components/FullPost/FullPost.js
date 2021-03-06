import React, {Component} from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {

   state = {
      post: null
   }

   componentDidUpdate = (prevProps, prevState, snapshot) => {
      // Check if `this.props.postId` is not null
      if (this.props.postId) {
         // Because componentDidUpdate() will run for every update of either `props` or `state`
         // and since we update the `state` below using this.setState()
         // in turn this will trigger again a call to componentDidUpdate()
         // so by logic it will loop infinitely!
         // To prevent that infinite call loop of componentDidUpdate()
         // We must check to prevent `this.setState()` unless an updated `props` value received.
         if (this.props.postId !== prevProps.postId) {
            axios.get('/posts/' + this.props.postId).then((response) => {
               this.setState({post: response.data});
            });
         }
      }
   }

   deletePostHandler = () => {
      axios.get('/posts/' + this.state.post.id).then((response) => {
         console.log(response);
      });
   }

   render() {
      let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;

      if (this.props.postId) {
         post = <p style={{textAlign: 'center'}}>Loading...</p>;
      }

      if (this.state.post) {
         post = (
            <div className="FullPost">
               <h1>{this.state.post.title}</h1>
               <p>{this.state.post.body}</p>
               <div className="Edit">
                  <button
                     onClick={this.deletePostHandler}
                     className="Delete">Delete
                  </button>
               </div>
            </div>
         );
      }

      return post;
   }
}

export default FullPost;
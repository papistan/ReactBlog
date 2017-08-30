import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class PostsIndex extends Component {
	render() { 
			return ( 
				<div>
					<button
						onClick={() => {console.log("yes")}}
					>
					New Post
					</button>
				</div>
			)
	}
}

export default PostsIndex;
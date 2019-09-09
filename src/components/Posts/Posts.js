import React, { Component } from 'react';
import axios from 'axios';

export default class Posts extends Component {
    state = {
        title: '',
        img: '',
        content: '',
        author: '',
        authorPicture: ''
    }

    getPostInfo = () => {
        axios.get().then().catch();
    }
    
    render() {
        return (
            <div>
                Posts
            </div>
        )
    }
}

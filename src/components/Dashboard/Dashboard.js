import React, { Component } from 'react';
import axios from 'axios';

export default class Dashboard extends Component {
    state = {
        posts: [],
        search: '',
        userposts: true
    }

    handleChange = (event) => {
        this.setState({
            [event.target.key]: event.target.value
        });
    }


    // getAllPosts = () => {
    //     console.log('Getting Posts');
    //     console.log('');
    //     axios.get(`/api/posts/${postid}`).then(res => {

    //     }).catch();
    // }

    resetSearch = () => {
        this.setState({
            search: ''
        });
    }

    searchPosts = () => {
        console.log('seaching Posts');
        console.log('');

    }

    render() {
        return (
            <div>
                <div>
                    <h1>Dashboard</h1>
                    <input type='text'
                        key='search'
                        onChange={this.handleChange}
                        placeholder="Search" />
                    <button onClick={this.searchPosts}>Search</button>
                    <button>Reset</button>
                    <h4>CheckboxCommingSoon</h4>
                </div>
                <div>
                    {this.state.posts}
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'

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


    getAllPosts = () => {

    }

    resetSearch = () => {

    }

    render() {
        return (
            <div>
                <div>
                    <h1>Dashboard</h1>
                    <input type='text'
                        key='search'
                        onChange={this.handleChange}
                        placeholder="Search By Title" />
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

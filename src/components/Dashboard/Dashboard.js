import React, { Component } from 'react'

export default class Dashboard extends Component {
    state = {
        posts: [],
        search:'',
        userposts: true
    }

    getAllPosts = () => {

    }

    resetSearch = () => {

    }
    
    render() {
        return (
            <div>
                <h1>
                    Dashboard
                </h1>
            </div>
        )
    }
}

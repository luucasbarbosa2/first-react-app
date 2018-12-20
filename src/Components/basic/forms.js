import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class PostField extends Component {
    state = {
        newPostContent: ''
    }
    properties = {
        super: ''
    }

    componentWillUpdate(){
    }

    handleChange = (e) => {
        this.setState({ newPostContent: e.target.value })
        this.props.onChange(e.target.value, (data) => {
            this.setState({
                newPostContent: ''
            })
        }) 
        
    }
    render() {
        return (
            <TextField
                id="standard-multiline-flexible"
                label="Post"
                multiline
                rowsMax="4"
                onChange={this.handleChange}
                value={this.state.newPostContent}
                margin="normal"
            />
        )
    }


}




export { PostField }
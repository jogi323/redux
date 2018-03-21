import React, { Component } from "react";
import "../css/addPosts.css";
import { savePosts } from "../actions/postsAction";
import { connect } from "react-redux";

class AddPosts extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            body: ""
        }
    }
    handleChange =  (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submit = (e) =>  {
        e.preventDefault();
        var payload = {
            title: this.state.title,
            body: this.state.body
        };
        this.props.savePosts(payload);
    }

    render() {
        return (
        <div className="add-post">
            <form className="col-md-6 col-md-offset-3" onSubmit={this.submit}>
                <h1>Add new post</h1>
                <div className="form-group">
                    <label>Title: </label>
                    <input type="text" name = "title" className="form-control" value={this.state.title} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Body: </label>
                    <textarea name = "body" className="form-control" value={this.state.body} onChange={this.handleChange}></textarea>
                </div>
                <div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
            
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
};

export default connect(mapStateToProps,{savePosts})(AddPosts);
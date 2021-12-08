import React , { Component } from 'react';
import { Card,  CardText, CardTitle } from 'reactstrap';

class Comments extends Component {

    constructor (props){
        super(props);
    }

render(){
    
    if (this.props.dish != null){
        return(
            <div className ='col-12 col-md-5 m-1'>
                <Card >
                    <CardTitle>Comments</CardTitle>
                    {this.props.dish.comments.map((item) => (
                        <div>
                            <CardText>{item.comment}</CardText>
                            <CardText>{item.author}</CardText>
                            <CardText>{item.date}</CardText>
                        </div>
                    ))}
                </Card>
            </div>
            )
    }else{
        return (
            <div></div>
        );
    }
  }
}

export default Comments;
import React , { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetails extends Component {

    constructor (props){
        super(props);
    }

render(){
    
    if (this.props.dish != null){
        return(
            <div className ='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg  width='100%' src={this.props.dish.image} alt={this.props.dish.name}/>
                </Card>
                <Card >
                    <CardTitle>{this.props.dish.name}</CardTitle>
                    <CardText>{this.props.dish.description}</CardText>
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

export default DishDetails;
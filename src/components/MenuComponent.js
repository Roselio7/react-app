import React , { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetails from './dishDetails';
import Comments from './comments'

class Menu extends Component {

    constructor (props){
        super(props);

        this.state = {
            selectedDish: null
        }
    }
    onDisheSelected (dish) {
        this.setState({selectedDish: dish})
    }


    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className ='col-12 col-md-5 m-1'>
                    <Card onClick={() => this.onDisheSelected(dish)}>
                        <CardImg  width='100%' src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });
        return(
            <div className='container'>
                <div className='row'>  
                    {menu}
                </div>
                <div className='row' >
                    <DishDetails dish={this.state.selectedDish}/>
                    <Comments dish={this.state.selectedDish}/>
                </div>
            </div>

        );
    }
}

export default Menu;
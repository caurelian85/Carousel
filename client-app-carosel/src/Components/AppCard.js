import {Component} from 'react';
import Card from 'react-bootstrap/Card'

class AppCard extends Component{

    render(){
        return (
        <Card border="primary" style={{ width: '15rem', margin: '10px' }}>
            <Card.Header>{this.props.header}</Card.Header>

            <Card.Body>
            <Card.Title>{this.props.subheader}</Card.Title>
            <Card.Text>
                {this.props.content}
            </Card.Text>
            </Card.Body>
        </Card> 
        );  
    }
}

export default AppCard;
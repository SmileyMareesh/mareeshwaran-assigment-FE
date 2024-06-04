import React from 'react';
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import {calculateRewards} from '../utilities'
function MyCard({transaction}) {

    return (
        <Card className='card'>
            <Card.Body>
                <Card.Title className='textbold'>${transaction.amount}</Card.Title>
                <div className='transaction-details'>
                   <Card.Text>{moment(transaction.date).format("MMM Do YYYY")}</Card.Text>
                   <Card.Text>{calculateRewards(transaction.amount)} <span>Reward points earned</span></Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
}

export default MyCard;
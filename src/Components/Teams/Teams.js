import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Teams.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Teams = ({ team }) => {

    const { strTeam, idTeam, strTeamBadge, strSport } = team
    return (

        <React.Fragment>
            <Col className="team" sm={4}>
                <Card className="card-info text-center h-100">
                    <Card.Img variant="top" src={strTeamBadge} />
                    <Card.Body>
                        <Card.Title>{strTeam}</Card.Title>
                        <Card.Text>Sports Type: {strSport}</Card.Text>
                        <Link to={"/team/" + idTeam}>Explore <FontAwesomeIcon icon={faArrowRight} /></Link>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default Teams;
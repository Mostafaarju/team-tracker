import { faFlag, faFutbol, faMapMarked, faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import TeamHeader from '../TeamHeader/TeamHeader';
import './TeamDetails.css'

const TeamDetails = () => {
    const { teamId } = useParams();
    const [team, setTeam] = useState({});

    useEffect(() => {
        const api = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        axios(api)
            .then(data => setTeam(data.data.teams[0]));
    }, [teamId])

    const { strDescriptionEN, idTeam, strAlternate, strCountry, intFormedYear, strTeamBadge, strFacebook, strGender, strTwitter, strWebsite, strYoutube, strSport } = team;

    const maleBanner = <img src="https://i.ibb.co/4R8p4z5/male.png" alt="male" />;
    const femaleBanner = <img src="https://i.ibb.co/TK8fhRC/female.png" alt="female" />;

    const str = "how are you"

    const strs = strDescriptionEN?.split(' ')

    console.log(strs);

    return (
        <div>

            <div className="team-header">
                <TeamHeader logo={strTeamBadge} />
            </div>
            <div className="breadcrumb">
                <span><Link to="/">Home</Link> {'>'} <Link to={"/league/" + idTeam}>Team</Link></span>
            </div>
            <Container>
                <Row className="team-info row">
                    <Col className="team-info" md={6}>
                        <h1>{strAlternate}</h1>
                        <p><FontAwesomeIcon icon={faMapMarked}></FontAwesomeIcon> Founded: {intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlag}></FontAwesomeIcon> Country: {strCountry}</p>
                        <p><FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon> Sports Type: {strSport}</p>
                        {strGender === "Male" && <p><FontAwesomeIcon icon={faMars}></FontAwesomeIcon> Gender: {strGender}</p>}
                        {strGender === "Female" && <p><FontAwesomeIcon icon={faVenus}></FontAwesomeIcon> Gender: {strGender}</p>}
                    </Col>
                    <Col className="team-image" md={6}>
                        {strGender === "Male" && maleBanner} {strGender === "Female" && femaleBanner}
                    </Col>
                </Row>
                <div className="team-content">
                    <p>{strDescriptionEN}</p>
                </div>
                <div className="social-icon">
                    <Link to={'https://' + strFacebook}>Facebook</Link>
                    <Link to={strTwitter}>Facebook</Link>
                    <Link to={strWebsite}>Facebook</Link>
                    <Link to={strYoutube}>Facebook</Link>
                </div>
            </Container>
        </div>
    );
};

export default TeamDetails;
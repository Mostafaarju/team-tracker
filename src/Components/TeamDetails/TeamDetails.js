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
import SocialIcons from '../SocialIcons/SocialIcons';

const TeamDetails = () => {
    const { teamId } = useParams();
    const [team, setTeam] = useState({});

    useEffect(() => {
        const api = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        axios(api)
            .then(data => setTeam(data.data.teams[0]));
    }, [teamId])

    const { strTeamFanart4, strDescriptionEN, idTeam, strAlternate, strCountry, intFormedYear, strTeamBadge, strFacebook, strGender, strTwitter, strWebsite, strInstagram, strYoutube, strSport } = team;

    const maleBanner = <img src="https://i.ibb.co/bRLcsKB/thumbs-b-c-ddb5278adc7518b5b034603f12315768.jpg" alt="male" />;
    const femaleBanner = <img src="https://i.ibb.co/TK8fhRC/female.png" alt="female" />;
    const mixedBanner = <img src="https://i.ibb.co/3N5NYS9/mixed.png" alt="mixed" />;

    // String separate in multiple paragraph
    const description = strDescriptionEN?.split(" ")
    const first100Paragraphs = description?.slice(0, 100).join(" ")
    const second100Paragraphs = description?.slice(100, 200).join(" ")
    const restParagraphs = description?.slice(200).join(" ")

    return (
        <React.Fragment>
            <TeamHeader banner={strTeamFanart4} logo={strTeamBadge} />

            <div className="breadcrumb">
                <span><Link to="/">Home</Link> {'>'} <Link className="active" to={"/team/" + idTeam}> Team </Link></span>
            </div>

            <Container>
                <div className="team-container">
                    <Row className="team-info">
                        <Col md={7}>
                            <h1>{strAlternate}</h1>
                            <div className="team-paragraph-info">
                                <p><FontAwesomeIcon icon={faMapMarked}></FontAwesomeIcon> Founded: {intFormedYear}</p>
                                <p><FontAwesomeIcon icon={faFlag}></FontAwesomeIcon> Country: {strCountry}</p>
                                <p><FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon> Sports Type: {strSport}</p>
                                {strGender === "Male" && <p><FontAwesomeIcon icon={faMars}></FontAwesomeIcon> Gender: {strGender}</p>}
                                {strGender === "Female" && <p><FontAwesomeIcon icon={faVenus}></FontAwesomeIcon> Gender: {strGender}</p>}
                            </div>
                        </Col>
                        <Col className="team-image" md={5}>
                            {strGender === "Male" && maleBanner}
                            {strGender === "Female" && femaleBanner}
                            {strGender === "Mixed" && mixedBanner}
                        </Col>
                    </Row>
                </div>
                <div className="team-content">
                    <p>{first100Paragraphs}</p>
                    <p>{second100Paragraphs}</p>
                    <p>{restParagraphs}</p>
                </div>
            </Container>
            <SocialIcons key={idTeam} instagram={strInstagram} youtube={strYoutube} facebook={strFacebook} web={strWebsite} twitter={strTwitter} />
        </React.Fragment>
    );
};

export default TeamDetails;
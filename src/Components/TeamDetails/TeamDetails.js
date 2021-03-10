import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import TeamHeader from '../TeamHeader/TeamHeader';

const TeamDetails = () => {
    const { teamId } = useParams();
    const [team, setTeam] = useState({});

    useEffect(() => {
        const api = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        axios(api)
            .then(data => setTeam(data.data.teams[0]));
    }, [teamId])

    console.log(team);

    const { strCountry, intFormedYear, strBadge, strBanner, strFacebook, strGender, strLeague, strTwitter, strWebsite, strYoutube, strSport } = team;

    const maleBanner = <img src="https://i.ibb.co/4R8p4z5/male.png" alt="male" />;
    const femaleBanner = <img src="https://i.ibb.co/TK8fhRC/female.png" alt="female" />;

    return (
        <div>
            <div className="team-header">
                <TeamHeader />
            </div>
            <ul>
                <li>{strLeague}</li>
                <li>{intFormedYear}</li>
                <li><img src={strBadge} alt="" /></li>
                <li>{strGender === "Male" && maleBanner} {strGender === "Female" && femaleBanner}</li>
                <li>{strGender}</li>
                <li></li>
            </ul>
        </div>
    );
};

export default TeamDetails;
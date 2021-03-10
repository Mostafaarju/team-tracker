import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Header from '../Header/Header';
import Teams from '../Teams/Teams';

const Home = () => {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const api = "https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4335";
        axios(api)
            .then(data => setTeams(data.data.teams));
    }, [])


    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <Row className="mt-5">
                    {
                        teams.map(team => <Teams key={team.idTeam} team={team} />)
                    }
                </Row>
            </div>
        </React.Fragment>
    );
};

export default Home;
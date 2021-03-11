import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Header from '../Header/Header';
import Teams from '../Teams/Teams';
import "./Home.css"


const Home = () => {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const api = "https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4335";
        axios(api)
            .then(data => setTeams(data.data.teams));
    }, [])

    return (
        <main className="main-section">
            <Header />
            <div className="main-container container mt-4">
                <Row>
                    {teams.map(team => <Teams key={team.idTeam} team={team} />)}
                </Row>
            </div>
        </main>
    );
};

export default Home;
import React from 'react';
import axios from 'axios';

const Player = ({ player, setEdit }) => {
    const deletePlayer = id => {
        axios.delete('http://localhost:4000/player/'+id
        )
        .then(response => console.log(response))
        .catch(err => console.log(err));
    }

    return (
        <div className="row">
            <div className="col s12">
                <div className="card">
                    <div className="card-image">
                        <img src="soccer.jpeg" alt="Soccer Player" />
                        <span className="card-title">{player && player.firstName} {player && player.lastName}</span>
                    </div>
                    <div className="card-content">
                        <p>Phone: {player && player.phone} - Email: { player && player.email}</p>
                        <p>Strength: {player && player.strength} - Endurance: {player && player.endurance}</p>
                    </div>
                    <div className="card-action">
                        Team: {player && player.team}
                    </div>
                </div>
            </div>
            <button className="btn waves-effect waves-light blue" type="submit" name="action" onClick={setEdit.bind(this)}>Edit Player</button>
            <button style={{marginLeft: '20px'}} className="btn waves-effect waves-light red" type="submit" name="action" onClick={ () => deletePlayer(player._id)}>Delete Player</button>
        </div> 
    );
}
 
export default Player;
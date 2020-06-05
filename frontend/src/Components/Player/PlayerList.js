import React from 'react';

// const PlayerList = ({ players, setState }) => {

//     const handleState = item => {
//         debugger
//         setState({ currentPlayer : item })
//     }
//     return (
//         <div>
//            <ul className="collection with-header">
//                <li className="collection-header"><h4>Players</h4></li>
//                {players && players.map((item) => (
//                    <a href="#!" className="collection-item" key={item._id}
//                     onClick={() => handleState(item)} >{item.firstName} {item.lastName}</a>
//                ))}
//            </ul>
//         </div> 
//     );
// }

const PlayerList = (props) => {
    return ( 
    <div>
        <ul className="collection with-header">
            <li className="collection-header"><h4>Players</h4></li>
            {props.players.map((item) => (
                <a href="#!" className="collection-item" key={item._id}
                onClick={props.updateCurrentPlayer.bind(this,item)}>{item.firstName} {item.lastName}</a>
            ))}
        </ul>
    </div> 
    );
}
 
export default PlayerList;
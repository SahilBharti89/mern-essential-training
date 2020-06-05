import React,{ useState, useEffect } from 'react';
import Player from './Player/Player';
import PlayerForm from './Player/PlayerForm';
import PlayerList from './Player/PlayerList'
import EditPlayer from './Player/EditPlayer';
import axios from 'axios';

// function App() {
  // let [state, setState] = useState({
  //   players: [],
  //   currentPlayer: {},
  //   edit: false
  // })

//   useEffect(() => {
//     const url = "http://localhost:4000/players";
//     axios.get(url)
//           .then(response => {
//             setState({ players: response.data });
//           })
//           .catch(err => console.log(err))
//   },[])

//   console.log("state",state)

//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <nav>
//           <div className="nav-wrapper blue darken-1">
//             <a href="/" className="brand-logo">Soccer Management</a>
//           </div>
//         </nav>
//       </div>
//       <div className="row">
//         <div className="col s3">
//           <PlayerList players = {state.players} setState ={setState} />
//         </div>
//         <div className="col s9">
//           <Player player={state.currentPlayer}/>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col s12">
//           <PlayerForm />
//         </div>
//       </div>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      currentPlayer: {},
      edit: false
    }

    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
    this.setEdit = this.setEdit.bind(this);
  }

  componentDidMount() {
    const url = 'http://localhost:4000/players';
    axios.get(url)
      .then((Response) => {
        this.setState({
          players: Response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  updateCurrentPlayer(item) {
    this.setState({
      currentPlayer: item,
    })
  }

  setEdit() {
    this.setState({ edit: true, })
  }
  render () {
    return (
      <div className="container-fluid">
        <div className="row">
        <nav>
          <div className="nav-wrapper blue darken-1">
            <a href="/" className="brand-logo">Soccer Management</a>
          </div>
        </nav>
        </div>
        <div className="row">
          <div className="col s3"><PlayerList players={this.state.players}
            updateCurrentPlayer={this.updateCurrentPlayer}/>
          </div>
          <div className="col s9">
            { this.state.edit ? 
              <EditPlayer player={this.state.currentPlayer} /> :
              <Player player={this.state.currentPlayer} setEdit={this.setEdit}/>
            }
          </div>
        </div>
        <div className="row">
          <div className="col s12"><PlayerForm /></div>
        </div>
      </div>
    );
  }
}

export default App;

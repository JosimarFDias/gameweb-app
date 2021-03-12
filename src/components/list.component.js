import React, { Component } from "react";
import DataService from "../services/players.service";
import "bootstrap/dist/css/bootstrap.min.css";

export default class PlayersList extends Component {
  constructor(props) {
    super(props);
    this.retrievePlayers = this.retrievePlayers.bind(this);
    this.refreshList = this.refreshList.bind(this);
    
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    this.retrievePlayers();
  }

  retrievePlayers() {
    DataService.getAll()
      .then(response => {
        this.setState({
          players: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrievePlayers();    
  }

  setActivePlayer(player, index) {
    this.setState({
      currentPlayer: player,
      currentIndex: index
    });
  }

  render() {
    const { players } = this.state;

    return (
      <div>
        <h2>Lista de Players</h2>

        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Game</th>
                <th>Win's</th>
                <th>Ativo</th>
              </tr>
            </thead>

            <tbody>
              {players && players.map((player, index) => (
                <tr key={player.id}>
                  <td>{player.playerId}</td>
                  <td>{player.gameId}</td>
                  <td>{player.win}</td>
                  <td>{player.ativo ? <span className="badge bg-success text-light">Ativo</span> : <span className="badge bg-light text-dark">Inativo</span> }</td>
                </tr>  
              ))} 
                  
            </tbody>
          </table>          
        </div>        
      </div>      
    );
  }
}

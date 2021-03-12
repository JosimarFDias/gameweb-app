import React, { Component } from "react";
import DataService from "../services/players.service";
import "bootstrap/dist/css/bootstrap.min.css";

export default class TopPlayers extends Component {
  constructor(props) {    
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.searchTitle = this.searchTitle.bind(this);
    
    this.state = {
      players: [],
      searchTitle: "",
    };
  }

  componentDidMount() {
    
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  searchTitle() {
    if (this.state.searchTitle !== "")
      DataService.getByGame(this.state.searchTitle)
        .then(response => {
          this.setState({
            players: response.data
          });
          console.log(response.data);
        })
        .catch(e => { this.setState({players: []}); });
  }

  render() {
    const { searchTitle, players } = this.state;

    return (
      <div>
        <h2>Top player's por game</h2>

        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Digite o Id do game para pesquisar"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Listar
              </button>
            </div>
          </div>
        </div>
        

        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Ranking</th>                
                <th>Id</th>                
                <th>Win's</th>
                <th>Ultima Atualização</th>
              </tr>
            </thead>

            <tbody>
              {players && players.map((player, index) => (
                <tr>
                  <td>{index+1}</td>
                  <td>{player.playerId}</td>
                  <td>{player.balance}</td>
                  <td>{player.lastUpdateDate}</td>
                </tr>  
              ))} 
                  
            </tbody>
          </table>          
        </div>        
      </div>      
    );
  }
}

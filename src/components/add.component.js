import React, { Component } from "react";
import DataService from "../services/players.service";

export default class AddPlayer extends Component {
  constructor(props) {
    super(props);
    this.onChangePlayerId = this.onChangePlayerId.bind(this);
    this.onChangeGameId = this.onChangeGameId.bind(this);
    this.onChangeWin = this.onChangeWin.bind(this);
    this.savePlayer = this.savePlayer.bind(this);
    this.newPlayer = this.newPlayer.bind(this);

    this.state = {
      playerId: '',
      gameId: '',
      win: '',
      published: false,

      submitted: false
    };
  }

  onChangePlayerId(e) {
    this.setState({
      playerId: e.target.value
    });
  }

  onChangeGameId(e) {
    this.setState({
      gameId: e.target.value
    });
  }

  onChangeWin(e) {
    this.setState({
      win: e.target.value
    });
  }

  savePlayer() {
    var data = {
      playerId: this.state.playerId,
      gameId: this.state.gameId,
      win: this.state.win
    };
    console.log(data);
    DataService.create(data)
      .then(response => {
        this.setState({
          playerId: response.data.playerId,
          gameId: response.data.gameId,
          win: response.data.win,
          published: true,

          submitted: true
        });        
      })
      .catch(e => {
        console.log(e);
      });
  }

  newPlayer() {
    this.setState({
      playerId: null,
      gameId: null,
      win: null,
      published: false,

      submitted: false
    });
  }
  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>Salvo com sucesso!</h4>
            <button className="btn btn-success" onClick={this.newPlayer}>
              Novo
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="playerId">Player Id</label>
              <input
                type="number"
                className="form-control"
                id="playerId"
                required
                value={this.state.playerId}
                onChange={this.onChangePlayerId}
                name="playerId"
              />
            </div>

            <div className="form-group">
              <label htmlFor="gameId">Game Id</label>
              <input
                type="number"
                className="form-control"
                id="gameId"
                required
                value={this.state.gameId}
                onChange={this.onChangeGameId}
                name="gameId"
              />
            </div>

            <div className="form-group">
              <label htmlFor="win">Win</label>
              <input
                type="number"
                className="form-control"
                id="win"
                required
                value={this.state.win}
                onChange={this.onChangeWin}
                name="win"
              />
            </div>

            <button onClick={this.savePlayer} className="btn btn-success">
              Salvar
              </button>
          </div>
        )}
      </div>
    );
  }
}
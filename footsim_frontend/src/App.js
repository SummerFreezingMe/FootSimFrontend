import {Component} from "react";

class App extends Component {
  state = {
    players: []
  };
  logo;

  async componentDidMount() {
    const response = await fetch('/players/get_all', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const body = await response.json();
    this.setState({players: body});
  }

  render() {
    const {players} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            <img src={this.logo} className="App-logo" alt="logo" />
            <div className="App-intro">
              <h2>Clients</h2>
              {players.map(player =>
                  <div key={player.id}>
                    {player.name} ({player.rating})
                  </div>
              )}
            </div>
          </header>
        </div>
    );
  }
}
export default App;
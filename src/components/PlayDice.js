import React from "react";
import "./PlayDice.css";
import "bootstrap/dist/css/bootstrap.min.css";

class PlayDice extends React.Component {
  constructor() {
    super();
    this.state = {
      qtdDados: 1,
      valoresDados: [],
    };

    this.getRandom = this.getRandom.bind(this);
    this.rollThedice = this.rollThedice.bind(this);
  }

  setQtdDados(valor) {
    this.setState({
      qtdDados: parseInt(valor),
    });
  }

  getRandom() {
    return Math.floor(Math.random() * 7);
  }

  rollThedice() {
    const { qtdDados } = this.state;
    let newNumber = 0;
    const arrayDados = [];
    for (let i = 1; i <= qtdDados; i++) {
      newNumber = this.getRandom();
      if (newNumber === 0) {
        newNumber = 1;
      }
      arrayDados.push(newNumber);
    }
    this.setState({
      valoresDados: arrayDados,
    });
  }

  doTheSwith(dado) {
    switch (dado) {
      case 1:
        return (
          <div className="dice first-face">
            <span className="dot"> </span>
          </div>
        );
      case 2:
        return (
          <div className="dice second-face">
            <span className="dot"> </span>
            <span className="dot"> </span>
          </div>
        );
      case 3:
        return (
          <div className="dice third-face">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        );
      case 4:
        return (
          <div className="dice fourth-face">
            <div className="column">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="column">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="dice fifth-face">
            <div className="column">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="column">
              <span className="dot"></span>
            </div>
            <div className="column">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="dice fourth-face">
            <div className="column">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="column">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        );
      default:
        return (
          <div className="dice first-face">
            <span className="dot"> </span>
          </div>
        );
    }
  }

  showDice(dado) {
    return this.doTheSwith(dado);
  }

  render() {
    const { valoresDados, qtdDados } = this.state;
    const dados = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
      <div>
        <div className='select-container'>
          <label className='select-label'>
            Quantos dados?
            <select
              className="form-select form-select-lg mb-3 select-width"
              aria-label=".form-select-lg example"
              value={qtdDados}
              onChange={(event) => this.setQtdDados(event.target.value)}
            >
              {dados.map((dado) => (
                <option key={dado}>{dado}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="container-dice">
          {valoresDados.map((numero, index) => (
            <div key={index}>{this.showDice(numero)}</div>
          ))}
        </div>
        <div className="container-button-both">
          <button
            className="btn btn-success"
            type="button"
            onClick={() => this.rollThedice()}
          >
            Jogar 🎲!!!
          </button>
        </div>
      </div>
    );
  }
}

export default PlayDice;

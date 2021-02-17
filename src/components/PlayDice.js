import React from 'react';

class PlayDice extends React.Component {
  constructor(){
    super()
    this.state = {
      dado1: 0,
      dado2: 0,
    }

    this.getRandom = this.getRandom.bind(this);
    this.rollThedice = this.rollThedice.bind(this);
  }

  getRandom() {
    return Math.floor(Math.random() * 7);
  };

  rollThedice(dice) {
    if (dice === 'dado1') {
      let newNumber = this.getRandom();
      if (newNumber === 0) {
        newNumber = 1;
      }
      this.setState({
        dado1: this.getRandom(),
      })
    }
  }

  render() {
    const {dado1, dado2} = this.state;
    return (
      <div>
        <div className='container-buttons'>
          <button
            value='dado1'
            type='button'
            onClick={(event) => this.rollThedice(event.target.value)}
          >
            Joga Dado 1
          </button>
          <button value='dado2' type='button'>Joga Dado 2</button>
        </div>
        <div className='container-dice'>
          <span>{ dado1 }</span>
          <span>{ dado2 }</span>
        </div>
        <div className='container-button-both'>
          <button type='button'>Joga Ambos</button>
        </div>
      </div>
    )
  }
}

export default PlayDice;
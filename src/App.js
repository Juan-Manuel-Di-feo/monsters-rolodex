import './App.css';
import React, { Component } from 'react';
import {CardList} from './Component/Card-list/Card-list.component'
import {SearchBox} from './Component/Search-box/search-box.component'

class App extends Component{
  constructor(){
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }
  

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }
  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return(
      <div className = 'App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
        placeholder = 'Type here to search...'
        handleChange = {this.handleChange}
        />
        <CardList monsters = {filteredMonsters}/>
      </div>
    )
  }
}

export default App;

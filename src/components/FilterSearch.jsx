

import React, { Component } from 'react';

class FilterSearch extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
        users: [],
        seachData: ""
      };

    }
  
    componentDidMount() {

      fetch("https://jsonplaceholder.typicode.com/users")

        .then(response => response.json())
        .then(
          (result) => {
            this.setState({users: result});
          })

          
    }
    searchName(e) {
     let value = e.target.value;
     this.setState({seachData:value});
    }
   
  
    render() {
      const {users, seachData} = this.state;
      
        return (
          <div>
            <input type="search" placeholder='search' onChange={this.searchName.bind(this)}/>
            
              {users.filter(item =>{
                return item.name.toLowerCase().includes(seachData.toLowerCase());
              })
                .map(item => {
                return (<h2 key={item.id}>{item.name}</h2>)
              })}
          </div>
         
        );
        
      
    }
  }

  export default FilterSearch;
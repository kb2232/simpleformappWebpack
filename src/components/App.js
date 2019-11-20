import React from 'react';

import SearchBar from './Searchbar';

class App extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div className="component">
        <SearchBar />
      </div>
    )
  }

}

export default App;
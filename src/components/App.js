import React from 'react';

import {SearchBar} from './index';

class App extends React.Component{
  constructor(){
    super();
  }

  onSearchSubmit= (text)=>{
     console.log({text})
  }

  render(){
    return(
      <div className="component">
        <SearchBar callmewhensubmitsearch={this.onSearchSubmit} />
      </div>
    )
  }

}

export default App;
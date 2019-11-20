import React from 'react';
import axios from 'axios';

import {SearchBar, Images} from './index';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      images:[]
    }
  }

  onSearchSubmit= async(textInput)=>{
     const response = await axios.get('https://api.unsplash.com/search/photos',{
       params:{
        query:textInput
       },
       headers:{
        Authorization:'Client-ID e7d7701f79b7d4f80010c8a5003288f02688f291b51770110682258307c8a1f1'
       }
     })
     this.setState({images:response.data.results})
  }

  render(){
    const {ImageContainer, SearchContainer} = styles;
    return(
      <div className="component">
        <div className={SearchContainer}>
        <SearchBar callmewhensubmitsearch={this.onSearchSubmit} />
        </div>
        <div style={ImageContainer}>
          <Images images={this.state.images} />
        </div>
      </div>
    )
  }

}
const styles = {
  ImageContainer:{
    display:'flex',
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'30px'
  },
  SearchContainer:{
    flex:1,
    alignSelf:'center',
    margin:'20px',
  }
}
export default App;
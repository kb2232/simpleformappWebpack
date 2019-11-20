import React from 'react';

class SearchBar extends React.Component{
  constructor(){
    super();
    this.state = {
      inputText:""
    }
  }

  onTextChange(event){
    this.setState({inputText:event.target.value});
  }

  render(){
    const {ButtonContainer, FormContainer,InputSearchContainer} = styles;
    return(
      <div>
        <form style={FormContainer}>
          <input 
          style={InputSearchContainer} 
          onChange={event=>this.onTextChange(event)}
          type="text"
          />
          <input type="submit" value="search" style={ButtonContainer} />
        </form>
      </div>
    )
  }

}
const styles = {
  FormContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    width:'90vw'
  },
  InputSearchContainer:{
    width:"80%",
    height:'40px',
    borderBottomWidth:'4px',
    borderBottomColor:'#000',
    alignSelf: 'stretch'
  },
  ButtonContainer:{
    width:"20%",
    height:"40px",
    marginLeft:'10px',
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'cyan',
    cursor:'pointer'
  }
}
export default SearchBar;
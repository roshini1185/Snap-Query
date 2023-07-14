import React from "react";
import './Global.css';

class SearchInput extends React.Component{
  constructor(props){
    super(props)
    this.state={entry:''}
    this.onFormSubmit=this.onFormSubmit.bind(this)
  }
  onFormSubmit(event){
    //console.log("Present : "+this.state.entry)
    event.preventDefault()
    this.props.onSearchSubmit(this.state.entry)
    
  }
  
   render(){
    return(
      <div >
      <form onSubmit={this.onFormSubmit} >
      <div className="Searchbar_container" >
           <input  
                className="searchbar"
                type="text" 
                placeholder="Search ..."   
                onChange={(event)=>{this.setState({entry:event.target.value})}} value={this.state.entry}/>
                <button className="submit">Submit</button>
      </div>
       
        
      
    </form>
   </div>

    );
   }
}

export default SearchInput;
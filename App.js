import React from 'react';
import SearchInput from './SearchInput';
import ImageList from './ImageList';
import axios from 'axios';
import './Global.css';

class App extends React.Component{
    constructor(props){
        super(props)
        this.state=
        {
            images : []
        }
        this.onSearchSubmit=this.onSearchSubmit.bind(this)
    }
   
async onSearchSubmit(entry){
  console.log("Present entry: "+entry)
 const response = await axios.get(`https://pixabay.com/api/?key=37202763-ef7dc824736662de5e962f03c&q=${entry}&image_type=photo&pretty=true`);

    console.log(response.data.hits)
    this.setState({images: response.data.hits})
}
    render (){
        return(
          
            <div>
             <SearchInput onSearchSubmit={this.onSearchSubmit}  />
             <ImageList list={this.state.images}/> 
        </div>
            
        
    );
    }
}

export default App;
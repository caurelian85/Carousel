import React, {Component} from 'react'
import axios from 'axios'
import AppCarousel from './Components/AppCarousel'

class App extends Component {
  state = {
      items: []
  } 

  componentDidMount(){
    axios.get("http://localhost:58227/WeatherForecast")
    .then(response => this.setState({
        items: response.data
    }));
    }


  render(){
    const carouselItems = this.state.items.map(item => {
      return {
      header: new Date(item.date).toLocaleDateString(),
      subheader: 'Temperature: ' + item.temperatureC,
      content: item.summary
      };
    });
    return(  
      <div style={{marginTop:"20px"}}>
        {/* <AppCard/> */}
        <AppCarousel items = {carouselItems}
        />
      </div>
    );
  }  
}

export default App;

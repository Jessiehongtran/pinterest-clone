import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';


const Tracker = styled.div`
    width: 50%;
    height: 4800px;
    margin: 15px auto;
    background: rgb(34,34,34);
    padding: 20px;
    border-radius: 10px;
    box-shadow: inset 0 0 5px #000;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
`

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  async componentDidMount(){
    const res = await axios.get('https://dog.ceo/api/breed/labrador/images')
    console.log('res', res)
    this.setState({data: res.data.message})
  }

  render(){
    console.log('data', this.state.data)

    const { data } = this.state

    return (
      <div className="App">
        <Tracker>
          {data.map(image => <img src={image}/>)}
        </Tracker>
      </div>
    );
  }
}



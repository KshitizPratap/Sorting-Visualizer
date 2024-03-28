import React, {Component} from 'react';
import { merging } from '../functions/merge'
import {qsort} from '../functions/qsort.js';
import {heapsort} from '../functions/heap.js';
import Controls from '../controller/controller'
import './array.css';
import Logo from './logo.png'

class Array extends Component {
    state = {
        arr : [10, 15, 20, 30],
        elementColor : ['#66FF66'],
        hardReset : false,
        size : 130,
        speed : 10
    }

    sizechange =(t) => {
      this.setState({size : t});
      this.createArray(t)
    }

    speedChange = (t) => {
      this.setState({speed : t});
    }

    colorChange = (t) => {
      this.setState({elementColor : t})
    }

    createArray = (size) => {
        const array = [];
        
        for(let i=0; i<=size; i++)
        {
          if(i === 45){
            continue;
          }
          array.push(Math.floor(Math.random()*400));
        }
        array[75] = 400;
        array[5] = 400;
        this.setState({arr : array});
    }

    reset = () => {
      window.location.reload(false);
    }

    mergeSortMain = (array) =>{
      let anime = merging(array)

      for(let i=0; i<anime.length; i++){
        let bars = document.getElementsByClassName('arrayElement');
        let colorChange = i%3 !== 2;
  
        if(colorChange){
          let color = i%3 === 0 ? 'red' : this.state.elementColor;
          let {a, b} = anime[i];
          if(b < 0){
            b = a;
          }
          let bar1 = bars[a].style;
          let bar2 = bars[b].style;
          setTimeout(() => {
            bar1.backgroundColor = color;
            bar2.backgroundColor = color;
          }, i*(100/this.state.speed))
        }
        else{
          let {k, p} = anime[i];
  
          setTimeout(() => {
            const elementHeight = bars[k].style;
            elementHeight.height = `${p}px`;
          }, i*(100/this.state.speed)); 
          }
        }
      }

    qsortMain = (array) => {
      const anime = qsort(array)

      let count = 0;
      for(let i=0; i<anime.length; i++){

        let bars = document.getElementsByClassName('arrayElement');
        console.log(bars);
        let color = count%2 === 0 ? 'red' : this.state.elementColor;
        let [a, b] = anime[i]
        let bar1 = bars[a].style;
        let bar2 = bars[b].style;

        if(anime[i].length === 2){
          count++;
          setTimeout(() => {
            bar1.backgroundColor = color;
            bar2.backgroundColor = color;
          }, i*(100/this.state.speed))
        }
        else if(anime[i].length === 4){
          setTimeout(() => {
            bar1.height = `${anime[i][3]}px`
            bar2.height = `${anime[i][2]}px`
          }, i*(100/this.state.speed));
        }
      }
    }
    
    heapMain = (array) => {
      const anime = heapsort(array)

      let count = 0;

      for(let i=0; i<anime.length; i++){
        let bars = document.getElementsByClassName('arrayElement');
          let color = count%2 === 0 ? 'red' : this.state.elementColor;
          let [a, b] = anime[i]
          let bar1 = bars[a].style;
          let bar2 = bars[b].style;
  
          if(anime[i].length === 2){
            count++;
            setTimeout(() => {
              bar1.backgroundColor = color;
              bar2.backgroundColor = color;
            }, i*(100/this.state.speed))
          }
          else if(anime[i].length === 4){
            setTimeout(() => {
              bar1.height = `${anime[i][3]}px`
              bar2.height = `${anime[i][2]}px`
            }, i*(100/this.state.speed));
          }
      }
    }

    componentDidMount(){
        this.createArray(130);
    }

    render(){
        return(
          
          <div className="MainContainer">
            {/* ------ Heading of page------ */}
            <div className="nav">
              <img className = "logo" src = {Logo} alt = "logo"/>
              <label className = "mainHeading">Sorting Visualizer</label>
            </div> 

            {/* ------ CONTROLS & SORTING BUTTONS------ */}          

            <div className = "buttons">

              {/* ------ Controls------ */}
              <Controls  
                    sizeChanger = {(event) => {this.sizechange(event.target.value)}}
                    colorChanger = {(event) => {this.colorChange(event.target.value)}}
                    speedChanger = {(event) => {this.speedChange(event.target.value)}}/>
            
              {/* ------ Sorting Buttons------ */}
              <div className = "buttonContainer">
                <button className = "sortButton" onClick = {() => this.mergeSortMain(this.state.arr)}>Merge Sort</button>
                <button className = "sortButton" onClick = {() => this.qsortMain(this.state.arr)}>Quick Sort</button>
                <button className = "sortButton" onClick = {() => this.heapMain(this.state.arr)}>Heap Sort</button>
              </div>
            </div>

            {/* ------ Create Array Button------ */}
            <div className = "arrayButton">
              <button className = "sortButton" 
                    onClick = {() => {this.createArray(this.state.size)}}>Create Array</button>
              <button className = "sortButton"  
                  onClick = {() => {this.reset()}}>Reset Array</button>
            </div>

            
            {/* ------ Array Container------ */}
            <div className = "container">
              {this.state.arr.map((value, index) => (
              <div className="arrayElement" 
                  key = {index} 
                      style = {{width : `${(1110 / this.state.arr.length) - 4}px`, 
                                height : `${value}px`, 
                                backgroundColor : `${this.state.elementColor}`}}>   
              </div> ))}
            </div>
            
          </div>
        );
    }
};

export default Array;
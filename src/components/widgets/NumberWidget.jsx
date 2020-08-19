import WidgetContainer from './WidgetContainer'
import React, {Component} from 'react';
import Draggable from 'react-draggable';
import {Form} from 'react-bootstrap';
import './Widget.css';
import {Rnd} from 'react-rnd';

class TextWidget extends Component{
    constructor(props){
        super(props);
        this.state = {
            editMode: true,
            value:0
        };
        this.textInput = React.createRef();
    }


    handleKeyPress(target) {
      if(target.charCode==13){
          this.setState({
              editMode: false,
              text: this.textInput.current.value
          }); 
      } 
    }
    
    renderEditMode(){
        return (
            <div className="number-widget">
                <input type="number" 
                autoFocus 
                autoComplete="none" 
                defaultValue = {this.state.value} 
                ref={this.textInput} 
                size="1"
                onKeyPress={this.handleKeyPress.bind(this)}/>
            </div>
        );
    }
    
    renderDisplayMode(){
        return (
            <div className="number-widget">
                {this.state.text}
            </div>
        );
    }
    
    toDisplayMode(){
        this.setState({
            text: this.textInput.current.value
        }); 
    }

    render(){
        return (
            <WidgetContainer 
                toDisplayMode = {() => this.toDisplayMode()}
                renderEditMode = {() => this.renderEditMode()}
                renderDisplayMode = {() => this.renderDisplayMode()}
                enableResizing = {{top: true, bottom: true, left: true, right: true}}
            />
        );
    }
}

export default TextWidget;
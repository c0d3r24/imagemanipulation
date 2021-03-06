import React, {Component} from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import ImageManipulationScene from "./src/components/ImageManipulationScene";
import PhotoGalleryScene from "./src/components/PhotoGalleryScene";


class RouterComponent extends Component {
    
    render(){return (

        <Router>
            <Scene >
                <Scene
                    key="photogallery"
                    component={PhotoGalleryScene}
                    title="Select an image"
                    initial
                />
                <Scene
                    back={true} 
                    key="imagemanipulation" 
                    component={ImageManipulationScene}
                />
                
            </Scene>
        </Router>

    )}
};

const styles = {
    navBarStyle: {
        backgroundColor: '#ffa',
        color: '#396358'
    },
    backButtonStyle :{
      color: '#396358',
      backgroundColor: '#396358'
    }
};

export default RouterComponent;

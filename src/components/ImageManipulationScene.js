import React from 'react';
import { connect } from 'react-redux';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {operation} from './../actions'

class ImageManipulationScene extends React.Component {
    
    render(){
        return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center',}}>
            <Image
            style={{width: 300, height: 300}}
            source={{uri: this.props.imageURI}}
            />
            <View>  
                <TouchableOpacity onPress={()=> this.props.operation(this.props.imageURI)}>
                        <Text>Rotate</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                        <Text>Flip</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                        <Text>Crop</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                        <Text>resize</Text>
                </TouchableOpacity>
                
            </View>
        </View>
        );
    }
}
const mapStateToProps = ({image}) => {
    const {imageURI} = image;
    return { imageURI}
}
export default connect(mapStateToProps,{operation})(ImageManipulationScene);
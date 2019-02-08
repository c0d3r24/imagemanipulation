import React from 'react';
import { connect } from 'react-redux';
import {View, Text, Image} from 'react-native';


class ImageManipulationScene extends React.Component {
    render(){
        return(
        <View>
        <Image
        style={{width: 50, height: 50}}
        source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
            <Text>This will show image to manipulate</Text>
        </View>
        );
    }
}
const mapStateToProps = ({image}) => {
    const {imageURI} = image;
    return { imageURI}
}
export default connect(mapStateToProps)(ImageManipulationScene);
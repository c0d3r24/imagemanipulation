import React from 'react';
import { connect } from 'react-redux';
import {View, Image, TouchableHighlight, Dimensions} from "react-native";


const { width, height } = Dimensions.get('window');


class PhotoItem extends React.Component{

   
    render() {
            image = this.props.photo.item.node.image;
        return (
            <TouchableHighlight
                key={image.uri}
                onPress={() => {
                    if(!this.props.isSelected){
                        this._addSelection(image,index)
                    }
                }}
                underlayColor='transparent'
            >
                <View>
                    <Image
                        key={image.uri}
                        style={[styles.image]}
                        source={{ uri: image.uri }}
                    />
                </View>
            </TouchableHighlight>

        );
    }
}


const styles = {
    renderCheckStyle: {marginTop: "-20%",height:20,alignItems: "flex-end"},
    scrollContainer: {
        flexDirection: 'row'
    },
    selectedScrollContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    centerLoader: {
        height: height - 100,
        width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: (width - 10) / 4, height: (width - 10) / 4
    },
    title: {
        textAlign: 'center',
        padding: 20
    },
    selectedPhotosContainer:{
        marginBottom: 5,
        padding: 2
    }

};

export default  PhotoItem;
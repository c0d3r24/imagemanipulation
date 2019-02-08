
import React from 'react';
import {  FlatList, CameraRoll } from 'react-native';
import {connect} from 'react-redux';
import { LinearGradient } from 'expo';
import PhotoItem from './PhotoItem';
import { set_image } from './../actions';
class PhotoGalleryScene extends React.Component {
    state = {
        username: '',
        password: '',
        photos: []
      }
      constructor(props) {
        super(props);
        this._getPhotos = this._getPhotos.bind(this);
        this._renderPhoto = this._renderPhoto.bind(this);
      }
    
      componentWillMount() {
        this._getPhotos();
      }
    
      _getPhotos() {
        CameraRoll.getPhotos({
            first: 100,
            assetType: 'Photos'
        }).then(r => {this.setState({photos:[...r.edges]});})
          .catch((err) => {});
      }
    
      _selectPhoto = (imgUri) => {
        this.props.set_image(imgUri);
      }
      _renderPhoto(photo) {
        return <PhotoItem photo={photo} selectPhoto={this._selectPhoto} />
      }
      
     render() {
         return (
         <LinearGradient
              colors={['#ddd','#fce']}
              style={styles.container}>
               <FlatList contentContainerStyle={styles.scrollContainer}
                              data={this.state.photos}
                              renderItem={this._renderPhoto}
                              numColumns={4}
                              keyExtractor={photo => photo.node.image.uri}
                    >
              </FlatList>
          </LinearGradient> 
          );
     }
}

const styles = {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    },
  textStyle: {
      alignSelf: 'center',
      color: '#396358',
      fontSize: 18,
      fontWeight: '600',
  }
  };
export default connect(null, {set_image})(PhotoGalleryScene);
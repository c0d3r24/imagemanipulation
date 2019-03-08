import {SET_IMAGE} from './ActionTypes';
import { Actions } from 'react-native-router-flux';
import { ImageManipulator, FileSystem } from 'expo';

export const set_image = (imgUri) => {  
    Actions.imagemanipulation();
    return {type: SET_IMAGE, payload: imgUri};
}

export const operation = (imgUri) => async dispatch =>{
    
    const manipResult = await ImageManipulator.manipulateAsync(
        imgUri ,
        [{ rotate: 90}, { flip: { vertical: true }}],
        { format: 'png' }
      );
    //   options= {
    //       from : manipResult.uri.split('file://')[1], 
    //       to: FileSystem.documentDirectory + 'myDirectory/newImage.png'
    //     }
    //   FileSystem.copyAsync(options);
    //   const contents = await FileSystem.readAsStringAsync(manipResult.uri);
    //   console.log(contents);
    //   await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'myDirectory/newImage.png')  
      dispatch({type: SET_IMAGE, payload: manipResult.uri.split('file://')[1]});
    
}
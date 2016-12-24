
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native'
import MapView from 'react-native-maps'
var {height,width} = Dimensions.get('window')

export default class mhelp extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      region: {
        latitude: 25.42999,
        longitude: 81.7706,
        latitudeDelta: 0.00546,
        longitudeDelta: 0.00507,
      },
      markers: [
        {latlng:{latitude: 25.42345, longitude: 81.7777}},
        {latlng:{latitude: 25.42111, longitude: 81.7633}},
        {latlng:{latitude: 24.6666, longitude: 82.1100}},
        {latlng:{latitude: 24.1635, longitude: 82.9200}},
      ]
    };
    this.onRegionChange = this.onRegionChange.bind(this)
  }

  onRegionChange(region) {
    this.setState({region})
  }

  render() {
    return (
     <View style ={styles.container}>
       <MapView
         style={styles.map}
         region={this.state.region}
         onRegionChange={this.onRegionChange}
       >

       {this.state.markers.map((marker,i) =>(
        <MapView.Marker
          key={i}
          coordinate={marker.latlng}
          image='./mapicon.png'
       />
       ))}

      </MapView>
       <View style={styles.container}>
        <Text>
          latitude: {this.state.region.latitude}{'\n'}
          longitude: {this.state.region.longitude}{'\n'}
          latitudeDelta: {this.state.region.latitudeDelta}{'\n'}
          longitudeDelta: {this.state.region.longitudeDelta}{'\n'}
        </Text>
       </View>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    //flex:3,
    width: width,
    height: height
  }
})

AppRegistry.registerComponent('mhelp', () => mhelp);

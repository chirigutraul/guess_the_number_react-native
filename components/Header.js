import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../constants/colors';

const Header = (props) => {
    return(
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
       width:'100%',
       height:100,
       backgroundColor:Colors.primary,
       alignItems: 'center',
       justifyContent: 'center'
    },
    headerText:{
        color:'white',
        fontSize:24,
    }
})

export default Header
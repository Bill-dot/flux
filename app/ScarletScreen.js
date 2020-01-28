import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Actions } from 'react-native-router-flux';

const ScarletScreen=()=>{
    return(
        <Veiw styles={styles.container}>
            <Text styles={styles.main} onPress={()=>Actions.grey()}>ScarletScreen</Text>
        </Veiw>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#bb0000',
    },
    main:{
        color:'white'
    }
})

export default ScarletScreen;

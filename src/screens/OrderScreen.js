import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Dialog, Button, Paragraph} from 'react-native-paper'

export default function OrderScreen(props) {
    return (
       <View style={styles.container}>
                  <Dialog
             visible={true}
             onDismiss={false}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Paragraph>This is simple dialog</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => console.log('Done')}>Done</Button>
            </Dialog.Actions>
          </Dialog>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
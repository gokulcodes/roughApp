import React from 'react'
import {View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native'
import {Drawer, List, TextInput, Checkbox, Snackbar, FAB} from 'react-native-paper'

export default function About(props) {
  const [open, setOpen] = React.useState(true)
  const [text, setText] = React.useState('')
  const _handlePress =() => {
    setOpen(true)
  }
    return (
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss()
      }}>
       <View style={styles.container}>
            <TextInput
        label='Email'
        mode='outlined'
        value={text}
        onChangeText={text => {setText(text); setOpen(true)}}
      />
             <Drawer.Section title="Some title">
                  <Drawer.Item label="First Item" />
                  <Drawer.Item label="First Item" />
             </Drawer.Section>
             <List.Section title="Accordions">
        <List.Accordion
          title="Uncontrolled Accordion"
          left={props => <List.Icon {...props} icon="folder" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>

        <List.Accordion
          title="Controlled Accordion"
          left={props => <List.Icon {...props} icon="folder" />}
          expanded={open}
          onPress={_handlePress}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section>
      <Snackbar
          visible={open}
          onDismiss={() => setOpen(false)}
          action={{
            label: `${text}`,
            onPress: () => {
              setOpen(false)
            },
          }}
        >
          Hey there! I'm a Snackbar.
        </Snackbar>
       </View>
       </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'center',
      margin: 20
    },
  });
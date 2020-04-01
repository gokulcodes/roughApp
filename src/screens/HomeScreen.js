import React from 'react'
import {View, Text, StyleSheet, Alert} from 'react-native'
import { Avatar, DataTable, Button, Card, Colors, ActivityIndicator, Title, Paragraph,Appbar } from 'react-native-paper';
import {DefaultTheme, Provider } from 'react-native-paper'

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#000',
      accent: '#f1c40f',
    },
  };
export default function HomeScreen(props) {
    return (
        <Provider theme={theme}>
        <View>
            <Appbar.Header>
        <Appbar.Content
          title="Goack"
          subtitle="Tech Speaks"
        />
        <Appbar.Action icon= {() => <ActivityIndicator animating={true} color={Colors.white} />} onPress={() => Alert.alert('Pressed')} />
        <Appbar.Action icon="dots-vertical" onPress={() => Alert.alert('Pressed')}/>
      </Appbar.Header>
              <Card raised theme={{ roundness: 20, elevation: 5 }} style={styles.carder}>
                <Card.Title title="Mr.Codx" subtitle="Ender" left={(props) => <Avatar.Image size={45} source={require('../../assets/icon.png')} />} />
                <Card.Content>
                {/* <Title>Goack</Title>
                <Paragraph>Something strange happening in my life</Paragraph> */}
                </Card.Content>
                <Card.Cover source={require('../../assets/icon.png')} />
                <Card.Actions>
                <Button  mode="outline" onPress={() => Alert.alert('Pressed')}>Cancel</Button>
                <Button mode="outline" onPress={() => Alert.alert('Pressed')}>Ok</Button>
                </Card.Actions>
            </Card>
            <DataTable>
        <DataTable.Header>
          <DataTable.Title>Dessert</DataTable.Title>
          <DataTable.Title numeric>Calories</DataTable.Title>
          <DataTable.Title numeric>Fat</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>Frozen yogurt</DataTable.Cell>
          <DataTable.Cell numeric>159</DataTable.Cell>
          <DataTable.Cell numeric>6.0</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
          <DataTable.Cell numeric>237</DataTable.Cell>
          <DataTable.Cell numeric>8.0</DataTable.Cell>
        </DataTable.Row>

        
        <DataTable.Row>
          <DataTable.Cell>Frozen yogurt</DataTable.Cell>
          <DataTable.Cell numeric>159</DataTable.Cell>
          <DataTable.Cell numeric>6.0</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
          <DataTable.Cell numeric>237</DataTable.Cell>
          <DataTable.Cell numeric>8.0</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={(page) => { console.log(page); }}
          label="1-2 of 6"
        />
      </DataTable>
        </View>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'center',
    },
    carder: {
      elevation: 15,
        margin: 20
    }
  });
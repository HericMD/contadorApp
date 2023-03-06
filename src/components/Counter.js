import { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default class counter extends Component {
  state = {
    count: 0,
  };

  increment(){
    this.setState({count: this.state.count + 1 });
  }

  decrement(){
    this.setState({count: this.state.count - 1 });
  }

  double(){
    this.setState({count: this.state.count * 2})
  }

  clear(){
    this.setState({count: this.state.count = 0})
  }

  render() {
    return (
      <View style={styles.contador}>
        <Text>Contador: {this.state.count} </Text>
        <Button onPress={() => this.increment()} title="+" />
        <Text> </Text>
        <Button onPress={() => this.decrement()} title="-" />
        <Text> </Text>
        <Button onPress={() => this.double()} title="*2" />
        <Text> </Text>
        <Button onPress={() => this.clear()} title="Limpar" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contador: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
});

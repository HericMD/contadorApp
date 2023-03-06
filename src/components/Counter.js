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

  render() {
    return (
      <View style={styles.contador}>
        <Text>Contador: {this.state.count} </Text>
        <Button onPress={() => this.increment()} title="+" />
        <Button onPress={() => this.decrement()} title="-" />
        <Button onPress={() => this.double()} title="*2" />
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

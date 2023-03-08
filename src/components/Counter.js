import { Component } from "react";
import { Text, View, Button, StyleSheet, TextInput } from "react-native";

export default class counter extends Component {
  state = {
    count: 0,
    step: 12,
  };

  increment() {
    this.setState({ count: this.state.count + this.state.step });
  }

  decrement() {
    this.setState({ count: this.state.count - this.state.step });
  }

  double() {
    this.setState({ count: this.state.count * 2 });
  }

  clear() {
    this.setState({ count: (this.state.count = 0) });
  }
  alterarStep(texto){
    this.setState({ step: parseInt(texto) || this.state.step})
  }

  render() {
    return (
      <View style={styles.contador}>
        <TextInput 
          value={this.state.step.toString()}
          onChange={(e) => this.alterarStep(e.nativeEvent.text)}
          keyboardType="numeric"
        />
        <TextInput 
          defaultValue={this.state.step.toString()}
          onChangeText={(e) => this.alterarStep(text)}
          keyboardType="numeric"
        />
        <Text> Contador: {this.state.count} </Text>
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

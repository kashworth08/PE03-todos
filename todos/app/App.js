import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, TurboModuleRegistry} from 'react-native';
import Heading from './Heading';
import Input from './Input';
import Button from './Button';
import TodoList from './TodoList'
import TabBar from './TabBar'

// Taken from Listing 3.11 in React Native in Action vvvv
// Initializaes the todoIndex variable at 0
let todoIndex = 0
// Textbook code above ^^^^

class App extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            todos: [],
            type: 'All',
        };
        // This is taken from Listing 3.13 in React Native in Action vvvv
        this.submitTodo = this.submitTodo.bind(this)
        // ^^^^
        this.toggleComplete = this.toggleComplete.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        // This is taken from Listing 3.22 in React Native in Action vvv
        this.setType = this.setType.bind(this)
        // ^^^^
    }

    deleteTodo (todoIndex) {
        let {todos} = this.state
        todos = todos.filter((todo) => todo.todoIndex !== todoIndex)
        this.setState({todos})
    
    }
    
    toggleComplete(todoIndex) {
        let todos = this.state.todos
        todos.forEach((todo) => {
            if (todo.todoIndex === todoIndex) {
                todo.complete = !todo.complete
            }
        })
    }
    // This is taken from Listing 3.22 in React Native in Action vvv
    setType(type) {
        this.setState({type})
    }
    // ^^^^

    inputChange(inputValue) {
        console.log(' Input Value: ', inputValue);
        this.setState({inputValue});
    }

    // The next few lines are pulled from Listing 3.10 of
    // React Native in Action vvvv
    
    // Check for an empty value
    submitTodo() {
        if (this.state.inputValue.match(/^\s*$/)) {
            return
        }
        // Create a todo variable with an index and title
        // Initialize completion of task to false
        const todo = {
            title: this.state.inputValue,
            todoIndex,
            complete: false
        }
        // Increment index
        todoIndex++
        // Pushes todo into array 
        const todos = [...this.state.todos, todo]
        // Set state to match new array
        this.setState({ todos, inputValue: ''}, () => {
            // Logs the state
            console.log('State: ', this.state)
        })
    }
// Section related to textbook above ^^^^

    render() {
        const {inputValue, todos, type} = this.state;
        return (
            <View style={styles.container}>
                <ScrollView keyboardShouldPersistTaps = "always" style={styles.content}>
                    <Heading/>
                    <Input
                        inputValue={inputValue}
                        inputChange={text => this.inputChange(text)}
                    />
                    <TodoList 
                        type = {type}
                        toggleComplete = {this.toggleComplete}
                        deleteTodo = {this.deleteTodo}
                        todos={todos} />
                    <Button submitTodo = {this.submitTodo} />
                </ScrollView>
                <TabBar type = {type} setType = {this.setType} />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        flex: 1, 
        paddingTop: 60,
    },
});

export default App;
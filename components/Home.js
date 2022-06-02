import React, {useState} from 'react';

import {Text, SafeAreaView, View} from 'react-native';

//components
import Header from "./Header.js";
import ListItems from './ListItems.js';
import InputModal from './InputModal.js';

const Home = () =>{

    //initial todos
    const initialTodos = [{
        title: "Get some snack",
        date: "Fri, 08 Jan 2021 16:32:11 GMT",
        key: "1"
    }, {
        title: "Get some groceries",
        date: "Fri, 08 Jan 2021 16:32:11 GMT",
        key: "1"
    }, {
        title: "Prepare SE project",
        date: "Fri, 08 Jan 2021 16:32:11 GMT",
        key: "1"
    }]

    const [todos, setTodos] = useState(initialTodos);

    //clear all todos
    const handleClearTodos = () => {
        setTodos([]);
    }

    // Modal visibility & input value
    const [modalVisible, setModalVisible] = useState(false);
    const [todoInputValue, setTodoInputValue] = useState();

    return(
        <>
            <Header handleClearTodos={handleClearTodos}/>
            <ListItems 
                todos = {todos}
                setTodos = {setTodos} 
            />
            <InputModal 
                modalVisible = {modalVisible}
                setModalVisible = {setModalVisible}
                todoInputvalue = {todoInputValue}
                setTodoInputValue={setTodoInputValue}
            />
        </>
    );
}

export default Home;
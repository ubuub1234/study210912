/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import styles from './Style/styles';
import _ from 'lodash';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  KeyboardAvoidingView,
  TextInput,
  useColorScheme,
  View,
  Platform,
  Alert
} from 'react-native';



function App(){


  const [list,setList] = useState([
    {
      'id'  : '1',
      'todo': '할일 1111'
    },
    {
      'id'  : '2',
      'todo': '할일 222'
    }
  ]);
  
  const [inputTodo,setInputTodo] = useState('할 일 입력');
  //컴포넌트 리턴, 컴포넌트로 이루어진 배열을 리턴할 수 있다.
  return (
    //화면의 변화가 일어나기 때문에
    <SafeAreaView style = {styles.container}>
      <KeyboardAvoidingView style = {styles.keyboardView} 
      //  behavior = { Platform.OS === 'ios' ? 'padding':'height'}
      >
      <ScrollView style = {styles.content}>
        {list.map(item => {
          return (
            <View style = {styles.TodoItem} key={ item.id }>
              <Text style = {styles.TodoText}>
                {item.todo}
              </Text>
              <Button style = {styles.TodoItemButton} 
              title = {"삭제"} 
              onPress={() => {
                setList(_.reject(list,element => element.id === item.id));
                //조건에 맞는 것을 제거시켜서 반환해주는 함수이다 reject
                alert(item.id)
              }}>

              </Button>
            </View>
          );
        })}
        
      </ScrollView>
      </KeyboardAvoidingView>
      <View style = {styles.InputContainer}>
        <TextInput value = {inputTodo} onChangeText={value => setInputTodo(value)} style = {styles.input_}></TextInput>
        <Button title = {"전송"} onPress = {() => {

                if(inputTodo === ''){

                  alert("빈값은 입력할 수 없습니다.");
                  return;
                }
                //원본 배열을 수정하는 PUSH
                //먼저 아이디 값을 넣어줘야하는데 어떤값을?
                const newItem = {
                  id   : new Date().getTime().toString(),
                  todo : inputTodo
                }
                console.log("asdasda");
                //...전개연산자임
                //https://blog.naver.com/zoz0312/221622159150 배열 내부요소에 하나하나씩 추가한다는 말인거같음
                setList([
                  ...list,
                  newItem,
                ]);
                setInputTodo('');
        }}></Button>
      </View>
     
    </SafeAreaView>
  );
}


export default App;

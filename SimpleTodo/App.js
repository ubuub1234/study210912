/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


//09 12 async-storage 연습하기
//배열은 string으로 저장하고 다시 가져오는 방법을 가지고 있음
//목적은 설정등을 저장할 때 쓰임(용량 제한이 있음 6메가 정도로 저장 할 수 있었음)
//큰 string은 저장하기 어려움(이미지 string 같은 경우..)
//

import React, { useEffect, useState } from 'react';
import AsyncStrotage from '@react-native-community/async-storage';
import styles from './Style/styles';
import _ from 'lodash';


// AsyncStrotage.setItem('test','test value').then(
//  () => {
//    alert("저장됨");
//  }
// ).catch( error => {
//   alert(error.message);
// }     
// );

//읽어오는데 시간 간격이 발생한다.

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
  TextInput,
  useColorScheme,
  View,
  Platform,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import produce from 'immer';

//immar 써보기
// Ex)
// const obj = {a : 1, b: 2};
// const newObj = Object.assign({},obj);
// newObj.b = '22';
// console.log(newObj);

const obj = {a : 1, b: 2};
const newObj = produce(obj ,draft =>{
 //draft 초안 작업
 draft.b = 'b';
 draft.c = [];
});



const complexData = {
  title : '',
  children : [
    {
      subTitle : ''
    }

  ]
}
const NewData = produce(complexData, draft => {
  draft.children[0].subTitle = 'newTitle';
});
console.log(NewData);




function App(){

  //불변성.. useState 는 단순한 형태를 이용해라.
  // 너무 많은 데이터 ,복잡한 데이터를 넣지 말라.
  //그런데 실질적으로 사용할때는 숫자,문자 이런거만 사실 넣을 순 없다.
  //immar js 를 공부할 것 변화 된것을 처리해서 관리해주겠다.

  const [list,setList] = useState([]);
  
  //데이터를 로드하고 나서 표시가 됩니다.
  
  useEffect(() =>  {
    AsyncStrotage.getItem('list')
     .then( data => {
       if(data !== null){
         //데이터 가 없을 때 (처음 로드시에)
         setList(JSON.parse(data));
       }
     }).catch(
       error => {
       });
  });

  const store = (newList) => {
    
    setList(newList);
    AsyncStrotage.setItem('list',JSON.stringify(newList));

  }
  
  const [inputTodo,setInputTodo] = useState('할 일 입력');
  //컴포넌트 리턴, 컴포넌트로 이루어진 배열을 리턴할 수 있다.11111
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

               <TouchableOpacity style = {styles.Check}>
                  <Text style={styles.Check_Text} onPress = {() => {
                    alert("체크 박스가 변경 되었습니다.");
                    store(
                      produce(list,draft => {
                        const index = list.indexOf(item);
                        draft[index].done = !list[index].done;
                      })
                    );
                  }}>
                  { item.done == false ? '☒': '☐'}
                  </Text> 
               </TouchableOpacity>


              <Text style = {styles.TodoText}>     
                {item.todo}
              </Text>
              <Button style = {styles.TodoItemButton} 
              title = {"삭제"} 
              onPress={() => {
                alert("삭제 되었습니다.");
                store(_.reject(list,element => element.id === item.id));
                //조건에 맞는 것을 제거시켜서 반환해주는 함수이다 reject
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
                  todo : inputTodo,
                  done : false,
                }
                //...전개연산자임
                //https://blog.naver.com/zoz0312/221622159150 배열 내부요소에 하나하나씩 추가한다는 말인거같음
                store([
                  ...list,
                  newItem,
                ]);
                setInputTodo('');
                alert("저장되었습니다");
        }}></Button>
      </View>
     
    </SafeAreaView>
  );
}


export default App;

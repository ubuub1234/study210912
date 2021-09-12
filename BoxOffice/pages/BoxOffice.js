import React, { useEffect, useState } from "react";
import styles from '../Style/styles';
import {
    ActivityIndicator,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";


function BoxOffice(props) {

   const [list,setList] = useState([]);

   //처음 화면이 나타나는 순간에 마운트되는 순간 유즈 이펙트를 사용
   useEffect(() => {
       //ajax 와 같이 비동기로 동작하는 부분이라고 생각하면 편함
       axios.get("http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101")
       .then(response => {
           
           setList(response.data.boxOfficeResult.weeklyBoxOfficeList);
           console.log(list);
          

       })
       .catch(error => {
           alert("에러가 발생 했습니다.");
       });
   },[]);


   return(
    <SafeAreaView style={styles.Container}>
        <View style = {styles.Padding}>
            <Text style={styles.Title}>
                박스오피스
            </Text>
            {list.length === 0 && (
                <ActivityIndicator size="large" color="#00ff00" />
            )}
            {list.map(item => (

                <TouchableOpacity style = {styles.ListItem} key= {item.movieCd} onPress = {() => {}}>
                    <Text style = {styles.Rank}>
                        {item.rank}
                    </Text>
                    <Text style = {styles.MovieName}>
                    {item.movieNm}
                    </Text>
                </TouchableOpacity>

            ))}
        </View>
    </SafeAreaView>
   ); 
}

export default BoxOffice;

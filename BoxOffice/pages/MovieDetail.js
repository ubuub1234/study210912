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
import { ActivityIndicator } from "react-native";

function MovieDetail(props){
    const [info,setInfo] = useState(null);

    useEffect(() => {
        let url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.xml?key=f5eef3421c602c6cb7ea224104795888";
        url = url + "";


    });

    return(

        <View style = {styles.Container}>

            <View>
                <TouchableOpacity style ={styles.Back} onPress={ () => props.navigation.goBack() }>
                    <Text style ={styles.BackLabel}>⬅️</Text>
                </TouchableOpacity>
                <Text style = {styles.HeaderTitle}>영화 정보 조회</Text>
            </View>


            <View style = {styles.Contents}></View>

        </View>

    );





}

export default MovieDetail;
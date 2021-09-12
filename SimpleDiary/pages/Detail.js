import React from 'react';
import Container from '../components/Container';
import Contents from '../components/Contents';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage';

const Text = styled.Text`
    font-size: 20px;
    line-height: 28px;
`;

function Detail( { navigation, route } ) {
    navigation.setOptions( { title: route.params.date } );
    const [text, setText] = React.useState( '' );
    React.useEffect(()=>{
       AsyncStorage.getItem( 'list' )
        .then( data => {
            const list = JSON.parse( data );
            const diary = list.find( element => element.date === route.params.date );
            //해당하는 날짜에 대한 정보를 찾아서 리턴해줌.
            setText( diary.text );
        }) 
    }, []);
    return (
        <Container>
            <Contents>
                <Text>{ text }</Text>
            </Contents>
        </Container>
    )
}

export default Detail;
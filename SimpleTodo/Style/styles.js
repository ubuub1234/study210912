import { StyleSheet } from "react-native";


const styles = StyleSheet.create({


    container : {
        flex : 1,
    },
    content : {
        flex : 1,
        borderWidth :1,
        borderColor : '#FF0000',
        padding : 8

    },
    InputContainer : {
        flexDirection : 'row',
        borderColor : '#ff0000',
    },
    TodoItem : {
        marginBottom : 20,
        flexDirection : 'row',
        alignItems : 'center'
    },
    TodoText : {
        flex :1

    },
    TodoItemButton : {

    },
    keyboardView :{
        flex: 1,
    },
    input_ : {
        justifyContent : 'center',
        alignItems : 'center',
        borderColor : '#e5e5e5',
        flex : 1,
        borderWidth : 1
    },
    TempText  : {
        fontSize : 18,
        marginTop : 12,
      
    },
    bt01 : {

    },
    Check : {
        marginLeft : 4,
        marginRight : 20,
    },
    Check_Text : {
        fontSize :24


    }



});
export default styles;

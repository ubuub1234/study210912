import { StyleSheet } from "react-native";


const styles = StyleSheet.create({


    Container : {
        flex : 1,
    },

    Contents : {

        flex : 1,
        
    },

    dTitle : {
        fontSize : 24,
        fontWeight :'700',
    },

    Description : { 
        fontSize : 12,

    },


    Back : {

        height : 50,
        padding : 12,
        justifyContent : 'center',
        position : 'absolute',
        left : 0,
        top : 0,
    
    },

    BackLabel : {
        fontSize : 18,
        color : '#000fcc',

    },

    Header : {

        height : 50,
        borderBottomColor : '#e5e5e5',
        borderBottomWidth : 1,
        justifyContent  : 'center',
        alignItems : 'center',


    },
    HeaderTitle : {
        fontSize : 20,
        fontWeight : '700'

    },
    Padding : {
        padding : 12
    },

    Rank : { 
        fontSize : 13,
        marginRight : 12,
        color : "#999999"
    },
    Title : {
        fontSize : 24,
        fontWeight : "700",
        margin : 12,
    },
    ListItem : {
        flexDirection : 'row',
        borderBottomWidth: 1,
        marginVertical : 10,
        padding : 5,

    },
    MovieName : {
        fontSize : 13,
        fontWeight : "700"
    }


});
export default styles;

import { Image, Text, TouchableOpacity, View } from "react-native"

const Header = () => {
    return(
        <View style={{
            width: '100%',
            height: 70,
            justifyContent: "space-between",
            alignItems:"center",
            flexDirection:"row",
            borderBottomWidth:0.2,
            borderBottomColor:'#8e8e8e',
            backgroundColor:'#fff',

        }}>
            <Text style={{
                fontWeight:'600',
                fontSize:20,
                color:'#000',
                marginLeft:20
                }}> Fashion Man App</Text>
        {/* <TouchableOpacity>
            <Image source={}></Image>
        </TouchableOpacity> */}
        </View>
    )
}
export default Header
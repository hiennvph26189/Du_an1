import { Text, View } from "react-native";
import React from "react";
import {useDispatch, useSelector} from 'react-redux'

const Profile = () => {
    const info = useSelector((state)=> state.personalInfo)
    console.log(info.id, "Profile")
    return (
        <View>
            <Text>Profile</Text>
        </View>
    )
}
export default Profile;
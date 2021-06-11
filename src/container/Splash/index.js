import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import { getAsyncStorage, keys } from '../../asyncStorage';
import { color, globalStyle } from '../../utility';
import {Logo} from '../../component';
import { setUniqueValue } from '../../utility/constants';


const Splash = ({navigation}) => {
    useEffect(()=>{
        const redirect = setTimeout(()=>{
            getAsyncStorage(keys.uuid)
            .then((uuid)=>{
                if(uuid){
                    setUniqueValue(uuid);
                    navigation.replace('HomeTabs');
                }else{
                    navigation.replace('Login');
                }
            })
            .catch((err)=>{
                console.log(err);
                navigation.replace('Login');
            });
        }, 3000);
        return () => clearTimeout(redirect);
    }, [navigation])
    return(
        <View 
        style = {[globalStyle.containerCentered, {backgroundColor: color.BLACK}]}>
        <Logo/>
        </View>
    );
};

export default Splash;

//Tangiina mo anne
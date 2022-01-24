import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Compras from '../pages/Compras';
import Refeicao from '../pages/Refeicao';
import Dicas from '../pages/Dicas';
import Feather from 'react-native-vector-icons/Feather';


const Tab = createMaterialTopTabNavigator();

export default function Routes() {
  return (

      <Tab.Navigator>      
        <Tab.Screen
         name="Dicas"
         component={Dicas}
         options={{
            tabBarIcon:({color, size}) => {
              return<Feather name="camera" color={"#11118c"} size={25}/>
            }
          }}
          />
        <Tab.Screen 
          name="Compras" 
          component={Compras} 
          options={{
            tabBarIcon:({color, size}) => {
              return<Feather name="shopping-bag" color={"#54a300"} size={25}/>
            }
          }}
          />
        <Tab.Screen
          name="Refeição" 
          component={Refeicao}
          options={{
            tabBarIcon:({color, size}) => {
              return<Feather name="watch" color={"#e84d25"} size={25}/>
            }
          }}
          />
      </Tab.Navigator>
   
  );
}
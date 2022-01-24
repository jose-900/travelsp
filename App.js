import React , {useState} from 'react';
import { StyleSheet, Text, View , Button , Image  , TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { NavigationContainer } from '@react-navigation/native' 
const slides = [
  {
    Key:'1',
    title: 'Restaurante Bom Prato Governo de São Paulo.',
    text: 'Oferece Café da Manhã e Almoço tudo por R$1.00 real.',
    image: require('./src/assets/saopaulo2.jpeg')
  },
  {
    Key:'2',
    title: 'Compras de Roupas , Informática e Celulares.',
    text: 'Objetivo é oferecer os melhores endereços de compra em São Paulo',
    image: require('./src/assets/são-paulo.jpeg')
  },
  {
    Key:'3',
    title: 'Dicas de compras no lugar certo com segurança.',
    text: 'Como as maiores metropoles de mundo a segurança e os melhores lugares é essecial saber',
    image: require('./src/assets/sp2.jpeg')
  },
];



export default function App() {
  
  const[showHome, setShowHome] = useState();
  const navigation = useNavigation();

  function renderSlides({item}){
    return(
        <View style={{flex:1}}>
            <Image
              source={item.image}
              style={{
                resizeMode: 'cover',
                height: '75%',
                width: '100%'
              }}
            />
          <Text 
            style={{
              paddingTop: 25,
              paddingBottom: 10, 
              fontSize: 16,
              fontWeight: 'bold',
              color: '#009cff'
            
            }}
          
          >
            {item.title}
          </Text>
          <Text style={{
            textAlign: 'center',
            color:'#b5b5b5',
            paddingHorizontal: 25,
            fontSize:16

          }}>
            {item.text}
          </Text>
        </View>
    )
  }
     

   function renderDoneButton(){
    return (
      <View>
        <Icon
          name="arrow-right-circle"
          color="#000"
          size={24}
        />
      </View>
    );
  };

  function navegateDicas(){
    navigation.navigate('Refeicao')
  }
    return (
     <NavigationContainer> 
      <AppIntroSlider
        renderItem={renderSlides}
        data={slides}
        activeDotStyle={{
          backgroundColor:'#009cff',
          width:30
        }}
           
        renderDoneButton={()=>renderDoneButton()}
        onDone={()=> navegateDicas()}
        
      />
    </NavigationContainer>
   );
}
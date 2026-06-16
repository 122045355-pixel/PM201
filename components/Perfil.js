import {View,Text, Button, StyleSheet} from 'react-native';
import React,{useState} from 'react';
//perfil con desestructuracion
export const Perfil = ({nombre,carrera,materia,cuatri,style}) =>  { 
    const [mostrar,setMostrar] = useState(false);
    return (
                                    <View style={[estilos.tarjeta, style]}>
                                    <Text style={estilos.nombre}>{nombre}</Text> 

                                    {mostrar &&
                                    <>
                                    <Text style={estilos.carrera}>{carrera}</Text> 
                                    <Text style={estilos.otroTexto}>{materia}</Text>
                                    <Text style={estilos.otroTexto}>{cuatri}</Text></>
                                    }

                                    <Button title="ver perfil " onPress={() => setMostrar(!mostrar)} />
                                </View>
                                )
                             }
/*perfil con props
export const Perfil = (props) => { return (
                                    <View>
                                    <Text>{props.nombre}</Text> 
                                    <Text>{props.carrera}</Text> 
                                    <Text>{props.materia}</Text>
                                    <Text>{props.cuatri}</Text>
                                    </View>
                                )
                             }
*/
const estilos = StyleSheet.create({
    nombre:{
        fontSize: 20,
        fontWeight:600,
        textTransform:'uppercase',
    },
    carrera:{
        fontSize: 18,
        color:'blue',
        fontFamily:'roboto'
    },
    otroTexto:{
        fontSize: 16,
        fontStyle:'italic',
        fontFamily:'courier',
    },
    tarjeta:{
        borderWidth:2,
        borderColor:'black',
        padding:25,//margen interno
        margin:20,//margen externo 
    },

});
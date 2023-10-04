import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native'

const App = () => {
    // State for number of swings
    const [targetSwings, setTargetSwings] = useState<number| null>(null);
    const [startDate, setStartDate] = useState<Date|null>(null);
    const [endDate, setEndDate] = useState<Date|null>(null);
    return (
        <View style ={{ padding:20}}>
            <Text style={{fontSize:24, marginBottom:20}}>Swngr: Kettlebell Swing Tracker </Text> 

            {/* Input for number of swings */}
            <Text style={{fontSize: 18}}>Target Number of Swings:</Text>
            <TextInput 
                style={{borderWidth:1, marginBottom:20, padding: 10}} 
                keyboardType="numeric"
                onChangeText ={text=> setTargetSwings(Number(text))}
                value={targetSwings ? targetSwings.toString() : ''}
            />    

            {/* Buttons for date selection (to be implemented)) */}
            <Button title="Select Start Date" onPress={()=>{}}/>
            <Button title="Select End Date" onPress={()=>{}}/>
        </View>
    );
};

export default App;

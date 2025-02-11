import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'
import DiceOne from '../assets/one.png'
import DiceTwo from '../assets/two.png'
import DiceThree from '../assets/three.png'
import DiceFour from '../assets/four.png'
import DiceFive from '../assets/five.png'
import DiceSix from '../assets/six.png'



const Dice = ({ imageUrl }: { imageUrl: ImageSourcePropType }): JSX.Element => {
    return <Image style={styles.image} source={imageUrl} />
}
///ORRRRRRRRRRRRRRRRRRR

// type DiceProp = PropsWithChildren<{ imageUrl: ImageSourcePropType }>

// const Dice = ({ imageUrl }: DiceProp): JSX.Element => {
//   return <Image style={styles.image} source={imageUrl} />
// }


const Random = () => {
    return Math.floor(Math.random() * 6) + 1
}
export default function DiceGame() {
    const [diceNumber, setDiceNumber] = useState(DiceFive)


    const eventHandle = () => {

        switch (Random()) {
            case 1:
                setDiceNumber(DiceOne)
                break
            case 2:
                setDiceNumber(DiceTwo)
                break
            case 3:
                setDiceNumber(DiceThree)
                break
            case 4:
                setDiceNumber(DiceFour)
                break
            case 5:
                setDiceNumber(DiceFive)
                break
            case 6:
                setDiceNumber(DiceSix)
                break
            default:
                setDiceNumber(DiceOne)
        }
    }
    return (
        <View style={styles.container}>
            <Dice imageUrl={diceNumber} />

            <Pressable style={styles.button} onPress={eventHandle}>
                <Text style={styles.buttonText}>Roll Dice 🎲</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5BCBA',
    },
    image: {
        height: 200,
        width: 200,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#0A3D62',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
})

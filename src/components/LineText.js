import React from 'react'
import { View } from 'react-native'
import { Title, Paragraph } from 'react-native-paper'

const LineText = ({title, text}) => {
    return (
        <View>
            <Paragraph>{title}</Paragraph>
    <Paragraph>{text}</Paragraph>
        </View>
    )
}

export default LineText

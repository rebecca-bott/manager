import React from 'react';
import { Text, View, Modal } from 'react-native';
import CardSection from './CardSection';
import Button from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const {CardSectionStyle, TextStyle, container} = styles
    
    return (
        <Modal
            transparent
            visible={visible}
            animationType='slide'
            onRequestClose={() => {}} 
        >
            <View style={container}>
                <CardSection style={CardSectionStyle}>
                    <Text style={TextStyle}>{children}</Text>
                </CardSection>

                <CardSection style={CardSectionStyle}>
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    )
}

const styles = {
    CardSectionStyle: {
        justifyContent: 'center',
    },
    TextStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40,
    },
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
}

export default Confirm;
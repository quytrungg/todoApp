import React from 'react';
import {Modal} from 'react-native';
import {
    ModalButton,
    ModalContainer,
    ModalView,
    StyledInput,
    ModalAction,
    ModalActionGroup,
    ModalIcon,
    HeaderTitle,
    colors
} from './../styles/appStyles.js';
import {AntDesign} from '@expo/vector-icons';

const InputModal = ({modalVisible, setmodalVisible}) =>{

    const handleCloseMOdal = () => {
        setmodalVisible(false);
    }    

    return (
        <>
            <ModalButton onPress = {() => {}}>
                <AntDesign name="plus" size ={30} color = {colors.secondary}/>
            </ModalButton>

            <Modal
                animationType = "slide"
                transparent = {true}
                visible = {modalVisible}
                onRequestClose= {handleCloseModal}
            >
                <ModalContainer>
                    
                </ModalContainer>
            </Modal>
        </>
    );
}

export default InputModal;
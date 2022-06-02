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
import {AntDesign, Feather} from '@expo/vector-icons';

const InputModal = ({modalVisible, setModalVisible, todoInputValue, setTodoInputValue}) =>{

    const handleCloseModal = () => {
        setModalVisible(false);
    }    

    const handleSubmit = () => {
        alert("Submitted");
    }

    return (
        <>
            <ModalButton onPress = {() => {setModalVisible(true)}}>
                <AntDesign name="plus" size ={30} color = {colors.secondary}/>
            </ModalButton>

            <Modal
                animationType = "slide"
                transparent = {true}
                visible = {modalVisible}
                onRequestClose= {handleCloseModal}
            >
                <ModalContainer>
                    <ModalView>
                        <ModalIcon>
                            <HeaderTitle>Todos</HeaderTitle>
                            <Feather name="edit" size ={30} color = {colors.secondary}/>
                        </ModalIcon>

                        <StyledInput
                            placeholder="Add a todo"
                            placeholderTextColor={colors.alternative}
                            selectionColor={colors.secondary}
                            autoFocus={true}
                            onChangeText={(text)=> setTodoInputvalue(text)}
                            value={todoInputValue}
                            onSubmitEditing={handleSubmit}
                        />

                        <ModalActionGroup>
                            <ModalAction color={colors.primary} onPress ={handleCloseModal}>
                                <Feather name="close" size ={27} color = {colors.tertiary}/>
                            </ModalAction>

                            <ModalAction color={colors.tertiary} onPress = {handleSubmit}>
                                <Feather name="check" size ={27} color = {colors.secondary}/>
                            </ModalAction>
                        </ModalActionGroup>
                    </ModalView>
                </ModalContainer>
            </Modal>
        </>
    );
}

export default InputModal;
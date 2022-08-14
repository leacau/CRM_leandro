import {
  CustomButton,
  CustomInput,
  CustomModal,
  Item,
} from '../../components/index';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';
import { validateIsEmail } from '../../utils/function';

const InitialScreen = ( {onItemSelected} ) => {
  const [itemList, setItemList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});
  const [modal2Visible, setModal2Visible] = useState(false);
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mail, setMail] = useState('');
  const [nombre, setNombre] = useState('');

  const onChangeNombre = (text) => {
    setNombre(text);
  };
  const onChangeApellido = (text) => {
    setApellido(text);
  };
  const onChangeTelefono = (text) => {
    setTelefono(text.replace(/[^0-9]/g, ''));
  };
  const onChangeMail = (text) => {
    setMail(text);
  };

  const addItem = () => {
    setItemList([
      ...itemList,
      {
        id: itemList.length + Math.random() * Math.random(),
        nombre,
        apellido,
        telefono,
        mail,
      },
    ]);
    setNombre('');
    setApellido('');
    setTelefono('');
    setMail('');
    setModal2Visible(!modal2Visible);
  };

  const clearForm = () => {
    setNombre('');
    setApellido('');
    setTelefono('');
    setMail('');
    setModal2Visible(!modal2Visible);
  };

  const onDeleteItem = (id) => {
    setItemList((currentList) => currentList.filter((item) => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  };

  const onHandlerModal = (id) => {
    setItemSelected(itemList.find((item) => item.id === id));
    setModalVisible(!modalVisible);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => onItemSelected(item)}>
      <View style={styles.itemContainer}>
        <View style={styles.item}>
          <Text style={styles.name}>
            {item.apellido}
            {', '}
            {item.nombre}
          </Text>
          <Text style={styles.mail}>
            {item.mail}
          </Text>
        </View>
        <TouchableOpacity onPress={() => onHandlerModal(item.id)}>
          <Text style={styles.delete}>
            <AntDesign name="deleteuser" size={24} color="white" />
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (

    <View style={styles.container}>
      
      <View style={styles.itemList}>
        <FlatList
          data={itemList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View>
        <CustomModal animationType="slide" modalVisible={modalVisible} modalTitle="Detalle de selección" modalMessage="¿Estás seguro que deseas eliminar?" transparent>
          <View style={styles.modalContentContainer}>
            <Text style={styles.modalItem}>
              {itemSelected.apellido}
              {', '}
              {itemSelected.nombre}
            </Text>
          </View>
          <View style={styles.modalButton}>
            <CustomButton
              titleButton="Eliminar"
              onPressButton={() => onDeleteItem(itemSelected.id)}
              colorButton="#9A275A"
            />
            <CustomButton
              titleButton="Cancelar"
              onPressButton={() => setModalVisible(!modalVisible)}
              colorButton="#b9b9b9"
            />
          </View>
        </CustomModal>
      </View>

      <CustomModal
        modalTitle="Nueva persona"
        modalMessage="ingresá los datos solicitados"
        modalVisible={modal2Visible}
        animationType="slide"
        transparent
      >
        <Item inputData="Nombre: ">
          <CustomInput
            placeholder="Ingrese el nombe"
            value={nombre}
            onChangeText={onChangeNombre}
          />
        </Item>
        <Item inputData="Apellido: ">
          <CustomInput
            placeholder="Ingrese el apellido"
            value={apellido}
            onChangeText={onChangeApellido}
          />
        </Item>
        <Item inputData="Teléfono: ">
          <CustomInput
            keyboardType="numeric"
            placeholder="Ingrese el teléfono"
            value={telefono}
            onChangeText={onChangeTelefono}
          />
        </Item>
        <Item inputData="Mail: ">
          <CustomInput
            keyboardType="email-address"
            placeholder="Ingrese el mail"
            value={mail}
            onChangeText={onChangeMail}
          />
        </Item>
        <View style={styles.modalButton}>
          <CustomButton titleButton="Cancelar" onPressButton={() => clearForm()} colorButton="#b9b9b9" />
          <CustomButton titleButton="Ingresar" onPressButton={() => addItem()} colorButton="#99EDCC" disabledButton={(nombre == '' || apellido == '' || telefono == '' || mail == '' || validateIsEmail(mail) == false)} />
        </View>

      </CustomModal>

      <TouchableOpacity
        style={styles.buttonAdd}
        onPress={() => {
          setModal2Visible(!modal2Visible);
        }}
      >
        <AntDesign name="adduser" size={40} color="black" />
      </TouchableOpacity>
    </View>
  );
}

export default InitialScreen;

import {
  CustomButton,
  CustomInput,
  CustomModal,
  Item,
} from './components/index';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';

export default function App() {
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
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
  const onChangeTelefono = (number) => {
    setTelefono(number);
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
    setItemList((currentItems) => currentItems.filter((item) => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  };

  const onHandlerModal = (id) => {
    setItemSelected(itemList.find((item) => item.id === id));
    setModalVisible(!modalVisible);
  };

  const renderItem = ({ item }) => (
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
  );

  return (

    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>CRM Chena</Text>
      </View>
      <View style={styles.itemList}>
        <FlatList
          data={itemList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style
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
            placeholder="Ingrese el mail"
            value={mail}
            onChangeText={onChangeMail}
          />
        </Item>
        <View style={styles.modalButton}>
          <CustomButton titleButton="Cancelar" onPressButton={() => clearForm()} colorButton="#b9b9b9" />
          <CustomButton titleButton="Ingresar" onPressButton={() => addItem()} colorButton="#99EDCC" />
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

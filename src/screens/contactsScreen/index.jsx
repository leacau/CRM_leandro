import {
  CustomButton,
  CustomInput,
  CustomModal,
  CustomerItem,
  Item
} from '../../components/index';
import {
  FlatList,
  Select,
  TouchableOpacity,
  View
} from 'react-native';
import React, { useState } from 'react';

import { AntDesign } from '@expo/vector-icons';
import { CUSTOMERS } from '../../constants/data/customers'
import { styles } from './styles';
import { validateIsEmail } from '../../utils/function';

const ContactScreen = ({ onItemSelected, navigation, route }) => {
  const [itemList, setItemList] = useState([customerCategory]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});
  const [modal2Visible, setModal2Visible] = useState(false);
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [name, setName] = useState('');

  const onChangeNombre = (text) => {
    setName(text);
  };
  const onChangeApellido = (text) => {
    setLastname(text);
  };
  const onChangeTelefono = (text) => {
    setPhone(text.replace(/[^0-9]/g, ''));
  };
  const onChangeMail = (text) => {
    setMail(text);
  };

  const addItem = () => {
    setItemList([
      ...itemList,
      { 
        id: itemList.length + Math.random() * Math.random(),
        tipo,
        category: (tipo === 'Contacto' ? 1 : 2),
        name,
        lastname,
        phone,
        mail,
      },
    ]);
    clearForm();
  };

  const clearForm = () => {
    setName('');
    setLastname('');
    setPhone('');
    setMail('');
    setModal2Visible(!modal2Visible);
  };


  const onHandlerModal = (id) => {
    setItemSelected(itemList.find((item) => item.id === id));
    setModalVisible(!modalVisible);
  };

   const { categoryId } = route.params;
    const customerCategory = CUSTOMERS.filter((item) => item.category === categoryId);
    const onSelected = (item) => {
      navigation.navigate('Detalle de contacto', { 
        customerId: item.id,
        name: item.name, })
    };
    const renderItem = ({ item }) => (
      <CustomerItem item={item} onSelected={onSelected} />
    );
    const keyExtractor = (item, index) => item.id.toString();
    


    


  return (

    <View style={styles.container}>
     
    <FlatList
    data={customerCategory}
    renderItem= {renderItem}
    keyExtractor={keyExtractor}
    />

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
            value={name}
            onChangeText={onChangeNombre}
          />
        </Item>
        <Item inputData="Apellido: ">
          <CustomInput
            placeholder="Ingrese el lastname"
            value={lastname}
            onChangeText={onChangeApellido}
          />
        </Item>
        <Item inputData="Teléfono: ">
          <CustomInput
            keyboardType="numeric"
            placeholder="Ingrese el teléfono"
            value={phone}
            onChangeText={onChangeTelefono}
          />
        </Item>
        <Item inputData="Email: ">
          <CustomInput
            keyboardType="email-address"
            placeholder="Ingrese el mail"
            value={mail}
            onChangeText={onChangeMail}
          />
        </Item>
       
        
        <View style={styles.modalButton}>
          <CustomButton titleButton="Cancelar" onPressButton={() => clearForm()} colorButton="#b9b9b9" />
          <CustomButton titleButton="Ingresar" onPressButton={() => addItem()} colorButton="#99EDCC" disabledButton={(name == '' || lastname == '' || phone == '' || mail == '' || validateIsEmail(mail) == false)} />
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

export default ContactScreen;

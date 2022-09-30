import {
  CustomButton,
  CustomInput,
  ImageSelector,
  Item,
  LocationSelector,
} from "../../components/index";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";

import BouncyCheckbox from "react-native-bouncy-checkbox";
import { saveCustomer } from "../../store/customer.slice";
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { validateIsEmail } from "../../utils/function";

function NewContactScreen({ navigation }) {
  const dispatch = useDispatch();
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState(2);

  const onChangeNombre = (text) => {
    setName(text);
  };
  const onChangeApellido = (text) => {
    setLastname(text);
  };
  const onChangeTelefono = (text) => {
    setPhone(text.replace(/[^0-9]/g, ""));
  };
  const onChangeMail = (text) => {
    setEmail(text);
  };

  const onHandleSubmit = () => {
    dispatch(saveCustomer(category, name, lastname, phone, email, image, location));
    navigation.navigate("Contactos", { id: category });
  };

  const clearForm = () => {
    navigation.goBack();
    setName("");
    setLastname("");
    setPhone("");
    setEmail("");
  };

  const onHandlerTakeImage = (imageUrl) => {
    setImage(imageUrl);
  };

  const onHandleLocationSelect = (location) => {
    setLocation(location);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Item inputData="Nombre: ">
          <CustomInput placeholder="Ingrese el nombe" value={name} onChangeText={onChangeNombre} />
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
            value={email}
            onChangeText={onChangeMail}
          />
        </Item>
        <Item inputData="Contacto: ">
          <BouncyCheckbox
            size={15}
            fillColor="grey"
            unfillColor="#FFFFFF"
            text=""
            iconStyle={{ borderColor: "black" }}
            innerIconStyle={{ borderWidth: 1 }}
            textStyle={{ fontFamily: "RedHat-Bold" }}
            onPress={(isChecked) => (isChecked ? setCategory(1) : setCategory(2))}
          />
        </Item>

        <ImageSelector onImage={onHandlerTakeImage} />
        <LocationSelector onLocation={onHandleLocationSelect} />

        <View style={styles.modalButton}>
          <CustomButton
            titleButton="Cancelar"
            onPressButton={() => clearForm()}
            colorButton="#b9b9b9"
          />
          <CustomButton
            titleButton="Ingresar"
            onPressButton={onHandleSubmit}
            colorButton="#99EDCC"
            disabledButton={
              name == "" ||
              (category == 1 && lastname == "") ||
              phone == "" ||
              email == "" ||
              image == "" ||
              location == "" ||
              validateIsEmail(email) == false
            }
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default NewContactScreen;

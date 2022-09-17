import {
  CustomButton,
  CustomInput,
  ImageSelector,
  Item,
  LocationSelector,
} from "../../components/index";
import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";

import BouncyCheckbox from "react-native-bouncy-checkbox";
import { URL_GEOCODING } from "../../utils/maps";
import { newCustomer } from "../../store/actions/customers.action";
import { styles } from "./styles";
import { validateIsEmail } from "../../utils/function";

function NewContactScreen({ navigation }) {
  const route = useRoute("");

  const [tipo, setTipo] = useState("");
  const [itemList, setItemList] = useState([]);
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const newList = route?.params?.itemList;

  useEffect(() => {
    console.warn("newItemList", newList);
    if (newList) {
      setItemList(newList);
    }
  }, [newList]);

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

  const addItem = () => {
    setItemList([
      ...newList,
      {
        id: itemList.length + Math.random() * Math.random(),
        category: { tipo } === "Contacto" ? 2 : 1,
        name,
        lastname,
        phone,
        email,
        image,
        address,
        coords: {
          lat: location.lat,
          long: location.long,
        },
        tasks: [
          {
            id: "",
            name: "",
            description: "",
            status: "",
            creationDate: "",
            dueDate: "",
          },
        ],
      },
    ]);
    dispatch(newCustomer([itemList]));
    clearForm();
  };

  const clearForm = () => {
    navigation.navigate("Contactos", { newItemList: itemList });
    setName("");
    setTipo("");
    setLastname("");
    setPhone("");
    setEmail("");
  };

  const onHandlerTakeImage = (imageUrl) => {
    setImage(imageUrl);
  };

  const geoCoding = async (coords) => {
    const response = await fetch(URL_GEOCODING(coords.lat, coords.long));
    if (!response.ok) throw new Error("No se ha podido conectar con el servidor");
    try {
      const data = await response.json();
      if (!data.results) throw new Error("No se ha podido encontrar la dirección");

      const address = data.results[0].formatted_address;
      setAddress(address);
      const { lat, lng } = data.results[0].geometry.location;
      setLocation({ lat, long: lng });
    } catch (error) {
      console.log("error", error);
      throw error;
    }
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
            style={styles.checkbox}
            size={15}
            fillColor="grey"
            unfillColor="#FFFFFF"
            text=""
            iconStyle={{ borderColor: "black" }}
            innerIconStyle={{ borderWidth: 1 }}
            textStyle={{ fontFamily: "RedHat-Bold" }}
            onPress={(isChecked) => (isChecked ? setTipo("Contacto") : setTipo("Empresa"))}
          />
        </Item>

        <ImageSelector onImage={onHandlerTakeImage} />
        <LocationSelector onLocation={geoCoding} />

        <View style={styles.modalButton}>
          <CustomButton
            titleButton="Cancelar"
            onPressButton={() => clearForm()}
            colorButton="#b9b9b9"
          />
          <CustomButton
            titleButton="Ingresar"
            onPressButton={() => addItem()}
            colorButton="#99EDCC"
            disabledButton={
              name == "" ||
              lastname == "" ||
              phone == "" ||
              email == "" ||
              validateIsEmail(email) == false
            }
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default NewContactScreen;

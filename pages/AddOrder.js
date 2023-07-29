import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {verticalScale, scale, moderateScale} from 'react-native-size-matters';

// OrderScreen Component

const AddOrder = ({route}) => {
  // Receiving Orderlist and setOrder function from homescreen
  const orders = route.params.orders;
  const setOrders = route.params.setOrders;

  const navigation = useNavigation();

  //Defining States
  const [id, setId] = useState(0);
  const [phone, setPhone] = useState('');
  const [items, setItems] = useState('');
  const [name, setName] = useState('');

  // Adding new Order to Order List
  const updateOrders = async () => {
    console.log(name, id, items, phone);

    const o = {
      name: name,
      id: id,
      items: items,
      phone: phone,
      status: 'Pending',
    };

    setOrders(orders => [...orders, o]);

    setOrders(orders => orders.reverse());

    navigation.goBack();
  };

  return (
    <>
      <View
        style={{
          height: '100%',
          backgroundColor: 'white',
        }}>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            margin: moderateScale(20),
          }}>
          Add order
        </Text>
        <View>
          <TextInput
            onChangeText={e => {
              setName(e);
            }}
            style={styles.textInput}
            placeholder="Name"
          />
          <TextInput
            onChangeText={e => {
              setPhone(e);
            }}
            keyboardType="number-pad"
            style={styles.textInput}
            placeholder="Phone"
          />
          <TextInput
            onChangeText={e => {
              setId(e);
            }}
            keyboardType="number-pad"
            style={styles.textInput}
            placeholder="ID"
          />
          <TextInput
            onChangeText={e => {
              setItems(e);
            }}
            style={styles.textInput}
            placeholder="Dishes"
          />
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            if (name && phone.length === 10 && items && id) {
              updateOrders();
            } else {
              Alert.alert('Fill Details Properly');
            }
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              marginTop: verticalScale(10),
            }}>
            Place Your Order
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AddOrder;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#d4d3cf',
    margin: moderateScale(15),
    padding: moderateScale(10),
  },
  btn: {
    backgroundColor: 'green',
    height: verticalScale(40),
    width: scale(200),
    marginTop: verticalScale(20),
    alignSelf: 'center',
  },
});

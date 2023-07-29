import React from 'react';
import {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

// HomeScreen Component

const Home = () => {
  const navigation = useNavigation();

  //Defining States
  const [orders, setOrders] = useState([]);

  useEffect(() => {}, [orders]);

  return (
    <>
      <View
        style={{
          height: '100%',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            width: scale(320),
            alignSelf: 'center',
            flexDirection: 'row',
            margin: verticalScale(20),
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: moderateScale(20),
              color: 'black',
            }}>
            Food Ordering app
          </Text>
          <TouchableOpacity
            onPress={() => {
              // Sending Orderlist and setOrders function to OrderScreen Component
              navigation.navigate('addOrder', {
                setOrders: setOrders,
                orders: orders,
              });
            }}>
            <Text
              style={{
                fontSize: moderateScale(20),
                borderWidth: 1,
                padding: moderateScale(10),
                borderRadius: 10,
                textAlign: 'center',
                width: scale(40),
                borderColor: '#d4d3cf',
                height: verticalScale(40),
                color: 'black',
              }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: moderateScale(18),
            color: 'black',
            alignSelf: 'center',
          }}>
          All Orders
        </Text>
        {orders.length === 0 ? (
          <Text
            style={{
              marginTop: verticalScale(20),
              alignSelf: 'center',
            }}>
            No Orders Yet... Tap on + to add
          </Text>
        ) : (
          <View>
            {orders.map(e => (
              <>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'white',
                    margin: moderateScale(15),
                    borderColor: '#d4d3cf',
                    borderRadius: moderateScale(10),
                    padding: moderateScale(10),
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: 'black',
                    }}>
                    {e.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: 'black',
                    }}>
                    {e.phone}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'black',
                      marginTop: verticalScale(10),
                    }}>
                    Ordered : {e.items}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: 'black',
                    }}>
                    Order ID : {e.id}
                  </Text>
                  <Text
                    style={{
                      color: e.status === 'Pending' ? '#c49206' : 'green',
                    }}>
                    status : {e.status}
                  </Text>
                  {e.status === 'Pending' ? (
                    <View>
                      <Text
                        onPress={() => {
                          // Updating the Order List

                          let o = e;
                          o.status = 'Completed';

                          let newOrders = orders.filter(ee => {
                            return ee.id != e.id;
                          });

                          newOrders.push(o);

                          setOrders(newOrders);
                        }}
                        style={{
                          borderWidth: 1,
                          padding: moderateScale(10),
                          borderColor: '#d4d3cf',
                          color: 'black',
                          textAlign: 'center',
                          marginTop: verticalScale(15),
                        }}>
                        Mark As Completed
                      </Text>
                      <Text
                        onPress={() => {
                          setOrders(
                            orders.filter(ee => {
                              return ee.id != e.id;
                            }),
                          );
                        }}
                        style={{
                          borderWidth: 1,
                          borderColor: 'white',
                          color: 'red',
                          padding: moderateScale(10),
                          textAlign: 'center',
                          marginTop: verticalScale(15),
                        }}>
                        Delete Order
                      </Text>
                    </View>
                  ) : (
                    <></>
                  )}
                </View>
              </>
            ))}
          </View>
        )}
      </View>
    </>
  );
};

export default Home;

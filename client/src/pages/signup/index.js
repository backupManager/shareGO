import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get("window");

const background = require("./signup_bg.png");
const backIcon = require("./back.png");
const personIcon = require("./signup_person.png");
const lockIcon = require("./signup_lock.png");
const emailIcon = require("./signup_email.png");
const birthdayIcon = require("./signup_birthday.png");
const config                = require('../../configurations/config');

var t = require('tcomb-form-native');

var Form = t.form.Form;

var Person = t.struct({
  firstName: t.String,
  lastName:  t.String,
  email:     t.String,     
  Password:  t.String,
  confirmPassword:t.String,
  phone:     t.String,
  country:   t.String,
  city:      t.String,
  state:     t.String,
  pinCode:   t.Number,
  gender:    t.String,
  dateOfBirth:t.Date,
  aadharNo:  t.Number,
  vehicleModel:t.String,
  vehicleNumber:t.String
});

var options = {
  fields: {
    firstName: {
      placeholderTextColor: '#cccccc'
    },
    lastName: {
      placeholderTextColor: '#cccccc'
    },
    email: {
      placeholderTextColor: '#cccccc'
    },
    lastName: {
      placeholderTextColor: '#cccccc'
    },
    password: {
      password: true,
      secureTextEntry: true,
      placeholderTextColor: '#cccccc'
    },
    
    confirmPassword: {
      password: true,
      secureTextEntry: true,
      placeholderTextColor: '#cccccc'
    },
    
    phone: {
      placeholderTextColor: '#cccccc'
    },

    country: {
      placeholderTextColor: '#cccccc'
    },

    state: {
      placeholderTextColor: '#cccccc'
    },

    pinCode: {
      placeholderTextColor: '#cccccc'
    },

    gender: {
      placeholderTextColor: '#cccccc'
    },

    dateOfBirth: {
      placeholderTextColor: '#cccccc'
    },

    aadharNo: {
      placeholderTextColor: '#cccccc'
    },

    vehicleModel: {
      placeholderTextColor: '#cccccc'
    },

    vehicleNumber: {
      placeholderTextColor: '#cccccc'
    },
},
  auto: 'placeholders'
};

var STORAGE_KEY = 'id_token';


export default class Signup extends Component {
  _userSignup() {
    console.log("reached user login");
    var value = this.refs.form.getValue();
    console.log("uname "+value.username+" password "+value.password);
    if (value) { // if validation fails, value will be null
      fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          lastName:  value.lastName,
          firstName: value.firstName,
          password:  value.password,
          confirmPassword: value.confirmPassword,
          phone:     value.phone,
          country:   value.country,
          state:     value.state,
          pinCode:   value.pinCode,
          gender:    value.gender,
          dateOfBirth: value.dateOfBirth,
          aadharNo:   value.aadharNo,
          vehicleModel:value.vehicleModel,
          vehicleNumber:value.vehicleNumber,
        })
      })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(
          " Successfully you are registered"
        ),
        this._onValueChange(STORAGE_KEY, responseData.id_token)
      })
      .done();
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={background} 
          style={[styles.container, styles.bg]}
          resizeMode="cover"
        >
          <View style={styles.headerContainer}>

            <View style={styles.headerTitleView}>
              <Text style={styles.titleViewText}>Sign Up</Text>
            </View>

          </View>

          <View style={styles.inputsContainer}>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image 
                  source={personIcon}
                  style={styles.inputIcon}
                  resizeMode="contain"
                />
              </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder="Name"
                placeholderTextColor="#FFF"
                underlineColorAndroid='transparent' 
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image 
                  source={emailIcon} 
                  style={styles.inputIcon} 
                  resizeMode="contain"
                />
              </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder="Email"
                placeholderTextColor="#FFF" 
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image 
                  source={lockIcon} 
                  style={styles.inputIcon} 
                  resizeMode="contain"
                />
              </View>
              <TextInput
                secureTextEntry={true}
                style={[styles.input, styles.whiteFont]}
                placeholder="Password"
                placeholderTextColor="#FFF" 
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image 
                  source={birthdayIcon} 
                  style={styles.inputIcon} 
                  resizeMode="contain"
                />
              </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder="Birthday"
                placeholderTextColor="#FFF"
                underlineColorAndroid='transparent' 
              />
            </View>

          </View>

          <View style={styles.footerContainer}>

            <TouchableOpacity>
              <View style={styles.signup}>
                <Text style={styles.whiteFont}>Join</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.signin}>
                <Text style={styles.greyFont} >Already have an account?<Text style={styles.whiteFont} onPress={Actions.Login({type: 'reset'})}> Sign In</Text></Text>
              </View>
            </TouchableOpacity>
          </View>
        </Image>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    paddingTop: 30,
    width: null,
    height: null
  },
  headerContainer: {
    flex: 1,
  },
  inputsContainer: {
    flex: 3,
    marginTop: 50,
  },
  footerContainer: {
    flex: 1
  },
  headerIconView: {
    marginLeft: 10,
    backgroundColor: 'transparent'
  },
  headerBackButtonView: {
    width: 25,
    height: 25,
  },
  backButtonIcon: {
    width: 25,
    height: 25
  },
  headerTitleView: {
    backgroundColor: 'transparent',
    marginTop: 25,
    marginLeft: 25,
  },
  titleViewText: {
    fontSize: 40,
    color: '#fff',
  },
  inputs: {
    paddingVertical: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderBottomColor: '#CCC',
    borderColor: 'transparent',
    flexDirection: 'row',
    height: 75,
  },
  iconContainer: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputIcon: {
    width: 30,
    height: 30,
  },
  input: {
    flex: 1,
    fontSize: 20,
  },
  signup: {
    backgroundColor: '#FF3366',
    paddingVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  signin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  greyFont: {
    color: '#D8D8D8'
  },
  whiteFont: {
    color: '#FFF'
  }
});
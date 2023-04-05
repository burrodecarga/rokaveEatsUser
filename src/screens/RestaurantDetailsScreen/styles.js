import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  page: {
    flex: 1,
  },
  image: {
    width: '100%',
    aspectRatio: '5/3',
  },
  iconContainer: {
    position: 'absolute',
    top: 50,
    left: 15,
    borderRadius: 100,
  },
  container: {
    margin: 10,
    backgroundColor: 'lightgray',
    paddingVertical: 5,
    borderRadius: 20,
    borderColor: 'lightgreen',
    borderWidth:2
  },
  title: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: "center",
  },
  subtitle: {
    textAlign: 'center',
    color: 'grey',
  },
  meniTitle:{
    marginTop:10,
    fontSize:18,
    letterSpacing:0.7
  },
  button: {
    backgroundColor: '#18b8aa',
    color:'white',
    marginTop:'auto',
    padding:20,
    alignItems:'center',
    borderRadius:10,
    borderWidth:1,
    borderColor:'lightgreen'
  },
  buttonText: {
    color:'white',
  }
})
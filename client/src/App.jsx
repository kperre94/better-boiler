import React from 'react';
// import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {

      }
  }
  // // current user that is logged in
  // const [ user, setUser ] = useState({});

  // //Similar to componentDidMount & componentWillUpdate
  // useEffect(() => {
  //   //get all prodcuts from db
  //   getAllProducts();
  // }, [productsUpdated]);

  // const getAllProducts = async () => {
  //   let user = await axios.get('/user')
  //   .then((user) => {
  //     //Array of prodcuts from db
  //     const currentUser = result.data;
  //     //set state to incoming array
  //     setUser(currentUser);
  //   })
  //   .catch((err) => {
  //     // show the error in client side console
  //     console.log("error in client ", err);
  //   });
  // };
  render() {
    return (
      <>
        <div>{this.state.message}</div>
      </>
    )
  }
}

export default App;

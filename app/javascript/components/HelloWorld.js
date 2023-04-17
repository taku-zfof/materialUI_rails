import React from "react"
import PropTypes from "prop-types"
import Button from '@material-ui/core/Button';
import axios from 'axios'


function TabPanel(props) {
  const { children, value, index, ...other } = props;}

  const route = () => {
    axios.get("/home/about")
  }

class HelloWorld extends React.Component {



  render () {
    return (
      <React.Fragment>

        <Button onClick={()=>route()} variant="contained" color="primary">
         ボタン
        </Button>

      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld

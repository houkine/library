import React, { useState,useRef,useEffect } from "react";
import { useHistory } from "react-router-dom"

import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

import Proptypes from 'prop-types'


const HookComponentTemplate = ({value}) => {
    const classes = HookComponentTemplateStyles();
    return(
        <Box className={classes.container}>
            <Box>{'the value from props is: '+value}</Box>
            
        </Box>
    )
}

HookComponentTemplate.propTypes = {
}
const HookComponentTemplateStyles = makeStyles((theme) => ({
    container:{
      margin:'0 auto',
      // marginTop:'25%',
      marginTop:'3%',
      width:'70%',
      height:'90%',
    },
    img:{

    },
  }));

export default HookComponentTemplate;
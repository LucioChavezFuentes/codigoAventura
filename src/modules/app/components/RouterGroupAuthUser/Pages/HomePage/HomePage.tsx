import React from 'react';
import HeaderUser from '../utilsComponents/HeaderUser/HeaderUser'

import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';

function onChange(newValue: string) {
    console.log('change', newValue); 
  }

const HomePage: React.FC = () => {
    return(
        <div>
            <HeaderUser/> 
            <p>Prográmale aquí chavo</p>

            <AceEditor
    mode="java"
    theme="github"
    onChange={onChange}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{$blockScrolling: true}}
  />



        </div>
        
    )
}

export default HomePage;
import React, {useState} from 'react';
import HeaderUser from '../utilsComponents/HeaderUser/HeaderUser';
import {AuthUserContext, withAuthentication} from '../utils/firebaseApp';

import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/terminal';




const HomePage: React.FC = () => {

    const [code, setCode] = useState<string>('');
    const [logValue, setLogValue] = useState('');

    function handleChange(newValue: string) {
      setCode(newValue); 
    }

    function handleClick() {
      eval(code) 
    }

    (function(){
      var oldLog = console.log;
      console.log = function (message: string) {
          setLogValue(message)
          //@ts-ignore
          oldLog.apply(console, arguments);
      };
  })();

    return(
      <AuthUserContext.Consumer>{authUser => ( 
        
        <div>
          <HeaderUser authUser={authUser} />

          <div className='titleClass'>
            <p>Prográmale aquí chavo con email {authUser!.email} </p>
          </div>

          <div className='codeEditor'>
            <AceEditor
              mode="javascript"
              theme="terminal"
              value={code}
              onChange={handleChange}
              name="UNIQUE_ID_OF_DIV"
              editorProps={{ $blockScrolling: true }}
            />
          </div>

          <div className='codeOutput'>
            {logValue}
          </div>


          <button onClick={handleClick}>
            Correr
          </button>

        </div>

        )}
      </AuthUserContext.Consumer>
    )
}

export default HomePage;
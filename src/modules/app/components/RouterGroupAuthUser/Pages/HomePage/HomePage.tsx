import React, {useState, useEffect} from 'react';
import HeaderUser from '../utilsComponents/HeaderUser/HeaderUser';
import Firebase, {withFirebase, withAuthUser} from '../utils/firebaseApp';
import './HomePage.scss';
import AceEditor from 'react-ace';
import {Button} from 'react-bootstrap';

import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/mode-javascript";
 
interface Props { 
  Firebase : Firebase
  authUser : firebase.User
}

const HomePage: React.FC<Props> = (props) => {

    const [isCodeLoading, setCodeLoading] = useState<boolean>(true);
    const [code, setCode] = useState<string>('');
    const [logValue, setLogValue] = useState('');

    useEffect(() => {
      props.Firebase.user(props.authUser.uid).once('value' , snapshot => {
        let userCode = snapshot.val();
        //Warning: If component is Unmounted before setCode is settled there's gona be a memory leak. 
        if(userCode && props.authUser) {
          setCode(userCode.code);
        }
        setCodeLoading(false); 

      })
    }, []);  

    function handleChange(newValue: string) {
      setCode(newValue); 
    }

    function handleClick() {
      props.Firebase.user(props.authUser.uid).update({code})
      //TODO: Find a safer way than eval to render code.
      try{
        eval(code)

      } catch(e)  {
        if (e instanceof SyntaxError) {
          alert(e.message);
        }
      } 
    }

    (function(){
      var oldLog = console.log;
      console.log = function (message: string) {
          //TODO: If multiple console logs are written make sure all of them appear.
          setLogValue(message);
          //@ts-ignore
          oldLog.apply(console, arguments);
      };
  })();

    return(
      
        
        <div>
          <HeaderUser authUser={props.authUser} isCodeLoading={isCodeLoading} />

          <div className='titleClass'>
            <p>Prográmale aquí chavo con email {props.authUser.email} </p>
          </div>

          <div className='editorContainer'>

            <div className='codeEditor'>
              <AceEditor
              //WARNING: Console Error: Refused to execute script from 'http://localhost:3000/worker-javascript.js' because its MIME type ('text/html') is not executable.
              //TODO: Find a solution to this warning.
                mode="javascript"
                theme="terminal"
                value={code}
                onChange={handleChange}
                name="user-code-editor"
                editorProps={{ $blockScrolling: true }}
                enableBasicAutocompletion={true}
                enableLiveAutocompletion={true}
                enableSnippets={true}
              />
            </div>

            <div className='codeOutput'>
              {logValue}
            </div>

          </div>

          <div className='buttonContainer'>
            <Button variant='success' onClick={handleClick}>
              Correr
            </Button>
          </div>
        </div>

        
     
    )
}

export default withFirebase(withAuthUser(HomePage));
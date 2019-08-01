import React, {useState, useEffect} from 'react';
import HeaderUser from '../utilsComponents/HeaderUser/HeaderUser';
import Firebase, {withFirebase, withAuthUser} from '../utils/firebaseApp';

import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/terminal';

interface Props {
  Firebase : Firebase
  authUser : firebase.User
}


const HomePage: React.FC<Props> = (props) => {

    const [code, setCode] = useState<string>('');
    const [logValue, setLogValue] = useState('');

    useEffect(() => {
      props.Firebase.userCode(props.authUser.uid).once('value' , snapshot => {
        let userCode = snapshot.val();

        if(userCode) {
          setCode(userCode.code);
        } 

        

      })
    }, [props.authUser.uid]);  

    function handleChange(newValue: string) {
      setCode(newValue); 
    }

    function handleClick() {
      props.Firebase.userCode(props.authUser.uid).set({code})
      //TODO: Find a safer way than eval to render code.
      eval(code).catch((error: any) => {
        console.log(error);
      }) 
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
          <HeaderUser authUser={props.authUser} />

          <div className='titleClass'>
            <p>Prográmale aquí chavo con email {props.authUser.email} </p>
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

        
     
    )
}

export default withFirebase(withAuthUser(HomePage));
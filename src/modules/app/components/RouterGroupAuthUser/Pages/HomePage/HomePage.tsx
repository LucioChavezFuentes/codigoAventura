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

//Material UI
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
 
interface Props { 
  Firebase : Firebase
  authUser : firebase.User
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titleClass: {
      position:'relative',
      top: '2rem'
    },

    editorContainer: {
      position: 'relative',
      top: '3rem',
      margin: 'auto 5%',
      display: 'flex',
      flexFlow: 'wrap',
      justifyContent: 'space-evenly',
      
    },

    codeOutput: {
      width: '50%',
      margin: '0 auto',
      backgroundColor: 'rgb(254, 255, 181)',
      fontWeight: 'bolder',
      fontSize: '2rem',
      borderStyle:  'solid',
      borderWidth: '1rem',
      borderColor: '#d9d9d9',
      [theme.breakpoints.down('xs')]: { 
        width: '90%',
        fontSize: '1rem', 
      } 
    },

    cardCode: {
      margin: '24% 5%',
    },
  
  
    buttonContainer: {
      position: 'relative',
      top: '5rem'
    },
  
    codeEditor: {
      borderStyle:  'solid',
      borderWidth: '1rem',
      borderColor: '#d9d9d9',
    }
  })
)

const HomePage: React.FC<Props> = (props) => {

    const [isCodeLoading, setCodeLoading] = useState<boolean>(true);
    const [code, setCode] = useState<string>('');
    const [logValue, setLogValue] = useState('');
    const classes = useStyles();

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

    if(window.innerWidth < 360){

    }

    return(
      
        
        <div>
          <HeaderUser authUser={props.authUser} isCodeLoading={isCodeLoading} />

          <div className={classes.titleClass}>
            <p>Prográmale aquí chavo con email {props.authUser.email} </p>
          </div>

          <div className={classes.editorContainer}>

            <div className={classes.codeEditor}> 
              <AceEditor
              //WARNING: Console Error: Refused to execute script from 'http://localhost:3000/worker-javascript.js' because its MIME type ('text/html') is not executable.
              //TODO: Find a solution to this warning.
                width={window.innerWidth < 600 ? '300px' : '500px'}  
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

            <div className={classes.codeOutput} > 
                <Paper className={classes.cardCode}>
                    {logValue || `Escribe "console.log(Hola)" en el editor de código a la izquierda y ve el resultado.`}
                </Paper>
            </div> 
          </div> 

          <div className={classes.buttonContainer}>
            <Button variant='success' onClick={handleClick}>
              Correr
            </Button>
          </div>
        </div>

        
     
    )
}

export default withFirebase(withAuthUser(HomePage));
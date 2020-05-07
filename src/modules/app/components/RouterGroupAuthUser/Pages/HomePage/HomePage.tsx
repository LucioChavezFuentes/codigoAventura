import React, {useState, useEffect} from 'react';
import HeaderUser from '../utilsComponents/HeaderUser/HeaderUser';
import Firebase, {withFirebase, withAuthUser} from '../utils/firebaseApp';
import './HomePage.scss';
import AceEditor from 'react-ace';
import {Button} from 'react-bootstrap';
import useWindowSize from '../../../../helper/useWindowSize';

import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/mode-javascript";

//Material UI
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface Props { 
  Firebase : Firebase
  authUser : firebase.User
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

    homePage: {
      marginTop: theme.spacing(12),
      paddingTop: '0.1px',
      [theme.breakpoints.down('xs')]: { 
        marginTop: theme.spacing(9)
      } 
    },

    titleClass: {
      marginBottom: theme.spacing(3),
      padding: `10px 0`,
      margin: '24px auto',
      width: '30%',
      borderRadius: '20px',
      backgroundColor: 'white',

      '& p': {
        margin: 'auto'
      },

      '& span': {
        fontWeight: 'bold',
      }
    },

    editorContainer: {
      margin: 'auto 5%',
      display: 'flex',
      flexFlow: 'wrap',
      justifyContent: 'space-evenly',
      
    },

    codeOutput: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50%',
      margin: '0 auto',
      backgroundColor: 'rgb(254, 255, 181)',
      fontWeight: 'bolder',
      fontSize: '2rem',
      borderStyle:  'solid',
      borderWidth: '1rem',
      borderColor: '#d9d9d9',
      borderRadius: '20px',

      [theme.breakpoints.down('xs')]: { 
        position: 'relative',
        top: '1rem',
        width: '90%',
        height: '150px',
        margin: '0 auto',
        fontSize: '1rem',
      },

      [theme.breakpoints.down('sm')]: {
        position: 'relative',
        top: '1rem',
        width: '90%',
        height: '150px',
        margin: '0 auto',
        fontSize: '1.5rem',
      },
      
      [theme.breakpoints.down('md')]: {
        position: 'relative',
        top: '1rem',
        width: '90%',
        height: '150px',
        margin: '0 auto',
        fontSize: '1.5rem',
      }
    },

    cardCode: {
      padding: '10px', 
      textAlign: 'center',
      
      [theme.breakpoints.down('xs')]: {
        fontSize: '1rem',
        padding: '5px', 
      },

      [theme.breakpoints.down('sm')]: {
        padding: '5px',
      }
    },
  
    buttonContainer: {
      position: 'relative',
      top: '5rem',
      margin: '20px 0',
      [theme.breakpoints.down('xs')]: {
        top: '50px',
      }
    },
  
    codeEditor: {
      borderStyle:  'solid',
      borderWidth: '1rem',
      borderColor: '#d9d9d9',
      borderRadius: '20px'
    }
  })
)

const HomePage: React.FC<Props> = (props) => {

    const {width, height} = useWindowSize();
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

    return(
      
        <div>
          <HeaderUser authUser={props.authUser} isCodeLoading={isCodeLoading} />

          <div className={classes.homePage}>
            <div className={classes.titleClass}>
              <p>Tu email: <span>{props.authUser.email}</span> </p>
            </div>

            <div className={classes.editorContainer}>

              <div className={classes.codeEditor}> 
                <AceEditor
                //WARNING: Console Error: Refused to execute script from 'http://localhost:3000/worker-javascript.js' because its MIME type ('text/html') is not executable.
                //TODO: Find a solution to this warning.
                  width={width < 600 ? '300px' : '500px'}
                  height={height < 900 ? '300px' : '500px'}
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
                      {logValue || `Escribe "console.log(Hola)" en el editor de código y ve el resultado.`}
                  </Paper>
              </div> 
            </div> 

            <div className={classes.buttonContainer}>
              <Button variant='success' onClick={handleClick} disabled={isCodeLoading}>
                Correr
              </Button>
            </div>
          </div>
        </div>

        
     
    )
}

export default withFirebase(withAuthUser(HomePage));
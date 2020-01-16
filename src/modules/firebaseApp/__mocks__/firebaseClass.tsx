
export let mockUserObject: any = null;

let listenerCallback : any = () => {};

export let mockOnAuthStateChanged = jest.fn((callback) => {
  
  listenerCallback = callback;
  
  return () => {
    mockUserObject = null
  }
});

export const mockDoCreateUserWithEmailAndPassword = jest.fn(function(email:string, password:string) {

  if(!mockUserObject) {

    mockUserObject = {
      auth: true,
      uid: 'chiquillo',
      email,
      user: {
        uid: 'chiquillo'
      }
    }

    mockDoCreateUserWithEmailAndPassword(email,password).then(function(){
      return new Promise(function(resolve) {
        resolve()
      })
    }).then(function() {
      listenerCallback(mockUserObject)
    })
  }

  return new Promise((resolve, reject) => resolve(mockUserObject))
})

export const mockDoSignInWithEmailAndPassword = jest.fn(function(email:string, password:string) {

  if(!mockUserObject) {

    mockUserObject = {
      auth: true,
      uid: 'chiquillo',
      email,
      user: {
        uid: 'chiquillo'
      }
    }

    mockDoSignInWithEmailAndPassword(email,password).then(function(){
      return new Promise(function(resolve) {
        resolve()
      })
    }).then(function() {
      listenerCallback(mockUserObject)
    })
  }

  return new Promise((resolve, reject) => resolve(mockUserObject))
  
});

export const mockDoSignOut = jest.fn(function(){

})

/*export const mockOnAuthStateChangedTrue = jest.fn((callback) => {
  callback({auth:true})
  return () => {}
})*/

export const mockCreateUserAtServer = jest.fn((id:string) => {
  return {
    set: (email: {email: string}) => {
    },

    once: (valueType: string,callback: any) => {
      const snapshot = {
        val: ()=> {
          return 'código del conejito'
        }
      }

      callback(snapshot)
    }
  }
});

const mockFirebase = jest.fn().mockImplementation(() => {

  return {
    
    doCreateUserWithEmailAndPassword: mockDoCreateUserWithEmailAndPassword ,

    doSignInWithEmailAndPassword: mockDoSignInWithEmailAndPassword,

    doSignOut : function(){
      listenerCallback(null)
    },

    user: mockCreateUserAtServer,

    auth: {
      _mockUserObject: null,

      set newMockUserObject(mockUserObject : any) {
        this._mockUserObject = mockUserObject
      },

      get mockUserObject() {
        return this._mockUserObject 
      },

      onAuthStateChanged: mockOnAuthStateChanged, 
    },
  };
});

export default mockFirebase; 
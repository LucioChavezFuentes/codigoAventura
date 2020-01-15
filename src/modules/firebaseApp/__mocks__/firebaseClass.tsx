
export let mockUserObject: any = null;

export let mockOnAuthStateChanged = jest.fn((callback) => {
  callback(mockUserObject)
  return () => {}
});

let excuteListener

export const mockDoCreateUserWithEmailAndPassword = jest.fn(function(email:string, password:string) {

  mockUserObject = {
    auth: true,
    uid: 'chiquillo',
    email,
    user: {
      uid: 'chiquillo'
    }}

  return new Promise((resolve, reject) => resolve(mockUserObject))

})

export const mockDoSignInWithEmailAndPassword = jest.fn(function(email:string, password:string) {

  mockUserObject = {
    auth: true,
    user: {
      uid: 'chiquillo'
    }}

  return new Promise((resolve) => {
    resolve(mockUserObject)
  })
  
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
    //TODO: Wrap mockDoCreateUserWithEmailAndPassword in a jest.fn()
    doCreateUserWithEmailAndPassword: function(email:string, password:string) {

      const executeListener = this.auth.listenerCallback     
      
      mockUserObject = {
        auth: true,
        uid: 'chiquillo',
        email,
        user: {
          uid: 'chiquillo'
        }}

      //executeListener(mockUserObject)
      
      /*setTimeout(() => {
        executeListener(mockUserObject)
      }, 50);*/
      if(!this.auth.mockUserObject) {
        this.auth.newMockUserObject = mockUserObject
        this.doCreateUserWithEmailAndPassword(email,password).then(function(){
          return new Promise(function(resolve) {
            resolve()
          })
        }).then(function() {
          executeListener(mockUserObject)
        })
      }
      
      //this.newMockUserObject = mockUserObject
    
      return new Promise((resolve, reject) => resolve(mockUserObject))

    },

    doSignInWithEmailAndPassword:  function(email:string, password:string) {

      const executeListener = this.auth.listenerCallback     
      
      mockUserObject = {
        auth: true,
        uid: 'chiquillo',
        email,
        user: {
          uid: 'chiquillo'
        }}

      //executeListener(mockUserObject)
      
      /*setTimeout(() => {
        executeListener(mockUserObject)
      }, 50);*/
      if(!this.auth.mockUserObject) {
        this.auth.newMockUserObject = mockUserObject
        this.doSignInWithEmailAndPassword(email,password).then(function(){
          return new Promise(function(resolve) {
            resolve()
          })
        }).then(function() {
          executeListener(mockUserObject)
        })
      }
      
      //this.newMockUserObject = mockUserObject
    
      return new Promise((resolve, reject) => resolve(mockUserObject))

    },

    doSignOut : function(){
      //this.newMockUserObject = null
      this.auth.listenerCallback(null)
    },

    user: mockCreateUserAtServer,
    /*
    set newMockUserObject(mockUserObject : any) {
      this.auth._mockUserObject = mockUserObject
    },

    set newOnAuthStateChanged(mockUserObject: any) {
      this.auth.onAuthStateChanged = function(callback: any) {
        callback(mockUserObject)
        return () => {}
      }
    },*/


    auth: {
      _mockUserObject: null,

      set newMockUserObject(mockUserObject : any) {
        this._mockUserObject = mockUserObject
      },

      get mockUserObject() {
        return this._mockUserObject 
      },

      onAuthStateChanged: function(callback: any) {
        //@ts-ignore
        this.listenerCallback = callback
        //callback(this.mockUserObject)
        return () => {

        }
      },
    },
  };
});

export default mockFirebase; 
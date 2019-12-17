
export let mockUserObject: any = null;

export const mockDoCreateUserWithEmailAndPassword = jest.fn((email:string, password:string) => {
  
  mockUserObject = {
    auth: true,
    user: {
      uid: 'chiquillo'
    }}

  return new Promise((resolve) => {
    resolve(mockUserObject)
  }) 
  
});

/*export const mockOnAuthStateChangedTrue = jest.fn((callback) => {
  callback({auth:true})
  return () => {}
})*/

export const mockOnAuthStateChanged = jest.fn((callback) => {
  callback(mockUserObject)
  return () => {}
});

export const mockUser = jest.fn((id:string) => {
  return {
    set: (email: {email: string}) => {

    }
  }
});

const mockFirebase = jest.fn().mockImplementation(() => {

  return {
    doCreateUserWithEmailAndPassword: mockDoCreateUserWithEmailAndPassword,
    user: mockUser,
    auth: {
      onAuthStateChanged: mockOnAuthStateChanged
    },
  };
});

export default mockFirebase;
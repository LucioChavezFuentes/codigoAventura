import React from 'react';

import RouterGroupAuthUser from '../RouterGroupAuthUser/RouterGroupAuthUser';
import TransitionGroupNonAuthUser from '../TransitionGroupNonAuthUser/TransitionGroupNonAuthUser';

interface Props {
    authUser: firebase.User | null
}

const Container: React.FC<Props> = (props) => {

    return(
        
         props.authUser ? <RouterGroupAuthUser/> : <TransitionGroupNonAuthUser vanish={undefined} />
        
    )
}

export default Container;
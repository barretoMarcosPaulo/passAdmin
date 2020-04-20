import {createAppContainer , createSwitchNavigator} from 'react-navigation'

import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import EmailChange from './pages/EmailChange'

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Register,
        Home,
        EmailChange
    })
)

export default Routes
import {createAppContainer , createSwitchNavigator} from 'react-navigation'

import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Register,
        Home
    })
)

export default Routes
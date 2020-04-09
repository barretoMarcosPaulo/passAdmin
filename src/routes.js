import {createAppContainer , createSwitchNavigator} from 'react-navigation'

import Register from './pages/Register'
import Login from './pages/Login'

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Register,
        // Book,
    })
)

export default Routes
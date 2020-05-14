import {createAppContainer , createSwitchNavigator} from 'react-navigation'

import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import EmailChange from './pages/EmailChange'
import PasswordChange from './pages/PasswordChange'
import ManagerPasswordList from './pages/ManagerPasswordList'
import ManagerPasswordAdd from './pages/ManagerPasswordAdd'

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Register,
        Home,
        EmailChange, 
        PasswordChange,
        ManagerPasswordList,
        ManagerPasswordAdd
    })
)

export default Routes
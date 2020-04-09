import {createAppContainer , createSwitchNavigator} from 'react-navigation'

import Register from './pages/Register'

const Routes = createAppContainer(
    createSwitchNavigator({
        Register,
        // List,
        // Book,
    })
)

export default Routes
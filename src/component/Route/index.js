import { Switch } from '@chakra-ui/switch'
import React from 'react'
import { Route } from 'react-router'
import Home from '../Home/Home'

function Routes() {
    return (
        <Switch>

        <Route path='/home' component={Home}/>
        </Switch>
    )
}

export default Routes

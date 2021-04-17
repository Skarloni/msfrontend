import React, { Fragment, useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Menu from '@material-ui/icons/Menu'

import Reports from './components/Reports'
import Documents from './components/Documents'
import Storages from './components/Storages'
import Products from './components/Products'

import './App.css'

export default function App() {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClickClose = () => {
        setOpen(false)
    }

    return (
        <Fragment>
            <AppBar>
                <Toolbar>
                    <IconButton
                        style={{ marginRight: 10 }}
                        color='inherit'
                        edge='start'
                        onClick={handleClickOpen}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant='h6' noWrap>
                        Склад
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer anchor='left' open={open} onClose={handleClickClose}>
                <List>
                    <Fragment>
                        <ListItem
                            button
                            onClick={handleClickClose}
                            component={Link}
                            to='/storages'
                        >
                            <ListItemText primary='Список складов' />
                        </ListItem>
                        <Divider />
                        <ListItem
                            button
                            onClick={handleClickClose}
                            component={Link}
                            to='/documents'
                        >
                            <ListItemText primary='Документы' />
                        </ListItem>
                        <Divider />
                        <ListItem
                            button
                            onClick={handleClickClose}
                            component={Link}
                            to='/reports'
                        >
                            <ListItemText primary='Отчеты' />
                        </ListItem>
                    </Fragment>
                </List>
            </Drawer>
            <Box my={10}>
                <Switch>
                    <Route exact path='/storages'>
                        <Storages />
                    </Route>
                    <Route path='/documents'>
                        <Documents />
                    </Route>
                    <Route path='/reports'>
                        <Reports />
                    </Route>
                    <Route path='/storages/:storageName/products'>
                        <Products />
                    </Route>
                </Switch>
            </Box>
        </Fragment>
    )
}

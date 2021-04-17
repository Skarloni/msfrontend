import React, { useState, useEffect } from 'react'

import Grid from '@material-ui/core/Grid'

import StorageCard from './StorageCard'
import { _get, _delete, _post, _patch } from '../utils/requests'

export default function Storages() {
    const [storages, setStorages] = useState([])

    useEffect(() => {
        handleGetStorages()
    }, [])

    const handleGetStorages = () => {
        _get('storages', (response) => {
            setStorages(response.data)
        })
    }

    const handleDeleteStorage = (name) => {
        _delete(`storages/${name}`, () => {
            handleGetStorages()
        })
    }

    const handlePostStorage = (name) => {
        _post('storages', { name: name }, () => {
            handleGetStorages()
        })
    }

    const handlePatchStorage = (name, _name) => {
        _patch(`storages/${name}`, { name: _name }, () => {
            handleGetStorages()
        })
    }

    return (
        <Grid container direction='row' justify='flex-start' spacing={8}>
            <Grid item>
                <StorageCard handlePost={handlePostStorage} />
            </Grid>
            {storages.map((storage) => {
                return (
                    <Grid item key={storage.name}>
                        <StorageCard
                            name={storage.name}
                            handleDelete={handleDeleteStorage}
                            handlePatch={handlePatchStorage}
                        />
                    </Grid>
                )
            })}
        </Grid>
    )
}

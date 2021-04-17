import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import TextField from '@material-ui/core/TextField'

export default function StorageCard(props) {
    const [name, setName] = useState(props.name !== undefined ? props.name : '')

    const handleChange = ({ currentTarget }) => {
        setName(currentTarget.value)
    }

    return (
        <Card>
            <CardContent>
                <TextField
                    label='Наименование'
                    value={name}
                    onChange={handleChange}
                />
            </CardContent>
            <CardActions>
                {props.name !== undefined ? (
                    <ButtonGroup color='primary' variant='contained'>
                        <Button
                            component={Link}
                            to={`/storages/${props.name}/products`}
                        >
                            Товары
                        </Button>
                        <Button
                            onClick={() => props.handlePatch(props.name, name)}
                        >
                            Изменить
                        </Button>
                        <Button onClick={() => props.handleDelete(name)}>
                            Удалить
                        </Button>
                    </ButtonGroup>
                ) : (
                    <Button
                        color='primary'
                        variant='contained'
                        onClick={() => props.handlePost(name)}
                    >
                        Добавить
                    </Button>
                )}
            </CardActions>
        </Card>
    )
}

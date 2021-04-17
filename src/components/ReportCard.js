import React, { useState } from 'react'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import TextField from '@material-ui/core/TextField'

export default function ReportCard(props) {
    const [value, setValue] = useState('')

    return (
        <Card>
            <CardContent>
                <TextField
                    label={props.label}
                    value={value}
                    onChange={({ target }) => setValue(target.value)}
                />
            </CardContent>
            <CardActions>
                <Button
                    color='primary'
                    variant='contained'
                    onClick={() => props.handleDownload(props.id, value)}
                >
                    {props.name}
                </Button>
            </CardActions>
        </Card>
    )
}

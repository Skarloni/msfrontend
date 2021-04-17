import React from 'react'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

export default function DocumentList(props) {
    return (
        <Card>
            <CardHeader title={props.title} />
            <CardActions>
                <input
                    id={props.id}
                    type='file'
                    accept="application/JSON"
                    onChange={props.handleUpload}
                    style={{ display: 'none' }}
                />
                <label htmlFor={props.id}>
                    <Button
                        component='span'
                        color='primary'
                        variant='contained'
                    >
                        Загрузить документ
                    </Button>
                </label>
            </CardActions>
            <CardContent>
                <List>
                    {props.documents.map((document) => {
                        return (
                            <ListItem
                                key={document}
                                button
                                onClick={() =>
                                    props.handleDownload(props.id, document)
                                }
                            >
                                <ListItemText primary={document} />
                            </ListItem>
                        )
                    })}
                </List>
            </CardContent>
        </Card>
    )
}

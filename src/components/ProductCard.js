import React, { useState } from 'react'

import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

export default function ProductCard(props) {
    const [product, setProduct] = useState(
        props.product !== undefined
            ? props.product
            : { code: '', name: '', price: '', sellingPrice: '' }
    )

    const handleChange = ({ target }) => {
        setProduct({
            ...product,
            [target.name]: target.value
        })
    }

    return (
        <Card>
            <CardContent>
                <Grid container direction='column'>
                    <TextField
                        disabled={props.product !== undefined}
                        label='Артикул'
                        name='code'
                        value={product.code}
                        onChange={handleChange}
                    />
                    <TextField
                        label='Наименование'
                        name='name'
                        value={product.name}
                        onChange={handleChange}
                    />
                    <TextField
                        label='Цена последней закупки'
                        name='price'
                        value={product.price}
                        onChange={handleChange}
                    />
                    <TextField
                        label='Цена последней продажи'
                        name='sellingPrice'
                        value={product.sellingPrice}
                        onChange={handleChange}
                    />
                    <TextField
                        disabled
                        label='Кол-во'
                        name='count'
                        value={product.count}
                    />
                </Grid>
            </CardContent>
            <CardActions>
                {props.product !== undefined ? (
                    <ButtonGroup color='primary' variant='contained'>
                        <Button onClick={() => props.handlePatch(product)}>
                            Изменить
                        </Button>
                        <Button
                            onClick={() => props.handleDelete(product.code)}
                        >
                            Удалить
                        </Button>
                    </ButtonGroup>
                ) : (
                    <Button
                        color='primary'
                        variant='contained'
                        onClick={() => props.handlePost(product)}
                    >
                        Добавить
                    </Button>
                )}
            </CardActions>
        </Card>
    )
}

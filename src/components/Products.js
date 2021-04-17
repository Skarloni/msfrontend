import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'

import ProductCard from './ProductCard'
import { _get, _delete, _post, _patch } from '../utils/requests'

export default function Products() {
    const { storageName } = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        handleGetProducts()
        // eslint-disable-next-line
    }, [])

    const handleGetProducts = () => {
        _get(`storages/${storageName}/products`, (response) => {
            setProducts(response.data)
        })
    }

    const handleDeleteProduct = (code) => {
        _delete(`storages/${storageName}/products/${code}`, () => {
            handleGetProducts()
        })
    }

    const handlePostProduct = (product) => {
        _post(`storages/${storageName}/products`, product, () => {
            handleGetProducts()
        })
    }

    const handlePatchProduct = (product) => {
        _patch(
            `storages/${storageName}/products/${product.code}`,
            product,
            () => {
                handleGetProducts()
            }
        )
    }

    return (
        <Grid container direction='row' justify='flex-start' spacing={8}>
            <Grid item>
                <ProductCard handlePost={handlePostProduct} />
            </Grid>
            {products.map((product) => {
                return (
                    <Grid item key={product.code}>
                        <ProductCard
                            product={product}
                            handleDelete={handleDeleteProduct}
                            handlePatch={handlePatchProduct}
                        />
                    </Grid>
                )
            })}
        </Grid>
    )
}

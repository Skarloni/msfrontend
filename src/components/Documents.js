import React, { useState, useEffect } from 'react'

import Grid from '@material-ui/core/Grid'

import DocumentList from './DocumentList'
import { _get, _upload, _download } from '../utils/requests'

export default function Documents() {
    const [receipts, setReceipts] = useState([])
    const [sales, setSales] = useState([])
    const [transfers, setTransfers] = useState([])

    useEffect(() => {
        handleGetDocuments()
    }, [])

    const handleGetDocuments = () => {
        _get('documents/receipt', (response) => {
            setReceipts(response.data)
        })
        _get('documents/sale', (response) => {
            setSales(response.data)
        })
        _get('documents/transfer', (response) => {
            setTransfers(response.data)
        })
    }

    const handleClickUpload = ({ currentTarget }) => {
        _upload(`uploads/${currentTarget.id}`, currentTarget.files[0], () => {
            handleGetDocuments()
        })
    }

    const handleClickDownload = (type, number) => {
        _download(`documents/${type}/${number}`, null, `${type}.json`)
    }

    return (
        <Grid container direction='row' justify='center' spacing={8}>
            <Grid item>
                <DocumentList
                    id='receipt'
                    title='Поступление'
                    documents={receipts}
                    handleUpload={handleClickUpload}
                    handleDownload={handleClickDownload}
                />
            </Grid>
            <Grid item>
                <DocumentList
                    id='sale'
                    title='Продажа'
                    documents={sales}
                    handleUpload={handleClickUpload}
                    handleDownload={handleClickDownload}
                />
            </Grid>
            <Grid item>
                <DocumentList
                    id='transfer'
                    title='Перемещение'
                    documents={transfers}
                    handleUpload={handleClickUpload}
                    handleDownload={handleClickDownload}
                />
            </Grid>
        </Grid>
    )
}

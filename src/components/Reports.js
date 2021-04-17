import React from 'react'

import Grid from '@material-ui/core/Grid'

import { _download } from '../utils/requests'
import ReportCard from './ReportCard'

export default function Reports() {
    const downloadReport = (id, value) => {
        _download(`reports/${id}`, { name: value }, `${id}.json`)
    }

    return (
        <Grid container direction='row' justify='center' spacing={8}>
            <Grid item>
                <ReportCard
                    id='full'
                    name='Общий список товаров'
                    label='Наименование товара'
                    handleDownload={downloadReport}
                />
            </Grid>
            <Grid item>
                <ReportCard
                    id='storage'
                    name='Остатки товаров на складах'
                    label='Наименование склада'
                    handleDownload={downloadReport}
                />
            </Grid>
        </Grid>
    )
}

import { Card, CardContent, Typography } from '@material-ui/core'
import '../css/InfoBox.css'
import React from 'react'

function InfoBox({title, cases, total, isRed, active, ...props}) {
    return (
        <Card className={`infoBox ${active && "infoBox--selected"} ${
            isRed && "infoBox--red"
          }`} onClick={props.onClick}>
            <CardContent>
                <Typography className="infoBox__title" color="textSecondary">{title}</Typography>

                <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>{cases}</h2>

                <Typography className="infoBox__total">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox

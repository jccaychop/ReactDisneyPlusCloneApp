import React from 'react'
import { Spinner } from '../components'

const SpinnerContainer = () => {
    return (
        <Spinner>
            <Spinner.Circle>
                <Spinner.CircleGradient></Spinner.CircleGradient>
                <Spinner.CircleInner></Spinner.CircleInner>
            </Spinner.Circle>
        </Spinner>
    )
}

export default SpinnerContainer

import React, { ReactElement } from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import {
    createHistory,
    LocationProvider,
    createMemorySource,
} from '@gatsbyjs/reach-router'

export default function renderWithRouter(
    ui: ReactElement<any>,
    { route = '/', history = createHistory(createMemorySource(route)) } = {}
) {
    return {
        ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
        // adding `history` to the returned utilities to allow us
        // to reference it in our tests (just try to avoid using
        // this to test implementation details).
        history,
    }
}

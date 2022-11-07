import React from 'react'
import { navigate } from 'gatsby'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'

import GrommetLink from '../GrommetLink'
import renderWithRouter from './__utils__/renderWithRouter'

describe('GrommetLink', () => {
    it('navigates to link on click', async () => {
        renderWithRouter(<GrommetLink to="/about" label="About" />)

        const linkEl = await screen.findByTestId('g-link')
        await userEvent.click(linkEl)

        expect(navigate).toHaveBeenCalledWith('/about')
    })
})
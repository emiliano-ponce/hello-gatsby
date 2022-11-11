import React from 'react'
import { navigate } from 'gatsby'
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import HomeSearch from '../search/HomeSearch'
import renderWithRouter from './__utils__/renderWithRouter'

describe('HomeSearch', () => {
    it('navigates to search on enter with input', async () => {
        renderWithRouter(<HomeSearch />)

        const inputEl = await screen.findByTestId('home-search')
        await userEvent.type(inputEl, "Trek{enter}")

        expect(navigate).toHaveBeenCalledWith('search?q=Trek')
    })
})

import React, { useState } from 'react'
import { navigate } from 'gatsby'

import SearchInput from './SerarchInput'

const HomeSearch = () => {
    const [searchVal, setSearchVal] = useState<string>()

    const handleSearch = () => {
        if (searchVal) navigate(`search?q=${encodeURIComponent(searchVal)}`)
    }

    return (
        <SearchInput
            data-testid="home-search"
            onSubmit={handleSearch}
            ButtonProps={{ disabled: !searchVal }}
            onChange={(e) => setSearchVal(e.target.value)}
        />
    )
}

export default HomeSearch

import React, { FC, ChangeEvent } from 'react'
import { Search } from 'grommet-icons'
import { Box, TextInput, TextInputProps, ButtonExtendedProps } from 'grommet'

import IconButton from '../IconButton'

interface SearchInputProps extends TextInputProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onSubmit?: () => void
    ButtonProps?: ButtonExtendedProps
}

const SearchInput: FC<SearchInputProps> = ({
    onChange,
    onSubmit,
    ButtonProps,
    ...rest
}) => {
    return (
        <Box direction="row" align="center">
            <Box style={{ flex: 1, marginRight: 8 }}>
                <TextInput
                    onChange={onChange}
                    placeholder="Search for movies..."
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') onSubmit && onSubmit()
                    }}
                    {...rest}
                />
            </Box>
            {onSubmit && (
                <IconButton
                    primary
                    hoverIndicator
                    icon={<Search />}
                    onClick={onSubmit}
                    {...ButtonProps}
                />
            )}
        </Box>
    )
}

export default SearchInput

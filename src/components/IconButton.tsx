import React, { FC } from 'react'
import styled from 'styled-components'
import { Button, ButtonExtendedProps } from "grommet"

const StyledButton = styled(Button)`
    ${({ theme }) => `
            border-radius: 50%;
        `}
`
interface IconButtonProps extends ButtonExtendedProps {
    icon: JSX.Element
}

const IconButton: FC<IconButtonProps> = ({ icon, ...rest }) => {
    return <StyledButton {...{ icon, ...rest }} />
}

export default IconButton
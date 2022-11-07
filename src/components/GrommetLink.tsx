import React, { FC } from 'react'
import { navigate } from 'gatsby'
import { Anchor, AnchorProps } from 'grommet'

interface GrommetLinkProps extends AnchorProps {
    to: string
}

const GrommetLink: FC<GrommetLinkProps> = ({ to, ...rest }) => (
    <Anchor
        data-testid='g-link'
        onClick={(ev) => {
            navigate(to)
            ev.preventDefault()
        }}
        {...rest}
    />
)

export default GrommetLink

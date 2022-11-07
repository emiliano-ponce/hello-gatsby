import { useContext } from "react"
import { ResponsiveContext } from 'grommet'

const useIsMobile = () => {
    const size = useContext(ResponsiveContext)
    return size === 'small'
}

export default useIsMobile
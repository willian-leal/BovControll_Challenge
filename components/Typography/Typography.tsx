import { Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const TextTypography = ({ children }) => {
  const theme = useTheme()
  return (
    <Typography
      variant="body1"
      component="p"
      sx={{
        fontWeight: 'bold',
        color: '#313131',
        mb: theme.spacing(5),
        userSelect: 'none'
      }}
    >
      {children}
    </Typography>
  )
}

export default TextTypography

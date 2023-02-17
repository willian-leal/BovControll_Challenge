import { Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const SectionTitle = ({ children }) => {
  const theme = useTheme()
  return (
    <Typography
      variant="h4"
      component="h1"
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

export default SectionTitle

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Icon } from '@iconify/react';

interface TopbarLeftProps {
    isClosing: boolean;
    mobileOpen: boolean;
    setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopbarLeft = ({isClosing, mobileOpen, setMobileOpen}: TopbarLeftProps) => {
    const handleDrawerToggle = () => {
        if (!isClosing) {
          setMobileOpen(!mobileOpen);
        }
    };

    return (
        <Box sx={{display: 'flex', alignItems: 'center', gap: '0.6rem'}}>
            
            {/* sidbar toggle btn */}
            <Toolbar sx={{display: { lg: 'none' }}}>
                <IconButton size="medium" edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle} sx={{ m: 0 }}>
                    <Icon icon={'ion:menu'}/>
                </IconButton>
            </Toolbar>

            {/* search button */}
            <IconButton size="medium" edge="start" color="inherit" sx={{display: { xs: 'flex', md: 'none' }}}>
                <Icon icon={'ion:search'}/>
            </IconButton>

            {/* search bar */}
            <TextField
                variant="filled"
                placeholder="Type here..."
                sx={{display: {xs: 'none', md: 'block'}}}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <IconButton>
                                <Icon icon='ion:search'/>
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
}

export default TopbarLeft;
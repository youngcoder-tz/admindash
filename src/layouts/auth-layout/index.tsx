import { PropsWithChildren } from 'react';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import LogoImg from 'assets/images/Logo.png';
import Image from 'components/base/Image';

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <Stack component="main" direction="column" p={{ xs: 1, md: 3.5 }} width={1} minHeight="100vh">
      <Stack width={1}>
        <ButtonBase component={Link} href="/" disableRipple>
          <Image src={LogoImg} alt="logo" height={24} width={24} sx={{ mr: 1 }} />
          <Typography variant="h5" color="text.primary" fontWeight={600} letterSpacing={1}>
            Admin MS
          </Typography>
        </ButtonBase>
      </Stack>
      <Stack my="auto" py={5} alignItems="center" justifyContent="center">
        <Paper sx={{ py: 4, width: 1, maxWidth: 450 }}>{children}</Paper>
      </Stack>
    </Stack>
  );
};

export default AuthLayout;

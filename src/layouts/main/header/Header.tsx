// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Link, Stack, Button, AppBar, Toolbar, Container } from '@mui/material';
// hooks
import useOffSetTop from '@/hooks/useOffSetTop';
import useResponsive from '@/hooks/useResponsive';
// utils
import { bgBlur } from '@/utils/cssStyles';
// routes
import { paths } from '@/routes/paths';
// config
import { HEADER } from '@/config-global';
// components
import Logo from '@/components/common/logo';
import Label from '@/components/common/Label';
import SettingsDrawer from '@/settings/drawer';
//
import { NavMobile, NavDesktop, navConfig } from '../nav';
import Searchbar from '@/layouts/main/components/Searchbar';
import HeaderShadow from '@/layouts/main/components/HeaderShadow';

// ----------------------------------------------------------------------

type Props = {
    headerOnDark: boolean;
};

export default function Header({ headerOnDark }: Props) {
    const theme = useTheme();

    const isMdUp = useResponsive('up', 'md');

    const isOffset = useOffSetTop();

    return (
        <AppBar color="transparent" sx={{ boxShadow: 'none' }}>
            <Toolbar
                disableGutters
                sx={{
                    height: {
                        xs: HEADER.H_MOBILE,
                        md: HEADER.H_MAIN_DESKTOP,
                    },
                    transition: theme.transitions.create(['height', 'background-color'], {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.shorter,
                    }),
                    ...(headerOnDark && {
                        color: 'common.white',
                    }),
                    ...(isOffset && {
                        ...bgBlur({ color: theme.palette.background.default }),
                        color: 'text.primary',
                        height: {
                            md: HEADER.H_MAIN_DESKTOP - 16,
                        },
                    }),
                }}
            >
                <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ lineHeight: 0, position: 'relative' }}>
                        <Logo />

                        <Link href="https://zone-docs.vercel.app/changelog" target="_blank" rel="noopener">
                            <Label
                                color="info"
                                sx={{
                                    ml: 0.5,
                                    px: 0.5,
                                    top: -14,
                                    left: 60,
                                    height: 20,
                                    fontSize: 11,
                                    cursor: 'pointer',
                                    position: 'absolute',
                                }}
                            >
                                v2.0
                            </Label>
                        </Link>
                    </Box>

                    {isMdUp && <NavDesktop data={navConfig} />}

                    <Stack
                        spacing={2}
                        flexGrow={1}
                        direction="row"
                        alignItems="center"
                        justifyContent="flex-end"
                    >
                        <Stack spacing={1} direction="row" alignItems="center">
                            <Searchbar />


                        </Stack>

                        {isMdUp && (
                            <Button
                                variant="contained"
                                color="inherit"
                                href={paths.zoneStore}
                                target="_blank"
                                rel="noopener"
                            >
                                Contact Us
                            </Button>
                        )}
                    </Stack>

                    {!isMdUp && <NavMobile data={navConfig} />}
                </Container>
            </Toolbar>

            {isOffset && <HeaderShadow />}
        </AppBar>
    );
}
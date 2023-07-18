// @mui
import { Stack, Typography, Avatar, IconButton } from '@mui/material';
// types
import { IAuthorProps } from '@/types/author';
// _mock
import { _socials } from '@/_mock';
// components
import Iconify from '@/components/common/Iconify';
import Gravatar from "@/components/common/gravatar/Gravatar";

// ----------------------------------------------------------------------

type Props = {
    author: IAuthorProps;
};

export default function PostAuthor({ author }: Props) {
    // @ts-ignore
    const { name, role, about, quotes, picture, email } = author;

    return (
        <Stack
            direction="row"
            spacing={{ xs: 3, md: 4 }}
            sx={{
                py: { xs: 5, md: 10 },
            }}
        >
            <Gravatar email={email} size={96} />

            <Stack spacing={2}>
                <Stack
                    spacing={2}
                    alignItems={{ md: 'center' }}
                    direction={{ xs: 'column', md: 'row' }}
                    justifyContent={{ md: 'space-between' }}
                >
                    <Stack spacing={0.5}>
                        <Typography variant="h5">{name}</Typography>

                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Founder, Digital Marketing Specialist & Software Engineer
                        </Typography>
                    </Stack>

                    <Stack direction="row">
                        {_socials.map((social) => (
                            <IconButton key={social.value}>
                                <Iconify icon={social.icon} sx={{ color: social.color }} />
                            </IconButton>
                        ))}
                    </Stack>
                </Stack>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    A seasoned Digital Marketing Expert and Software Engineer, I bring a potent blend of technical skills and marketing acumen to the table. With over 15 years of experience in the digital ad tech landscape, I have honed my ability to design and develop robust high converting websites and apps that integrate seamlessly with the latest advertising platforms.
                </Typography>

                <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                    {quotes}
                </Typography>
            </Stack>
        </Stack>
    );
}
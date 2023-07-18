// @mui
import { Chip, Stack, Typography } from '@mui/material';
//
import { IBlogTagsProps } from '@/types/blog';

// ----------------------------------------------------------------------
type tagData = {
    id: string,
    name: string,
}
type Props = {
    tags: tagData[];
};

export default function PostTags({ tags }: Props) {
    return (
        <Stack direction="row" alignItems="center" flexWrap="wrap" sx={{ mt: 5 }}>
            <Typography variant="subtitle2" sx={{ mr: 1 }}>
                Tags:
            </Typography>

            {tags.map((tag) => (
                <Chip key={tag.name} size="small" label={tag.name} sx={{ m: 0.5 }} onClick={() => {}} />
            ))}
        </Stack>
    );
}
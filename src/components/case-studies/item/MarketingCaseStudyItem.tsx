// next
import NextLink from 'next/link';
// @mui
import { Stack, Typography, Link } from '@mui/material';
// routes
import { paths } from '@/routes/paths';
// types
import {SingleCaseStudy} from "@/types/my-types/case-studies";
// components
import Image from '@/components/common/Image';
import TextMaxLine from '@/components/common/text-max-line';

// ----------------------------------------------------------------------

type Props = {
  project: SingleCaseStudy;
};

export default function MarketingCaseStudyItem({ project }: Props) {
  const { clientName, featuredImage:{url}, category, urlSlug } = project;
  const urlPath = `/case-studies/${urlSlug}`

  return (
    <div>
      <Image src={url} alt={clientName} ratio="1/1" sx={{ borderRadius: 2 }} />

      <Stack spacing={1} sx={{ pt: 2.5, px: 2.5 }}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          {category.name}
        </Typography>

        <Link component={NextLink} href={urlPath} color="inherit">
          <TextMaxLine variant="h5" line={1}>
            {clientName}
          </TextMaxLine>
        </Link>
      </Stack>
    </div>
  );
}

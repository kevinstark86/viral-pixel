// @mui
import { Typography, Divider, Stack, IconButton, Link } from '@mui/material';
// utils
import { fDate } from '@/utils/formatTime';
// types
import { ICaseStudyProps } from '@/types/case-study';
// _mock
import { _socials } from '@/_mock';
// components
import Iconify from '@/components/common/Iconify';
import {CaseStudies} from "@/types/my-types/case-studies";

// ----------------------------------------------------------------------

type Props = {
  caseStudy: CaseStudies;
};

export default function MarketingCaseStudyDetailsSummary({ caseStudy }: Props) {
  const { clientName, clientSummary, category, clientWebsite, createdAt } = caseStudy.docs[0];

  return (
    <Stack spacing={3} sx={{ p: 5, borderRadius: 2, bgcolor: 'background.neutral' }}>
      <Stack spacing={2}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          summary
        </Typography>

        <Typography variant="h6">{clientName}</Typography>

        <Typography variant="body2">{clientSummary}</Typography>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack spacing={1}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Website
        </Typography>

        <Link variant="body2" color="inherit">
          {clientWebsite}
        </Link>

        <Typography variant="overline" sx={{ color: 'text.disabled', pt: 1 }}>
          Category
        </Typography>

        <Typography variant="body2" sx={{ pb: 1 }}>
          {category.name}
        </Typography>

        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Date
        </Typography>

        <Typography variant="body2">{fDate(createdAt)}</Typography>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack direction="row" alignItems="center" spacing={0.5}>
        <Typography variant="subtitle2">Share:</Typography>

        <Stack direction="row">
          {_socials.map((social) => (
            <IconButton key={social.value}>
              <Iconify icon={social.icon} sx={{ color: social.color }} />
            </IconButton>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}

// @mui
import { Container, Typography, Stack } from '@mui/material';
// _mock
import { _caseStudies, _blogMarketingPosts, _testimonials } from '@/_mock';
//
import LatestPosts from "@/components/blog/latest-posts/LatestPosts";
import HomeTestimonial from "@/components/homepage-components/HomeTestimonial/HomeTestimonial";
import { MarketingCaseStudyList } from './list';

// ----------------------------------------------------------------------

export default function CaseStudiesView() {
    return (
        <>
            <Container>
                <Stack
                    spacing={3}
                    sx={{
                        py: 5,
                        textAlign: { xs: 'center', md: 'left' },
                    }}
                >
                    <Typography variant="h2">Our Case Studies</Typography>

                    <Typography sx={{ color: 'text.secondary' }}>
                        Nullam tincidunt adipiscing enim.
                        <br /> Mauris sollicitudin fermentum libero.
                    </Typography>
                </Stack>

                <MarketingCaseStudyList caseStudies={_caseStudies} />
            </Container>

            <HomeTestimonial testimonials={_testimonials} />

            <LatestPosts/>

        </>
    );
}
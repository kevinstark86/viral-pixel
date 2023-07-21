import type {InferGetStaticPropsType, GetStaticProps, GetStaticPaths} from "next";
// @mui
import { Container, Unstable_Grid2 as Grid } from '@mui/material';

// _mock
import { _caseStudies, _testimonials } from '@/_mock';
// components
import Image from '@/components/common/Image';
import CustomBreadcrumbs from '@/components/common/custom-breadcrumbs';
//

import HomeTestimonial from "@/components/homepage-components/HomeTestimonial/HomeTestimonial";
import { MarketingCaseStudyListSimilar } from '@/components/case-studies/list';
import {
    MarketingCaseStudyDetailsSummary,
    MarketingCaseStudyDetailsGallery,
} from '@/components/case-studies/details';
import {CaseStudies} from "@/types/my-types/case-studies";
import TextParser from "@/utils/text-parser/TextParser";
// ----------------------------------------------------------------------

const _mockCaseStudy = _caseStudies[0];


export default function CaseStudy(props: CaseStudies) {
    const {featuredImage:{url}, content, gallery, clientName} = props.docs[0]
    return (
        <>
            <Container
                sx={{
                    overflow: 'hidden',
                    pt: 5,
                    pb: { xs: 10, md: 15 },
                }}
            >
                <Image alt="hero" src={url} ratio="16/9" sx={{ borderRadius: 2 }} />

                <CustomBreadcrumbs
                    sx={{ my: 5 }}
                    links={[
                        { name: 'Home', href: '/' },
                        { name: 'Case Studies', href: '/case-studies' },
                        { name: clientName },
                    ]}
                />

                <Grid container spacing={{ xs: 5, md: 8 }} direction={{ md: 'row-reverse' }}>
                    <Grid xs={12} md={4}>
                        <MarketingCaseStudyDetailsSummary caseStudy={props} />
                    </Grid>

                    <Grid xs={12} md={8}>
                        <TextParser content={content}/>
                        <MarketingCaseStudyDetailsGallery images={gallery} />
                    </Grid>
                </Grid>
            </Container>

            <HomeTestimonial testimonials={_testimonials} />



        </>
    );
}
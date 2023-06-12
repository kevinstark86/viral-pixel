import MainLayout from "@/layouts/main/MainLayout";
import CaseStudiesView from "@/components/case-studies/CaseStudies";

CaseStudies.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

export default function CaseStudies() {
    return (
        <>
            <CaseStudiesView/>
        </>
    )
}
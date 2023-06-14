import CaseStudy from "@/components/case-study/CaseStudy";
import MainLayout from "@/layouts/main";

SingleCaseStudy.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

export default function SingleCaseStudy() {
    return (
        <>
            <CaseStudy/>
        </>
    )
}
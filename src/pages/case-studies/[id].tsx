import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {CaseStudies} from "@/types/my-types/case-studies";
import CaseStudy from "@/components/case-study/CaseStudy";
import MainLayout from "@/layouts/main";



SingleCaseStudy.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

export const getServerSideProps: GetServerSideProps<{data: CaseStudies}> = async (context) => {
    const {id} = context.params as {id: string}
    const res = await fetch(`https://payload-cms-test-production.up.railway.app/api/case-studies?where[urlSlug][equals]=${id}`)
    const data = await res.json();
    return {props: {data}}
}

export default function SingleCaseStudy({data}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    console.log('here is the data', data.docs)
    return (
        <>
            <h1>hello</h1>
        </>
    )
}
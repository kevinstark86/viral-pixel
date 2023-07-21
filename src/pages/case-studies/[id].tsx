import {GetStaticProps, GetStaticPaths, InferGetStaticPropsType} from "next";
import {CaseStudies, SingleCaseStudy} from "@/types/my-types/case-studies";
import CaseStudy from "@/components/case-study/CaseStudy";
import MainLayout from "@/layouts/main";



SingleCaseStudy.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('https://payload-cms-test-production.up.railway.app/api/case-studies')
    const data = await res.json();
    const paths = data.docs.map((item: SingleCaseStudy) => ({params: {id: item.urlSlug}}))
    return {paths, fallback: 'blocking'}
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const res = await fetch(`https://payload-cms-test-production.up.railway.app/api/case-studies?where[urlSlug][equals]=${params?.id}`)
    const data = await res.json()
    return {props: data}
}

export default function SingleCaseStudy(data: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            {/* @ts-ignore */}
            <CaseStudy {...data}/>
        </>
    )
}
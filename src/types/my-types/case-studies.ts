type Images = {
    url: string,
}

export type GalleryImg = {
    image: Images,
}

type CsCategory = {
    id: string,
    name: string,
}

type Author = {
    id: string,
    name: string,
    email: string,
}

type FeaturedImage = {
    url: string,
}

export type SingleCaseStudy = {
    id: string,
    clientName: string,
    clientWebsite: string,
    gallery: GalleryImg[],
    featuredImage: FeaturedImage,
    clientSummary: string,
    category: CsCategory,
    projectDate: string,
    content: [],
    createdAt: string,
    author: Author,
    urlSlug: string,

}


export type CaseStudies = {
    docs: SingleCaseStudy[]
}
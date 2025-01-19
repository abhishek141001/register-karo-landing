import { Button } from "../button"
import EachBlog from "./eachBlog"
export default function BlogSection() {

    const blogs = [
        {
            img: 'https://s3-alpha-sig.figma.com/img/29a7/5c7f/e7dda523e77516da100b1a88dbaecb3c?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eJkDOryZoKFG26JuOvVKMdo59EHbML3gtspX3autEu6jqqu5UUfgLg6Gqjx5EVO6Axwr2-CRavcYncjkDwaTGYLhBWk3bGwQFri1LUbGSETD7ofSfxEI1XcR0YGe9LAC7pcy-MfxfypSF0P8HVsje-38ka-qF9xjXVihFrfTFPBSpzThKiIsji8EDi8Z4auQX6l-YcK8RruXFJpsuoY1NGDDXQq0tVz0IdkeLscUtzvb-1t9GcN1VclH7WV-9cH8VWaB9CXVeruKoPjcprPr9RwEIfhVOJTOywzynKfxEHTpfF6TbeRvq1fiWzmR9PXxmjUF8MIzuFVaNxsooaXCkQ__',
            title: 'Small business & Startup ',
            date: '1 jan 2023',
            author: 'By John Doe',
            discription: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
            url:'https://www.registerkaro.in/post/the-companies-act-2013-section-138-internal-audit',
            tags:['Business', 'Startup']    
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/29a7/5c7f/e7dda523e77516da100b1a88dbaecb3c?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eJkDOryZoKFG26JuOvVKMdo59EHbML3gtspX3autEu6jqqu5UUfgLg6Gqjx5EVO6Axwr2-CRavcYncjkDwaTGYLhBWk3bGwQFri1LUbGSETD7ofSfxEI1XcR0YGe9LAC7pcy-MfxfypSF0P8HVsje-38ka-qF9xjXVihFrfTFPBSpzThKiIsji8EDi8Z4auQX6l-YcK8RruXFJpsuoY1NGDDXQq0tVz0IdkeLscUtzvb-1t9GcN1VclH7WV-9cH8VWaB9CXVeruKoPjcprPr9RwEIfhVOJTOywzynKfxEHTpfF6TbeRvq1fiWzmR9PXxmjUF8MIzuFVaNxsooaXCkQ__',
            title: 'Small business & Startup ',
            date: '1 jan 2023',
            author: 'By John Doe',
            discription: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
            url:'https://www.registerkaro.in/post/the-companies-act-2013-section-138-internal-audit',
            tags:['Business', 'Startup']    
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/29a7/5c7f/e7dda523e77516da100b1a88dbaecb3c?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eJkDOryZoKFG26JuOvVKMdo59EHbML3gtspX3autEu6jqqu5UUfgLg6Gqjx5EVO6Axwr2-CRavcYncjkDwaTGYLhBWk3bGwQFri1LUbGSETD7ofSfxEI1XcR0YGe9LAC7pcy-MfxfypSF0P8HVsje-38ka-qF9xjXVihFrfTFPBSpzThKiIsji8EDi8Z4auQX6l-YcK8RruXFJpsuoY1NGDDXQq0tVz0IdkeLscUtzvb-1t9GcN1VclH7WV-9cH8VWaB9CXVeruKoPjcprPr9RwEIfhVOJTOywzynKfxEHTpfF6TbeRvq1fiWzmR9PXxmjUF8MIzuFVaNxsooaXCkQ__',
            title: 'Small business & Startup ',
            date: '1 jan 2023',
            author: 'By John Doe',
            discription: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
            url:'https://www.registerkaro.in/post/the-companies-act-2013-section-138-internal-audit',
            tags:['Business', 'Startup']    
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/29a7/5c7f/e7dda523e77516da100b1a88dbaecb3c?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eJkDOryZoKFG26JuOvVKMdo59EHbML3gtspX3autEu6jqqu5UUfgLg6Gqjx5EVO6Axwr2-CRavcYncjkDwaTGYLhBWk3bGwQFri1LUbGSETD7ofSfxEI1XcR0YGe9LAC7pcy-MfxfypSF0P8HVsje-38ka-qF9xjXVihFrfTFPBSpzThKiIsji8EDi8Z4auQX6l-YcK8RruXFJpsuoY1NGDDXQq0tVz0IdkeLscUtzvb-1t9GcN1VclH7WV-9cH8VWaB9CXVeruKoPjcprPr9RwEIfhVOJTOywzynKfxEHTpfF6TbeRvq1fiWzmR9PXxmjUF8MIzuFVaNxsooaXCkQ__',
            title: 'Small business & Startup ',
            date: '1 jan 2023',
            author: 'By John Doe',
            discription: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
            url:'https://www.registerkaro.in/post/the-companies-act-2013-section-138-internal-audit',
            tags:['Business', 'Startup']    
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/29a7/5c7f/e7dda523e77516da100b1a88dbaecb3c?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eJkDOryZoKFG26JuOvVKMdo59EHbML3gtspX3autEu6jqqu5UUfgLg6Gqjx5EVO6Axwr2-CRavcYncjkDwaTGYLhBWk3bGwQFri1LUbGSETD7ofSfxEI1XcR0YGe9LAC7pcy-MfxfypSF0P8HVsje-38ka-qF9xjXVihFrfTFPBSpzThKiIsji8EDi8Z4auQX6l-YcK8RruXFJpsuoY1NGDDXQq0tVz0IdkeLscUtzvb-1t9GcN1VclH7WV-9cH8VWaB9CXVeruKoPjcprPr9RwEIfhVOJTOywzynKfxEHTpfF6TbeRvq1fiWzmR9PXxmjUF8MIzuFVaNxsooaXCkQ__',
            title: 'Small business & Startup ',
            date: '1 jan 2023',
            author: 'By John Doe',
            discription: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
            url:'https://www.registerkaro.in/post/the-companies-act-2013-section-138-internal-audit',
            tags:['Business', 'Startup']    
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/29a7/5c7f/e7dda523e77516da100b1a88dbaecb3c?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eJkDOryZoKFG26JuOvVKMdo59EHbML3gtspX3autEu6jqqu5UUfgLg6Gqjx5EVO6Axwr2-CRavcYncjkDwaTGYLhBWk3bGwQFri1LUbGSETD7ofSfxEI1XcR0YGe9LAC7pcy-MfxfypSF0P8HVsje-38ka-qF9xjXVihFrfTFPBSpzThKiIsji8EDi8Z4auQX6l-YcK8RruXFJpsuoY1NGDDXQq0tVz0IdkeLscUtzvb-1t9GcN1VclH7WV-9cH8VWaB9CXVeruKoPjcprPr9RwEIfhVOJTOywzynKfxEHTpfF6TbeRvq1fiWzmR9PXxmjUF8MIzuFVaNxsooaXCkQ__',
            title: 'Small business & Startup ',
            date: '1 jan 2023',
            author: 'By John Doe',
            discription: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
            url:'https://www.registerkaro.in/post/the-companies-act-2013-section-138-internal-audit',
            tags:['Business', 'Startup']    
        },
        
    ]





    return(
        <div className="p-6 xl:p-12 flex flex-col items-center gap-6">
            <span className="text-sm font-normal text-[#EB8D15]">EXPLORE OUR BLOGS</span>
            <h2 className="text-[32px]  text-[#272D37] font-bold ">Accelerate Digital Transformation</h2>

            <div className="flex flex-wrap  items-center justify-center ">
                {blogs.map((blog, index)=>(
                    <EachBlog key={index} {...blog}/>
                ))}
            </div>
            <Button className='bg-[#1C4670] text-base font-medium px-6 py-6'>Show more blogs</Button>

        </div>
    )
}
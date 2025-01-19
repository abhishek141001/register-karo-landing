import { Badge } from "../badge"

export default function EachBlog({ img, title, date, discription, author, url, tags }) {
    return (
        <div className="flex flex-col items-start  gap-4 m-8">
            <img src={img} alt="blog" className="w-[380px] h-[200px] object-cover rounded-md" />
            <span>{author} • {date}</span>
            <a href={url} className="text-[#1A1A1A] font-bold text-[24px]">{title}</a>
            <p className="max-w-[380px]">{discription}</p>
            <div className="flex items-center justify-start gap-4">
                {tags.map((tag, index) => {
                    // Define color class options
                    const colors = [
                        "text-red-500 bg-red-100",
                        "text-blue-500 bg-blue-100",
                        "text-green-500 bg-green-100",
                        "text-yellow-500 bg-yellow-100",
                        "text-purple-500 bg-purple-100",
                    ];

                    // Randomly select a color
                    const randomColor = colors[Math.floor(Math.random() * colors.length)];

                    return (
                        <Badge className={`${randomColor} px-3 py-1 rounded-lg`} key={index}>
                            {tag}
                        </Badge>
                    );
                })}
            </div>

        </div>
    )
}
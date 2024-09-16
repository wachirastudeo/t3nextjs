import Link from "next/link";
import { Article } from "../types";

export type ArticleItemProps =Article
const ArticleItem = ({title,slug}:ArticleItemProps) => {
    return ( <Link href={`/articles/${slug}`}>{title}</Link> );
}
 
export default ArticleItem;
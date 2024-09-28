import ArticleItem from "@/components/article-item";
import { getArticleRecommand } from "@/service/article";
import { IArticleDetail } from "@/types/article";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Page() {
  const [articles, setArticles] = useState<IArticleDetail[]>([]);
  const handleGetArticleRecommand = async () => {
    try {
      const res = await getArticleRecommand();
      setArticles(res.data.data.articles);
    } catch (error) {
      toast.error(String(error));
    }
  };
  useEffect(() => {
    handleGetArticleRecommand();
  }, []);
  if (!articles.length) return null;
  return (
    <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 ">
      {articles.map((article) => {
        return <ArticleItem article={article} />;
      })}
    </div>
  );
}

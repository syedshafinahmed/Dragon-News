import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [categoryNews, setCategoryNews] = useState([]);
  useEffect(() => {
    if (id == '0') {
      setCategoryNews(data);
      return;
    }
    else if (id == '1') {
      const filteredNews = data.filter(news => news.others.is_today_pick == true);
      setCategoryNews(filteredNews);
      return;
    }
    else {
      const filteredNews = data.filter(news => news.category_id == id);
      console.log(filteredNews);
      setCategoryNews(filteredNews);
    }

  }, [data, id]);
  return (
    <div>
      Total {categoryNews.length} news found
    </div>
  );
};

export default CategoryNews;
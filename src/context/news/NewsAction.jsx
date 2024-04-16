export const fetchNews = async(topic) => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?${topic}=us&category=business&apiKey=d2d16719838443a1a95fc2ca88f5fc26`)
    const data = await response.json();
    return data.articles;
}

// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d2d16719838443a1a95fc2ca88f5fc26
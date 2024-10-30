import { useState } from 'react';
export default function RecentArticles() {
    const [modalArticle, setModalArticle] = useState(null);

    const articles = [
        {
            id: 1,
            date: 'Apr 12, 2024',
            title: 'The Future of AI',
            content: 'Artificial Intelligence is rapidly evolving, changing the way we live and work...',
            uploadedBy: 'TechInsider',
            fullContent: 'Artificial Intelligence is rapidly evolving, changing the way we live and work...'
        },
        {
            id: 2,
            date: 'Apr 13, 2024',
            title: 'Sustainable Living Tips',
            content: 'Small changes in our daily lives can have a big impact on the environment...',
            uploadedBy: 'EcoWarrior',
            fullContent: 'Small changes in our daily lives can have a big impact on the environment...'
        },
        {
            id: 3,
            date: 'Apr 14, 2024',
            title: 'The Art of Mindfulness',
            content: 'In our fast-paced world, practicing mindfulness can greatly improve mental health...',
            uploadedBy: 'ZenMaster',
            fullContent: 'In our fast-paced world, practicing mindfulness can greatly improve mental health...'
        }
    ];

    const openArticle = (article) => setModalArticle(article);
    const closeModal = () => setModalArticle(null);

    return (
        <div className="ra-body">
            <div className="ra-container">
                <h1 className="ra-title">Recent Articles</h1>
                <div className="ra-articles-grid">
                    {articles.map((article) => (
                        <ArticleCard key={article.id} article={article} openArticle={openArticle} />
                    ))}
                </div>
            </div>
            {modalArticle && <ArticleModal article={modalArticle} closeModal={closeModal} />}
        </div>
    );
}

function ArticleCard({ article, openArticle }) {
    return (
        <div className="ra-article-card" onClick={() => openArticle(article)}>
            <div className="ra-article-content">
                <div className="ra-article-date">{article.date}</div>
                <h2 className="ra-article-title">{article.title}</h2>
                <p className="ra-article-excerpt">{article.content}</p>
                <div className="ra-article-footer">
                    <div className="ra-uploaded-by">Uploaded by {article.uploadedBy}</div>
                    <button className="ra-read-more-btn" aria-label={`Read more about ${article.title}`}>→</button>
                </div>
            </div>
        </div>
    );
}

function ArticleModal({ article, closeModal }) {
    return (
        <div className="ra-modal" onClick={closeModal}>
            <div className="ra-modal-content" onClick={(e) => e.stopPropagation()}>
                <h2 className="ra-modal-title">{article.title}</h2>
                <p className="ra-modal-meta">{article.date} | Uploaded by {article.uploadedBy}</p>
                <div>{article.fullContent}</div>
                <button className="ra-back-btn" onClick={closeModal}>← Back</button>
            </div>
        </div>
    );
}

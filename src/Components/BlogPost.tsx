// BlogPost.tsx
import React from 'react';

interface BlogPostProps {
    title: string;
    content: string;
    // Добавьте другие необходимые свойства
}

const BlogPost: React.FC<BlogPostProps> = ({ title, content }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            {/* Добавьте другие элементы для отображения дополнительных свойств */}
        </div>
    );
};

export default BlogPost;

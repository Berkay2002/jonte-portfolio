'use client';

import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

// Mapping for project IDs that have different folder names
const PROJECT_FOLDER_MAP = {
  'Portals': 'Portal',
  'TerrainLibrary': 'TerrainLib',
};

export default function ProjectPage({ params }) {
  const [content, setContent] = useState('');
  const { id } = params;

  // Get the actual folder name (handles special cases)
  const folderName = PROJECT_FOLDER_MAP[id] || id;

  useEffect(() => {
    fetch(`/projects/${folderName}/README.md`)
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
      })
      .then((text) => setContent(text))
      .catch((error) => setContent('# Error\nCould not load README.'));
  }, [folderName]);

  return (
    <>
      <a href="/" className="back-to-home-btn">&#8592; Back to Home</a>
      <div className="markdown-content">
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: ({node, ...props}) => <h1 className="markdown-h1" {...props} />,
            h2: ({node, ...props}) => <h2 className="markdown-h2" {...props} />,
            h3: ({node, ...props}) => <h3 className="markdown-h3" {...props} />,
            p: ({node, ...props}) => <p className="markdown-p" {...props} />,
            ul: ({node, ...props}) => <ul className="markdown-ul" {...props} />,
            li: ({node, ...props}) => <li className="markdown-li" {...props} />,
            a: ({node, ...props}) => <a className="markdown-a" {...props} />,
            img: ({node, ...props}) => <img className="markdown-img" {...props} />,
            video: ({node, ...props}) => <video className="markdown-video" controls {...props} />,
            code: ({node, ...props}) => <code className="markdown-code" {...props} />,
            blockquote: ({node, ...props}) => <blockquote className="markdown-blockquote" {...props} />,
          }}
        />
      </div>
    </>
  );
}

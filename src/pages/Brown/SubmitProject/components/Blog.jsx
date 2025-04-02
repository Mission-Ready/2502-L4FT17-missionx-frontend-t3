// import React from 'react';
//
// const Blog = () => {
//   const posts = [
//     { id: 1, title: "初めてのブログ投稿", content: "これはテスト用のブログ投稿です。" },
//     { id: 2, title: "Reactの使い方", content: "Reactの基本的な使い方を紹介します。" },
//     { id: 3, title: "フロントエンド開発", content: "フロントエンド開発のトレンドについて。" },
//   ];
//
//   return (
//     <div>
//       <h2>Blog Posts</h2>
//       {posts.map((post) => (
//         <div key={post.id}>
//           <h3>{post.title}</h3>
//           <p>{post.content}</p>
//         </div>
//       ))}
//     </div>
//   );
// };
//
// export default Blog;
const Blog = () => {
  return (
    <div>
      <h2>Blog Component</h2>
      <p>This is the Blog page.</p>
    </div>
  );
};

export default Blog;

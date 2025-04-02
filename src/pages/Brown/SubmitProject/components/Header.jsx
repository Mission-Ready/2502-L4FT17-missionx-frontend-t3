import React from 'react';

const Header = () => {
  const links = [
    { id: 1, name: "ホーム", url: "/" },
    { id: 2, name: "お問い合わせ", url: "/contact" },
    { id: 3, name: "ブログ", url: "/blog" },
  ];

  return (
    <header>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;


# PS1 - Blogify

Blogify is a simple React blog reader application built using React and React Router.

## Project Description

Blogify allows users to browse blog posts, search posts by title, open an individual post, and read its comments.

## Technologies Used

- React
- React Router
- JavaScript
- CSS
- JSONPlaceholder API

## API Used

JSONPlaceholder:

https://jsonplaceholder.typicode.com/posts

The application uses the API to fetch:

- Blog posts
- Individual post details
- Comments for each post

## Routes

| Route | Description |
|---|---|
| `/` | Home page |
| `/posts` | Displays all blog posts |
| `/posts/:id` | Displays a single post and its comments |
| `*` | Page Not Found |

## Features

- View all blog posts
- Search posts by title
- View individual posts
- View comments
- Loading state while fetching data
- Error handling
- Navigation using React Router
- 404 Page Not Found
- Reusable PostCard component
- Reusable CommentCard component

## How to Run

Clone the repository and install the dependencies:

```bash
npm install
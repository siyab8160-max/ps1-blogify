# PS1 - Blogify

Blogify is a simple React blog reader application built using React and React Router.

## Project Description

Blogify allows users to browse blog posts, search posts by title, open an individual post, and read its comments.

## 🚀 Live Demo

https://ps1-blogify.vercel.app/

## 📸 Screenshots

### Home Page

<img width="1470" height="956" alt="Screenshot 2026-10-18 at 7 57 57 AM" src="https://github.com/user-attachments/assets/0f9f87ee-34ab-473e-a249-4f7fdb983983" />


### Posts Page

<img width="1470" height="956" alt="Screenshot 2026-10-18 at 7 58 06 AM" src="https://github.com/user-attachments/assets/bd8fab36-27d8-4305-94a2-b15ccab85c3b" />


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

# URL Shortener App

## Overview
The URL Shortener App is a simple web application that allows users to create shortened URLs for long web addresses. This project provides an API for creating shortened URLs and redirecting users to the original URLs.

## Available APIs
- [1. Create Shortened URL](#1-create-shortened-url)
- [2. Redirect to Original URL](#2-redirect-to-original-url)

---


## Screenshots
![Homepage Page Screenshot](public/images/home_page.png)
![URL Page Screenshot](public/images/url.png)
![Result Page Screenshot](public/images/shortened_result.png)



## API Documentation

### 1. Create Shortened URL
- **Endpoint:** `POST http://localhost:4000/shortener`
- **Description:** This API creates a shortened URL for the provided original URL.
- **Request Body:**
    ```json
    {
        "originalUrl": "https://www.google.com/search?q=images&rlz=1C1CHBF_enIN1049IN1049&oq=images&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAtIBBzY5NGowajeoAgiwAgE&sourceid=chrome&ie=UTF-8",
        "shortUrl": "google images"
    }
    ```
- **Expected Response:**
    ```json
    {
        "success": true,
        "message": "Shortened URL created successfully",
        "shortenedUrl": "http://localhost:4000/google_images"
    }
    ```
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:4000/shortener' \
    --header 'Content-Type: application/json' \
    --data '{
        "originalUrl": "https://www.google.com/search?q=images&rlz=1C1CHBF_enIN1049IN1049&oq=images&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAtIBBzY5NGowajeoAgiwAgE&sourceid=chrome&ie=UTF-8",
        "shortUrl": "google images"
    }'
    ```

### 2. Redirect to Original URL
- **Endpoint:** `GET http://localhost:4000/google_images`
- **Description:** This API redirects the user to the original URL associated with the shortened URL.
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:4000/google_images' \
    --data ''
    ```

## Getting Started
To run the URL Shortener application locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername
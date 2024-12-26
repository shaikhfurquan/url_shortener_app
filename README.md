# URL Shortener App

## Overview
The URL Shortener App is a simple web application that allows users to create shortened URLs for long web addresses. This project provides an API for creating shortened URLs and redirecting users to the original URLs.



## Features  
- Shorten long URLs with ease.  
- Option to specify a custom shortened URL.  
- Clean and user-friendly interface.  
- Responsive design for better usability across devices.  

---

## Usage  
1. Enter the **Original URL** in the input field.  
2. Provide a custom **Shortened URL**.  
3. Click the "Shortener" button to generate the shortened link.  
4. Use the displayed shortened link to redirect to the original URL.  

---

## Tech Stack  
- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Node.js, Express  
- **Database**: MongoDB (if applicable for URL storage)  

---



## Available APIs
- [1. Create Shortened URL](#1-create-shortened-url)
- [2. Redirect to Original URL](#2-redirect-to-original-url)

---


### 1. Home Page  
![Home Page Screenshot](public/images/home_page.png)  
The Home Page provides an intuitive interface for users to enter the **Original URL** and optionally specify a **Shortened URL**.  




### 2. URL Entry Page  
![URL Page Screenshot](public/images/url.png)  
This page allows users to input their **Original URL** and an optional **Shortened URL**. By clicking the "Shortener" button, users can generate the shortened link.  



## API Documentation

### 1. Create Shortened URL
- **Endpoint:** `POST http://localhost:4000/shortener`
- **Description:** This API creates a shortened URL for the provided original URL.
- **Request Body:**
    ```json
    {
        "originalUrl": "https://www.google.com/search?q=kia+carnival&rlz=1C1CHBF_enIN1049IN1049&oq=&gs_lcrp=EgZjaHJvbWUqCQgBECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQkzMjQ2MWowajeoAgiwAgE&sourceid=chrome&ie=UTF-8",
        "shortUrl": "kia_cars"
    }
    ```
- **Expected Response:**
    ```json
    {
        "success": true,
        "message": "Shortened URL created successfully",
        "shortenedUrl": "http://localhost:4000/kia_cars"
    }
    ```
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:4000/shortener' \
    --header 'Content-Type: application/json' \
    --data '{
        "originalUrl": "https://www.google.com/search?q=kia+carnival&rlz=1C1CHBF_enIN1049IN1049&oq=&gs_lcrp=EgZjaHJvbWUqCQgBECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQkzMjQ2MWowajeoAgiwAgE&sourceid=chrome&ie=UTF-8",
        "shortUrl": "kia_cars"
    }'
    ```


### 3. Result Page  
![Result Page Screenshot](public/images/shortened_result.png)  
After clicking the "Shortener" button, the **Shortened URL** is displayed. The link is clickable and will redirect users to the original URL.  



### 2. Redirect to Original URL
- **Endpoint:** `GET http://localhost:4000/kia_cars`
- **Description:** This API redirects the user to the original URL associated with the shortened URL.
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:4000/kia_cars' \
    --data ''
    ```

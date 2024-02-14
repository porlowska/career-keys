# career-keys
Career Keys for Job Applications

## Table of Contents

- [Full Description](#full-description)
- [Features](#features)
- [How to Use](#how-to-use)
- [List of Dependencies](#list-of-dependencies)
- [Technologies Used](#technologies-used)
- [API Documentation](#api-documentation)
- [Screenshots](#screenshots)
- [License](#license)
- [Badges](#badges)

## Full Description

Career Keys is an innovative, user-focused single-page application designed to optimize the job application process. Built with React and Node.js, this platform enhances job applications by extracting relevant keywords from job descriptions. Its responsive design and user-friendly interface aim to simplify the job search and application process, empowering users to tailor their resumes with keywords that match job requirements.

User Story: As a job seeker, I need a centralized platform to access job listings from various sources, extract key skills & requirements from job descriptions and access a smooth user friendly interface across all devices to streamline my job search process maximising efficiency.

URL of deployed app:  https://github.com/porlowska/REPLACE HERE

## Features

- Job Listings Aggregator: The application fetches and displays job listings from multiple sources, allowing users to browse through a consolidated list.

- Keyword Extraction from Job Descriptions:The application uses a keyword extraction library to highlight important skills and requirements from job descriptions.

- Responsive and Accessible UI: The application’s front end is responsive and meets accessibility standards.


## How to Use

1. Open URL of deployed app:  https://github.com/porlowska/REPLACE HERE
2. Explore job listings & extracted keywords
3. Utilize the various features to enhance your job search process.

## Dependencies

- React: A JavaScript library for building user interfaces, used to create a dynamic single-page application with an engaging and polished UI.
- JSearch API: A job search and listings API used for retrieving job data, integrating it into the application to provide users with up-to-date job listings.
- OpenAI: An AI-powered platform used for efficient keyword extraction from job descriptions, enhancing the application's search and recommendation features.
- Netlify: A platform for deploying web applications and ensuring a smooth and accessible application experience for users.

## Technologies Used

- HTML5 & CSS3: Standard markup and styling languages used for structuring and styling the application's user interface. HTML5 provides semantic markup for content, while CSS3 offers extensive styling capabilities, enabling the creation of visually appealing and responsive designs.
- Git & GitHub: Version control system and collaboration platform used for managing the application's source code and facilitating collaborative development among team members. Git's branching and merging capabilities enable efficient code management and collaboration, while GitHub provides a centralized repository for hosting and sharing code.
- npm (Node Package Manager): A package manager for JavaScript, used for managing project dependencies and packages. npm simplifies the installation and management of third-party libraries and tools, enhancing the development workflow and productivity.
- Tailwind CSS: A utility-first CSS framework used for rapidly building custom user interfaces. Tailwind CSS's utility classes streamline the styling process and promote consistency across the application, allowing for quick prototyping and efficient styling customization.

## API Documentation

### JSearch API

- **Endpoint:** https://api.jsearch.io/
- **Description:** JSearch API provides access to a vast database of job listings, enabling users to search for relevant job opportunities based on various criteria.
- **Authentication:** API key authentication is required for accessing the API endpoints. Obtain an API key by signing up for a developer account on the JSearch website.
- **Endpoints:**
  - `/jobs`: Retrieves a list of job listings based on specified search parameters.
  - `/companies`: Retrieves information about companies associated with the job listings.
  - `/categories`: Retrieves available job categories for filtering search results.
- **Usage:** Make HTTP requests to the appropriate endpoints, passing relevant parameters to retrieve desired job listings and related information.
- **Documentation:** For detailed documentation and usage examples, refer to the JSearch API documentation available on the official website.

### OpenAI

- **Description:** OpenAI provides advanced AI models and APIs for various natural language processing tasks, including keyword extraction from text data.
- **Authentication:** API key authentication is required for accessing OpenAI's services. Obtain an API key by signing up for an account on the OpenAI platform.
- **Services:**
  - Keyword Extraction: Utilize OpenAI's models to extract relevant keywords from job descriptions, improving search functionality and recommendation algorithms.
- **Usage:** Use the provided SDK or make HTTP requests to OpenAI's API endpoints, passing text data to perform keyword extraction tasks.
- **Documentation:** For detailed documentation, API usage guidelines, and examples, refer to the OpenAI API documentation available on the official website.

## Screenshot

![Career Keys Screenshot](./assets/career-keys-screenshot.png)

## License

This project is licensed under the MIT license.

Copyright (c) 2023 porlowska

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges

![GitHub](https://img.shields.io/github/license/porlowska/career-keys)

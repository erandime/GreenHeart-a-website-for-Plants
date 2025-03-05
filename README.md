# GreenHeart💚

GreenHeart is a plant information website that allows users to search for plant details, including scientific names, images, and care instructions such as water and light requirements. This is a Capstone project created as a part of The Complete Full-Stack Web Development Bootcamp.

### Features

🌱 Search for plants by name, 📸 View image of plants, 💧 Get care tips (water, light, soil requirements).

### Technologies Used

Backend: Node.js, Express.js,
Frontend: EJS, Bootstrap.
API: Permapeople API

### UI Design
Preview of the UI for the application:<br/>

#### Welcome Page
![WelcomePage](/public/WelcomePage.png)
#### Example of a Search Result
![SearchResult](/public/SearchResult.png)

### Installation
#### Prerequisites
Ensure you have Node.js and npm installed.
Users must obtain their own API keys from [Permapeople](https://permapeople.org/knowledgebase/api-docs.html#getting-access) to use this project.

#### Steps
1) Clone this repository.
```sh
git clone https://github.com/erandime/GreenHeart-a-website-for-Plants.git
cd GreenHeart-a-website-for-Plants
```
2) Install dependencies.
```sh
npm install
```
3) Create a .env file and add your API keys:
```sh
PERMAPEOPLE_KEY=your-key-here
PERMAPEOPLE_SECRET=your-secret-key-here
```
4) Start the server:
```sh
node index.js
```
5) Open your browser and visit:
```sh
http://localhost:3000
```

### License
This project is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).  
Plant data is provided by [Permapeople](https://permapeople.org).


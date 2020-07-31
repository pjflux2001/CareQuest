# CareQuest

<p align="center"><img src="https://github.com/pjflux2001/CareQuest/blob/master/public/Logo.png" width = "25%" height = "25%"></p>

[![License](https://img.shields.io/badge/License-Apache2-red.svg)](https://www.apache.org/licenses/LICENSE-2.0) [![Website](https://img.shields.io/badge/View-Website-blue)](https://care-quest.herokuapp.com/)

<strong>A load balancing platform for medical services aimed at bringing order to the chaos caused by COVID-19</strong>

## Contents

1. [Short description](#short-description)
1. [Demo video](#demo-video)
1. [The architecture](#the-architecture)
1. [Long description](#long-description)
1. [Project roadmap](#project-roadmap)
1. [Getting started](#getting-started)
1. [Live demo](#live-demo)
1. [Built with](#built-with)
1. [Contributing](#contributing)
1. [Versioning](#versioning)
1. [Authors](#authors)
1. [License](#license)
1. [Acknowledgments](#acknowledgments)

## Short description

### What's the problem?

COVID-19 has been on a rampage all across the globe since the past 5 months. From less than a million cases in February, and currently having more than 10 million cases across the globe. This has caused widespread panic and disorder. This panic is interfaring with not only the functioning of already established medical structure but also allocation of resources which can cost someone's life.

### How can technology help?

With increasing reach of technology, relevant information can be extracted from concerned authorities. This information can be used in resource allocation to balance load on various authorities. Providing information can keep people informed about the current scenario and have a calming effect.

### The idea

CareQuest aims to bring order to the chaos caused by COVID-19. To do so, CareQuest Services extracts information from its custom network of registered hospitals and government sources which is used in resource allocation and service recommendation with the aim of load balancing.

## Demo video

<center>[![Watch the video](https://github.com/pjflux2001/CareQuest/blob/master/public/Logo%20+%20play.png?raw=true)](https://youtu.be/vOgCOoy_Bx0)</center>

## The architecture

<p align="center"><img src="https://github.com/pjflux2001/CareQuest/blob/master/public/architecture.png?raw=true" width = "66%" height = "66%"></p>

1. PushBot generates regular updates (new beds in hospitals, new plasma patients/donors, stat updates) to the user and pushes them as notification
2. IBM Watson provides assitance to the user as CareBot as it helps him/her guide through different features and functionalities 
3. User accesses the domain using Heroku services
4. Heroku executes nodeJS to render the website
5. Server requests SendGrid to send mail after either of the plamsa forms is submitted
6. SendGrid sends mail to user that contains form data
7. Server sends requests to Firebase
8. Firebase Authentication manages user login, register, and verification services
9. Firebase sends all id card images to its Firebase Storage / Bucket 
10. ID card image is then sent to Tesseract for OCR processing
11. Firebase registers all variables related to hospital and user and stores them in Firebase Realtime Database
12. HERE Map API (Track-a-Bed) sends hospital data to Firebase Realtime Database to link with user data
13. mongoDB sends all hospital data from its collection to HERE Map APIs to be displayed under Track-a-Bed

## Long description

[More detail is available here](DESCRIPTION.md)

## Project roadmap

<p align="center"><img src="https://github.com/pjflux2001/CareQuest/blob/master/public/CareQuest%20Roadmap.png"></p>

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Ways to host the project on localhost :
        
Step 1 : Download and Install NodeJS and NPM packages from nodejs.org, or just use the following commands in your terminal window :
        
                        sudo apt-get install nodejs
                        sudo apt-get install npm
                                                                               
Step 2 : Install the http-server package from npm. Use the following command in your command prompt or terminal window :
       
                        npm install -g http-server
                
Step 3 : Navigate to the project directory using the command line interface and use :
                
                        node app.js
                        
Step 4 : Now, open your browser and navigate to http://localhost:31000/ to access the project.
        

## Live demo

You can find a running system to test at [care-quest.herokuapp.com](https://care-quest.herokuapp.com/)

## Built with

* [IBM Watson](https://www.ibm.com/in-en/watson) - Chat Assistant : CareBot
* [HERE Maps API](https://developer.here.com/) - HERE Map API for Track-a-Bed
* [Firebase](https://firebase.google.com/) - Database and Storage Used for Plasma Bank
* [nodeJS](https://nodejs.org/en/) - Server Runtime Environment
* [Github](https://github.com/) - Version control
* [Heroku](https://www.heroku.com/) - Cloud Hosting Service
* [jQuery](https://jquery.com/) - JavaScript Library for handling AJAX
* [mongoDB](https://www.mongodb.com/) - NoSQL Database to handle data for Track-a-Bed
* [Tesseract](https://tesseract.projectnaptha.com/) - OCR system for CareNet
* [PushBot](https://pushbots.com/) - Notifications
* [SendGrid](https://sendgrid.com/) - Mailing Service
* [AOS](https://michalsnik.github.io/aos/) - Animation for landing and Plasma Bank pages
* [Bootstrap](https://getbootstrap.com/) - Frontend components
* [Semantic UI](https://semantic-ui.com/) - UI/UX Design


## Contributing

Please read [here](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [github](https://github.com/) for versioning. Versions will be made available as [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Prashant Jha** - *Backend* - [pjflux2001](https://github.com/pjflux2001)
* **Sudhanshu Mohan Kashyap** - *Backend And Frontend* - [mightyjoe781](https://github.com/mightyjoe781)
* **Umang Barthwal** - *Backend And Frontend* - [barthwalumang](https://github.com/barthwalumang)
* **Apoorv Garg** - *Frontend* - [ApEdu](https://github.com/ApEdu)
* **Aayush Kaushal** - *Frontend* - [Aayush-7](https://github.com/Aayush-7)

## License

This project is licensed under the Apache 2 License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Based on [Billie Thompson's README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2).

# CareQuest

<p align="center"><img src="https://github.com/pjflux2001/CareQuest/blob/master/public/Logo.png" width = "25%" height = "25%"></p>

[![License](https://img.shields.io/badge/License-Apache2-red.svg)](https://www.apache.org/licenses/LICENSE-2.0) [![Website](https://img.shields.io/badge/View-Website-blue)](https://care-quest.herokuapp.com/)

<strong>A platform to bring order to chaos caused by COVID-19</strong>

## Contents

1. [Short description](#short-description)
1. [Demo video](#demo-video)
1. [The architecture](#the-architecture)
1. [Long description](#long-description)
1. [Project roadmap](#project-roadmap)
1. [Getting started](#getting-started)
1. [Running the tests](#running-the-tests)
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

[![Watch the video](https://github.com/Code-and-Response/Liquid-Prep/blob/master/images/IBM-interview-video-image.png)](https://youtu.be/vOgCOoy_Bx0)

## The architecture

<p align="center"><img src="https://github.com/pjflux2001/CareQuest/blob/master/public/architecture.png?raw=true" width = "66%" height = "66%"></p>

1. The user navigates to the site and uploads a video file.
2. Watson Speech to Text processes the audio and extracts the text.
3. Watson Translation (optionally) can translate the text to the desired language.
4. The app stores the translated text as a document within Object Storage.

## Long description

[More detail is available here](DESCRIPTION.md)

## Project roadmap

<p align="center"><img src="https://github.com/pjflux2001/CareQuest/blob/master/public/CareQuest%20Roadmap.png"></p>

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```bash
dnf install wget
wget http://www.example.com/install.sh
bash install.sh
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be, for example

```bash
export TOKEN="fffd0923aa667c617a62f5A_fake_token754a2ad06cc9903543f1e85"
export EMAIL="jane@example.com"
dnf install npm
node samplefile.js
Server running at http://127.0.0.1:3000/
```

And repeat

```bash
curl localhost:3000
Thanks for looking at Code-and-Response!
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why, if you were using something like `mocha` for instance

```bash
npm install mocha --save-dev
vi test/test.js
./node_modules/mocha/bin/mocha
```

### And coding style tests

Explain what these tests test and why, if you chose `eslint` for example

```bash
npm install eslint --save-dev
npx eslint --init
npx eslint sample-file.js
```

## Live demo

You can find a running system to test at [https://care-quest.herokuapp.com/](https://care-quest.herokuapp.com/)

## Built with

* [IBM Cloudant](https://cloud.ibm.com/catalog?search=cloudant#search_results) - The NoSQL database used
* [IBM Cloud Functions](https://cloud.ibm.com/catalog?search=cloud%20functions#search_results) - The compute platform for handing logic
* [IBM API Connect](https://cloud.ibm.com/catalog?search=api%20connect#search_results) - The web framework used
* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

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

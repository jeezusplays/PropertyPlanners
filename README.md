# PropertyPlanners

<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<div>
  <p align="center">  
    <a href="https://github.com/jeezusplays/PropertyPlanners/graphs/contributors">Contributors</a>
    ·
    <a href="https://github.com/jeezusplays/PropertyPlanners/network/members">Forks</a>
  </p>
</div>
<!-- [![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url] -->
<!-- [![MIT License][license-shield]][license-url] -->




<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="public/favicon.ico" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">PropertyPlanners</h3>

  <p align="center">
    A project to make property planning easier!
    <br />
    <a href="https://github.com/jeezusplays/PropertyPlanners"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/jeezusplays/PropertyPlanners">View Demo</a>
    ·
    <a href="https://github.com/jeezusplays/PropertyPlanners/issues">Report Bug</a>
    ·
    <a href="https://github.com/jeezusplays/PropertyPlanners/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <!-- <li><a href="#roadmap">Roadmap</a></li> -->
    <li><a href="#contributing">Contributing</a></li>
    <!-- <li><a href="#license">License</a></li> -->
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Property Planners is a platform for resale flat buyers to understand the properties landscape and help locate suitable resale properties. Based on research, 60% of individuals surveyed feel that properties in Singapore are unaffordable. The spike came from high demands and low supplies due to construction setbacks from COVID-19. With the fierce competition for BTO flats, some end up looking for resale flats (which could be more expensive). 

Without comprehensive, interactive, and free statistical data on resale flats, the process of purchasing a flat is often tedious and buyers have little sensing on a reasonable price. Most individuals would be unable to understand the landscape of the resale market at a glance, and would have to spend hours and days researching. Others may rely on property agents, who may not always provide the most accurate information to benefit themselves financially. To give property seekers a leverage, Property Planners aims to provide meaningful data such as (but not limited to):

* Summary statistics
* Drill down charts 
* Regional maps
* Distribution tables
* Resale price forecast 

By aggregating resale flat prices around Singapore, users can understand the market much quicker instead of having to read numerous complex reports on property websites. This helps users create a simpler and better overview of their property purchasing journey. Researching for prices and prospecting for the ideal flat becomes much easier with the data we provide.

Property Planners also provide agents a platform to advertise their profile and help connect potential buyers with the agent according to the area buyers are interested in. Agents are able to set up a profile to allow users to view their extensive records to build trust between agents and buyers. Using APIs provided by the Council for Estate Agency (CEA), we are able to help agents showcase their portfolio with little set-up by automatically publishing their sales history and agent data. If a user has found an agent they are interested in, they can reach out to them through Property Planners’ own chat function, reducing the need to provide sensitive information like their mobile numbers online to the general public. 


<!-- Use the `BLANK_README.md` to get started. -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This section lists any major frameworks/libraries used to bootstrap PropertyPlanners.

<!-- * [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url] -->
* [![Vue][Vue.js]][Vue-url]
* [![Chart][Chart.js]][Chart-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url]
* [![Firebase][Firebase]][Firebase-url]
* [![GeoJSON][GeoJSON]][GeoJSON-url]
* [![Flask][Flask]][Flask-url]
* [![Google][Google]][Google-url]

<!-- * [![Angular][Angular.io]][Angular-url]
* [![Svelte][Svelte.dev]][Svelte-url]
* [![Laravel][Laravel.com]][Laravel-url] -->

This are the APIs used to integrate meaningful data into PropertyPlanners.
* [Resale Flat Prices](https://data.gov.sg/dataset/resale-flat-prices)
* [CEA Salesperson Information](https://data.gov.sg/dataset/cea-salesperson-info)
* [CEA Salesperson Property Transaction Records (Residential)](https://data.gov.sg/dataset/cea-salesperson-residential-transaction-record)
* [Google Maps API](https://developers.google.com/maps)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You will need the following software installed in your machine.
* npm
  ```sh
  npm install -g npm
  ```

### Installation

_Instructions on how to install this respository onto your local machine._

1. Clone the repo
   ```sh
   git clone https://github.com/jeezusplays/PropertyPlanners
   ```
<!-- 2. Create a Firebase Project and add service account key json to api folder
3. Change service account key json to "serviceAccountKey.json" -->
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run vue
   ```sh
   npm run serve
   ```
4. Go to your local host
   ```sh
   http://localhost:8080 or https://localhost:8081
   ```

<!-- 6. Start a new terminal and run API server
   ```sh
   python api\api.py
   ``` -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage & Testing

Here of some useful examples of how you can use/test PropertyPlanners. Additional screenshots, code examples and demos may be provided. 

Some login details you can try:
|User|Email|Password|
|:-----:|:-----:|:-----:|

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
<!-- ## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish

See the [open issues](https://github.com/jeezusplays/PropertyPlanners/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b /newFeature`)
3. Commit your Changes (`git commit -m 'Add some newFeature'`)
4. Push to the Branch (`git push origin /newFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
<!-- ## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- CONTACT -->
## Contacts

* [Tan Zuyi Joey](https://linkedin.com/in/joey-tan-zuyi)<br>
* [Samuel Chung](https://www.linkedin.com/in/samuel-chung-339688154/)<br>
* [Liow Hong Xiang](https://www.linkedin.com/in/liowhongxiang/)<br>

<!-- Project Link: [https://github.com/jeezusplays/PropertyPlanners](https://github.com/jeezusplays/PropertyPlanners) -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Credit to these helpful resources!

<!-- * [Choose an Open Source License](https://choosealicense.com) -->
<!-- * [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io) -->
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [Firebase](https://firebase.google.com/)
* [Geocoding/Reverse Geocoding](https://developers.google.com/maps/documentation/geocoding)
* [DataTables Vue](https://datatables.net/blog/2022-06-22-vue)

<!-- * [React Icons](https://react-icons.github.io/react-icons/search) -->
<!-- * [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet) -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/jeezusplays/PropertyPlanners/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/jeezusplays/PropertyPlanners/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/jeezusplays/PropertyPlanners/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/jeezusplays/PropertyPlanners/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/jeezusplays/PropertyPlanners/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/joey-tan-zuyi
[product-screenshot]: src/assets/product.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[Chart.js]: https://img.shields.io/badge/Chart.js-ffffff?style=for-the-badge&logo=Chart.js&logoColor=dark
[Chart-url]: https://www.chartjs.org/
[Firebase]: https://img.shields.io/badge/Firebase-039be5?style=for-the-badge&logo=Firebase&logoColor=dark
[Firebase-url]: https://firebase.google.com/
[Flask]: https://img.shields.io/twitter/url?color=white&label=Flask&logo=Flask&style=for-the-badge&url=https%3A%2F%2Fflask.palletsprojects.com%2Fen%2F2.2.x%2F
[Flask-url]:https://flask.palletsprojects.com/en/2.2.x/
[GeoJSON]:https://img.shields.io/twitter/url?color=white&label=GeoJSON&logo=json&logoColor=blue&style=for-the-badge&url=https%3A%2F%2Fgeojson.org%2F
[GeoJSON-url]:https://geojson.org/
[Google]:https://img.shields.io/twitter/url?label=Google%20Compute%20Engine&logo=google%20cloud&logoColor=red&style=for-the-badge&url=https%3A%2F%2Fcloud.google.com%2Fcompute
[Google-url]:https://cloud.google.com/compute

# PropertyPlanners

<a name="readme-top"></a>

<div>
  <p align="center">  
    <a href="https://github.com/jeezusplays/PropertyPlanners/graphs/contributors">Contributors</a>
    ·
    <a href="https://github.com/jeezusplays/PropertyPlanners/network/members">Forks</a>
  </p>
</div>

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
    <li><a href="#usage-&-testing">Usage and Testing</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

!["Homepage"][homepage-screenshot]

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

* [![Vue](https://img.shields.io/badge/Vue.js-4FC08D.svg?style=for-the-badge&logo=vuedotjs&logoColor=white)](https://vuejs.org/)
* [![Chart](https://img.shields.io/badge/Chart.js-FF6384.svg?style=for-the-badge&logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)
* [![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com)
* [![JQuery](https://img.shields.io/badge/jQuery-0769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)](https://jquery.com)
* [![Firebase](https://img.shields.io/badge/Firebase-FFCA28.svg?style=for-the-badge&logo=firebase&logoColor=white)](https://firebase.google.com/)
* [![GeoJSON](https://img.shields.io/badge/GeoJSON-FF0000.svg?style=for-the-badge&logo=geojson&logoColor=white)](https://geojson.org/)
* [![Flask](https://img.shields.io/badge/Flask-000000.svg?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/en/2.0.x/)
* [![Google](https://img.shields.io/badge/Google%20Compute%20Engine-4285F4.svg?style=for-the-badge&logo=google%20cloud&logoColor=white)](https://cloud.google.com/compute)

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

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE -->
## Usage & Testing

Here of some useful examples of how you can use/test PropertyPlanners. Additional screenshots, code examples and demos may be provided. 

### Login 
Some <b>login details</b> you can try. Feel free to make your own Seeker account!
|User Type|Email|Password|
|:-----:|:-----:|:-----:|
|Agent|mockagent1@gmail.com|mockagent1|
|Agent|mockagent2@gmail.com|mockagent2|
|Agent|mockagent3@gmail.com|mockagent3|
|Agent|mockagent4@gmail.com|mockagent4|
|Agent|mockagent5@gmail.com|mockagent5|
|Seeker|mockseeker1@gmail.com|password123|

### Property Agent Verification 
Some <b>Property Agent CEA</b> you can use when creating an agent profile. Simply copy and paste the CEA in the "Profile" section when prompted. Do note that this may result in multiple agents with the same details. This is purely for testing.

|Agent CEA|Name|Registration Period|Company|
|:-----:|:-----:|:-----:|:-----:|
|R060602F|ANTHEA GUEY AI MIN|2019-01-01 ~ 2022-12-31|PROPNEX REALTY PTE. LTD.
|R047001I|PEGGY LEONG|2017-07-10 ~ 2022-12-31|PROPNEX REALTY PTE. LTD.|
|R051812G|WAN WEIXIONG AARON|2017-10-06 ~ 2022-12-31|PROPNEX REALTY PTE. LTD|
|R057094C|TAN LI WEI, TIMOTHY	|2017-01-01 ~ 2023-12-31|ORANGETEE & TIE PTE. LTD.|
|R045184G|KOH JIN MIN|2019-02-12 ~ 2022-12-31|PROPNEX REALTY PTE. LTD|
|R056016F|TAN JIN RUI|2016-03-29 ~ 2022-12-31|HUTTONS ASIA PTE. LTD.|
|R019187Z|GIAN KWAN HWEE|2018-10-30 ~ 2022-12-31|SRI PTE. LTD.|

CEA allows the property agent to become "verified" on PropertyPlanners. All information above will be displayed on their profile, except their image.

This also retrieves their:
* HDB Resale Records
* HDB Rental Records
* Private Rental Records
* Private Sale Records

### Searchable Property Agents
During testing, you may notice that there may be duplicates of the same property agents. Do note that they are different accounts and were used during testing. These were also used to general results in the search section and advertisement section.

### Statistics

This is a preview of the property information that users can view. It provides them useful information about the property market. Firstly, we have the general statistics. This provides a general overview of the property market as shown below.

!["General"][general-screenshot]

Secondly, we have the statistic by region. The Singapore map is sectioned by clickable regions that provides regional data of the area they selected.

!["Regional"][regional-screenshot]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

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

<!-- CONTACT -->
## Contacts
Feel free to contact and connect!

|| Name | Main Role | Github | LinkedIn |
|-----------| ----------- | ----------- | ----------- | ----------- |
|<img src="https://avatars.githubusercontent.com/u/68149788?v=4" width="100"></img>|Tan Zuyi Joey|Project Manager|[jeezusplays](https://github.com/jeezusplays)|[LinkedIn](https://linkedin.com/in/joey-tan-zuyi)|
|<img src="https://avatars.githubusercontent.com/u/41113285?v=4" width="100"></img>|Samuel Chung|Backend Developer|[samchung95](https://github.com/samchung95)|[LinkedIn](https://www.linkedin.com/in/samuel-chung-339688154/)|
|<img src="https://avatars.githubusercontent.com/u/111420736?v=4" width="100"></img>|Liow Hong Xiang|Frontend Developer|[hx240](https://github.com/hx240)|[LinkedIn](https://www.linkedin.com/in/liowhongxiang/)|

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Credit to these helpful resources!

<!-- * [Choose an Open Source License](https://choosealicense.com) -->
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [Firebase](https://firebase.google.com/)
* [Geocoding/Reverse Geocoding](https://developers.google.com/maps/documentation/geocoding)
* [DataTables Vue](https://datatables.net/blog/2022-06-22-vue)

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

[homepage-screenshot]: src/assets/product.png
[general-screenshot]: src/assets/general_stats.png
[regional-screenshot]: src/assets/regional_stats.png

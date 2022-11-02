<template>
  <EmptyProfile v-if="!hasProfile" />
  <div class="container-fluid px-5 py-3" v-else>
    <div class="row pt-3">
      <h1 class="text-start">My Profile</h1>
    </div>
    <hr />
    <div class="row p-3">
      <div class="col-12 col-lg-2 d-flex pb-4 px-0 pe-md-3 justify-content-start">
        <img
          src="../../assets/agent_face.jpeg"
          class="border border-dark img-fluid pp-pp"
        />
      </div>
      <div class="col-12 col-lg-7 justify-content-start">
        <div class="row">
          <div class="container p-0 me-auto text-start">
            <p class="pp-head">{{name}}</p>
            <p>Registration No. <b>{{registrationNo}}</b></p>
            <p>Registration Date: <b>{{registrationStartDate}} - {{registrationEndDate}}</b></p>
            <p>Estate Agent Name: <b>{{estateAgentName}}</b></p>
            <p>Licence No: <b>{{licenceNo}}</b></p>
          </div>
        </div>

      </div>
      <div class="d-flex flex-row p-0 col-12 col-lg-3 justify-content-end">
        <button
          class="p-3 btn me-auto me-lg-0 ms-lg-auto pp-button rounded-pill"
          style="
            background-color: #779341;
            color: #ffffff;
            border-radius: 15px;
            width: 150px;
          "
        >
          Chat Now
        </button>
      </div>
    </div>

    <hr class="d-lg-none">

    <div class="row py-3">
      <h2 class="d-flex justify-content-start">Records</h2>
    </div>

    <section>
      <div class="row">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              HDB Resale Records
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              HDB Rental Records
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact-tab-pane"
              type="button"
              role="tab"
              aria-controls="contact-tab-pane"
              aria-selected="false"
            >
              Private Rental Records
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="disabled-tab"
              data-bs-toggle="tab"
              data-bs-target="#disabled-tab-pane"
              type="button"
              role="tab"
              aria-controls="disabled-tab-pane"
              aria-selected="false"
            >
              Private Sales Records
            </button>
          </li>
        </ul>

        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabindex="0"
          >
            <br />
            <div class="table-responsive">
              <table
                id="example"
                class="table table-borderless table-hover table-striped"
                style="width: 100%"
              >
                <thead>
                  <tr>
                    <th>Month/Year</th>
                    <th>Town</th>
                    <th>Client</th>
                  </tr>
                </thead>
                <tbody style="text-align: left">
                  <tr>
                    <td>July 22</td>
                    <td>YISHUN</td>
                    <td>Seller</td>
                  </tr>
                  <tr>
                    <td>May 22</td>
                    <td>KALLANG/WHAMPOA</td>
                    <td>Seller</td>
                  </tr>
                  <tr>
                    <td>January 22</td>
                    <td>YISHUN</td>
                    <td>Seller</td>
                  </tr>
                  <tr>
                    <td>January 22</td>
                    <td>PUNGGOL</td>
                    <td>Seller</td>
                  </tr>
                  <tr>
                    <td>January 22</td>
                    <td>PUNGGOL</td>
                    <td>Buyer</td>
                  </tr>
                  <tr>
                    <td>December 21</td>
                    <td>SEMBAWANG</td>
                    <td>Seller</td>
                  </tr>
                  <tr>
                    <td>September 21</td>
                    <td>KALLANG/WHAMPOA</td>
                    <td>Seller</td>
                  </tr>
                  <tr>
                    <td>July 21</td>
                    <td>HOUGANG</td>
                    <td>Seller</td>
                  </tr>
                  <tr>
                    <td>July 21</td>
                    <td>HOUGANG</td>
                    <td>Seller</td>
                  </tr>
                  <tr>
                    <td>March 21</td>
                    <td>BEDOK</td>
                    <td>Seller</td>
                  </tr>
                  <tr>
                    <td>February 21</td>
                    <td>CLEMENTI</td>
                    <td>Seller</td>
                  </tr>
                  <tr>
                    <td>February 21</td>
                    <td>BUKIT MERAH</td>
                    <td>Buyer</td>
                  </tr>
                  <tr>
                    <td>January 21</td>
                    <td>GEYLANG</td>
                    <td>Seller</td>
                  </tr>
                  <tr>
                    <td>December 20</td>
                    <td>SENGKANG</td>
                    <td>Seller</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div
            class="tab-pane fade"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabindex="0"
          >
            <br />
            <div class="table-responsive">
              <table
                id="example2"
                class="table table-borderless table-hover table-striped"
                style="width: 100%"
              >
                <thead>
                  <tr>
                    <th>Month/Year</th>
                    <th>Town</th>
                    <th>Client</th>
                    <th>Rental Type</th>
                  </tr>
                </thead>
                <tbody style="text-align: left">
                  <tr>
                    <td>June 2022</td>
                    <td>CENTRAL AREA</td>
                    <td>Landlord</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>January 2022</td>
                    <td>TOA PAYOH</td>
                    <td>Landlord</td>
                    <td>Shared Rental</td>
                  </tr>
                  <tr>
                    <td>February 2022</td>
                    <td>BEDOK</td>
                    <td>Landlord</td>
                    <td>Whole Rental</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div
            class="tab-pane fade"
            id="contact-tab-pane"
            role="tabpanel"
            aria-labelledby="contact-tab"
            tabindex="0"
          >
            <br />
            <div class="table-responsive">
              <table
                id="example3"
                class="table table-borderless table-hover table-striped"
                style="width: 100%"
              >
                <thead>
                  <tr>
                    <th>Month/Year</th>
                    <th>District</th>
                    <th>General Location</th>
                    <th>Client</th>
                    <th>Property</th>
                    <th>Rental Type</th>
                  </tr>
                </thead>
                <tbody style="text-align: left">
                  <tr>
                    <td>June 22</td>
                    <td>3</td>
                    <td>Queenstown/ Tiong Bahru</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>June 22</td>
                    <td>9</td>
                    <td>Orchard/ Cairnhill/ River Valley</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>June 22</td>
                    <td>21</td>
                    <td>Upper Bukit Timah/ Clementi Park/ U...</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>June 22</td>
                    <td>19</td>
                    <td>Serangoon Garden/ Hougang/ Punggol</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>June 22</td>
                    <td>9</td>
                    <td>Orchard/ Cairnhill/ River Valley</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>May 22</td>
                    <td>3</td>
                    <td>Queenstown/ Tiong Bahru</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>May 22</td>
                    <td>9</td>
                    <td>Orchard/ Cairnhill/ River Valley</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>May 22</td>
                    <td>5</td>
                    <td>Pasir Panjang/ Hong Leong Garden/ C...</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>May 22</td>
                    <td>10</td>
                    <td>Ardmore/ Bukit Timah/ Holland Road/...</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>May 22</td>
                    <td>10</td>
                    <td>Ardmore/ Bukit Timah/ Holland Road/...</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>May 22</td>
                    <td>9</td>
                    <td>Orchard/ Cairnhill/ River Valley</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>May 22</td>
                    <td>10</td>
                    <td>Ardmore/ Bukit Timah/ Holland Road/...</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>April 22</td>
                    <td>3</td>
                    <td>Queenstown/ Tiong Bahru</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>April 22</td>
                    <td>8</td>
                    <td>Little India</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>April 22</td>
                    <td>9</td>
                    <td>Orchard/ Cairnhill/ River Valley</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>April 22</td>
                    <td>9</td>
                    <td>Orchard/ Cairnhill/ River Valley</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>April 22</td>
                    <td>7</td>
                    <td>Middle Road/ Golden Mile</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>February 22</td>
                    <td>7</td>
                    <td>Middle Road/ Golden Mile</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>February 22</td>
                    <td>11</td>
                    <td>Watten Estate/ Novena/ Thomson</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>February 22</td>
                    <td>3</td>
                    <td>Queenstown/ Tiong Bahru</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>December 21</td>
                    <td>9</td>
                    <td>Orchard/ Cairnhill/ River Valley</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>November 21</td>
                    <td>3</td>
                    <td>Queenstown/ Tiong Bahru</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>November 21</td>
                    <td>9</td>
                    <td>Orchard/ Cairnhill/ River Valley</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>November 21</td>
                    <td>10</td>
                    <td>Ardmore/ Bukit Timah/ Holland Road/...</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>November 21</td>
                    <td>1</td>
                    <td>Raffles Place/ Cecil/ Marina/ Peopl...</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>November 21</td>
                    <td>4</td>
                    <td>Telok Blangah/ Harbourfront</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>November 21</td>
                    <td>12</td>
                    <td>Balestier/ Toa Payoh/ Serangoon</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>November 21</td>
                    <td>26</td>
                    <td>Upper Thomson/ Springleaf</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>November 21</td>
                    <td>1</td>
                    <td>Raffles Place/ Cecil/ Marina/ Peopl...</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>October 21</td>
                    <td>4</td>
                    <td>Telok Blangah/ Harbourfront</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Room Rental</td>
                  </tr>
                  <tr>
                    <td>October 21</td>
                    <td>4</td>
                    <td>Telok Blangah/ Harbourfront</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Room Rental</td>
                  </tr>
                  <tr>
                    <td>October 21</td>
                    <td>8</td>
                    <td>Little India</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>September 21</td>
                    <td>14</td>
                    <td>Geylang/ Eunos</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>August 21</td>
                    <td>9</td>
                    <td>Orchard/ Cairnhill/ River Valley</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>August 21</td>
                    <td>28</td>
                    <td>Seletar</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>August 21</td>
                    <td>9</td>
                    <td>Orchard/ Cairnhill/ River Valley</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>August 21</td>
                    <td>3</td>
                    <td>Queenstown/ Tiong Bahru</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>August 21</td>
                    <td>21</td>
                    <td>Upper Bukit Timah/ Clementi Park/ U...</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>August 21</td>
                    <td>9</td>
                    <td>Orchard/ Cairnhill/ River Valley</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>August 21</td>
                    <td>13</td>
                    <td>Macpherson/ Braddell</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>August 21</td>
                    <td>19</td>
                    <td>Serangoon Garden/ Hougang/ Punggol</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>June 21</td>
                    <td>19</td>
                    <td>Serangoon Garden/ Hougang/ Punggol</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>June 21</td>
                    <td>19</td>
                    <td>Serangoon Garden/ Hougang/ Punggol</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>June 21</td>
                    <td>20</td>
                    <td>Bishan/ Ang Mo Kio</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>June 21</td>
                    <td>20</td>
                    <td>Bishan/ Ang Mo Kio</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>June 21</td>
                    <td>12</td>
                    <td>Balestier/ Toa Payoh/ Serangoon</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>June 21</td>
                    <td>12</td>
                    <td>Balestier/ Toa Payoh/ Serangoon</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>May 21</td>
                    <td>15</td>
                    <td>Katong/ Joo Chiat/ Amber Road</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>May 21</td>
                    <td>15</td>
                    <td>Katong/ Joo Chiat/ Amber Road</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>May 21</td>
                    <td>15</td>
                    <td>Katong/ Joo Chiat/ Amber Road</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>May 21</td>
                    <td>15</td>
                    <td>Katong/ Joo Chiat/ Amber Road</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>May 21</td>
                    <td>14</td>
                    <td>Geylang/ Eunos</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>May 21</td>
                    <td>14</td>
                    <td>Geylang/ Eunos</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>May 21</td>
                    <td>15</td>
                    <td>Katong/ Joo Chiat/ Amber Road</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>May 21</td>
                    <td>12</td>
                    <td>Balestier/ Toa Payoh/ Serangoon</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>May 21</td>
                    <td>4</td>
                    <td>Telok Blangah/ Harbourfront</td>
                    <td>Tenant</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>May 21</td>
                    <td>15</td>
                    <td>Katong/ Joo Chiat/ Amber Road</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>May 21</td>
                    <td>15</td>
                    <td>Katong/ Joo Chiat/ Amber Road</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>March 21</td>
                    <td>10</td>
                    <td>Ardmore/ Bukit Timah/ Holland Road/...</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>March 21</td>
                    <td>5</td>
                    <td>Pasir Panjang/ Hong Leong Garden/ C...</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>March 21</td>
                    <td>19</td>
                    <td>Serangoon Garden/ Hougang/ Punggol</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>March 21</td>
                    <td>10</td>
                    <td>Ardmore/ Bukit Timah/ Holland Road/...</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>March 21</td>
                    <td>15</td>
                    <td>Katong/ Joo Chiat/ Amber Road</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>March 21</td>
                    <td>9</td>
                    <td>Orchard/ Cairnhill/ River Valley</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>March 21</td>
                    <td>19</td>
                    <td>Serangoon Garden/ Hougang/ Punggol</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>March 21</td>
                    <td>9</td>
                    <td>Orchard/ Cairnhill/ River Valley</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>February 21</td>
                    <td>9</td>
                    <td>Orchard/ Cairnhill/ River Valley</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>February 21</td>
                    <td>9</td>
                    <td>Orchard/ Cairnhill/ River Valley</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>December 20</td>
                    <td>9</td>
                    <td>Orchard/ Cairnhill/ River Valley</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Room Rental</td>
                  </tr>
                  <tr>
                    <td>December 20</td>
                    <td>9</td>
                    <td>Orchard/ Cairnhill/ River Valley</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Whole Rental</td>
                  </tr>
                  <tr>
                    <td>December 20</td>
                    <td>5</td>
                    <td>Pasir Panjang/ Hong Leong Garden/ C...</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Room Rental</td>
                  </tr>
                  <tr>
                    <td>December 20</td>
                    <td>4</td>
                    <td>Telok Blangah/ Harbourfront</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Room Rental</td>
                  </tr>
                  <tr>
                    <td>December 20</td>
                    <td>9</td>
                    <td>Orchard/ Cairnhill/ River Valley</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Room Rental</td>
                  </tr>
                  <tr>
                    <td>November 20</td>
                    <td>1</td>
                    <td>Raffles Place/ Cecil/ Marina/ Peopl...</td>
                    <td>Landlord</td>
                    <td>Condominium/Apartments</td>
                    <td>Room Rental</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div
            class="tab-pane fade"
            id="disabled-tab-pane"
            role="tabpanel"
            aria-labelledby="disabled-tab"
            tabindex="0"
          >
            <br />
            <div class="table-responsive">
              <table
                id="example4"
                class="table table-borderless table-hover table-striped"
                style="width: 100%"
              >
                <thead>
                  <tr>
                    <th>Month/Year</th>
                    <th>District</th>
                    <th>General Location</th>
                    <th>Client</th>
                    <th>Property</th>
                    <th>Sale Type</th>
                  </tr>
                </thead>

                <tbody style="text-align: left">
                  <tr>
                    <td>July 22</td>
                    <td>10</td>
                    <td>Ardmore/ Bukit Timah/ Holland Road/...</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>New Sale</td>
                  </tr>
                  <tr>
                    <td>July 22</td>
                    <td>3</td>
                    <td>Queenstown/ Tiong Bahru</td>
                    <td>Buyer</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>July 22</td>
                    <td>3</td>
                    <td>Queenstown/ Tiong Bahru</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>New Sale</td>
                  </tr>
                  <tr>
                    <td>June 22</td>
                    <td>11</td>
                    <td>Watten Estate/ Novena/ Thomson</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>New Sale</td>
                  </tr>
                  <tr>
                    <td>May 22</td>
                    <td>12</td>
                    <td>Balestier/ Toa Payoh/ Serangoon</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>May 22</td>
                    <td>25</td>
                    <td>Kranji/ Woodgrove</td>
                    <td>Buyer</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>April 22</td>
                    <td>27</td>
                    <td>Yishun/ Sembawang</td>
                    <td>Seller</td>
                    <td>Strata-Landed</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>March 22</td>
                    <td>12</td>
                    <td>Balestier/ Toa Payoh/ Serangoon</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>March 22</td>
                    <td>12</td>
                    <td>Balestier/ Toa Payoh/ Serangoon</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>New Sale</td>
                  </tr>
                  <tr>
                    <td>March 22</td>
                    <td>3</td>
                    <td>Queenstown/ Tiong Bahru</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>December 21</td>
                    <td>20</td>
                    <td>Bishan/ Ang Mo Kio</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>November 21</td>
                    <td>19</td>
                    <td>Serangoon Garden/ Hougang/ Punggol</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>November 21</td>
                    <td>10</td>
                    <td>Ardmore/ Bukit Timah/ Holland Road/...</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>October 21</td>
                    <td>19</td>
                    <td>Serangoon Garden/ Hougang/ Punggol</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>October 21</td>
                    <td>22</td>
                    <td>Jurong</td>
                    <td>Buyer</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>October 21</td>
                    <td>13</td>
                    <td>Macpherson/ Braddell</td>
                    <td>Buyer</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>October 21</td>
                    <td>10</td>
                    <td>Ardmore/ Bukit Timah/ Holland Road/...</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>September 21</td>
                    <td>15</td>
                    <td>Katong/ Joo Chiat/ Amber Road</td>
                    <td>Seller</td>
                    <td>Landed</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>September 21</td>
                    <td>15</td>
                    <td>Katong/ Joo Chiat/ Amber Road</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>September 21</td>
                    <td>19</td>
                    <td>Serangoon Garden/ Hougang/ Punggol</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>New Sale</td>
                  </tr>
                  <tr>
                    <td>August 21</td>
                    <td>12</td>
                    <td>Balestier/ Toa Payoh/ Serangoon</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>August 21</td>
                    <td>12</td>
                    <td>Balestier/ Toa Payoh/ Serangoon</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>August 21</td>
                    <td>5</td>
                    <td>Pasir Panjang/ Hong Leong Garden/ C...</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>August 21</td>
                    <td>10</td>
                    <td>Ardmore/ Bukit Timah/ Holland Road/...</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>New Sale</td>
                  </tr>
                  <tr>
                    <td>August 21</td>
                    <td>10</td>
                    <td>Ardmore/ Bukit Timah/ Holland Road/...</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>New Sale</td>
                  </tr>
                  <tr>
                    <td>August 21</td>
                    <td>5</td>
                    <td>Pasir Panjang/ Hong Leong Garden/ C...</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>New Sale</td>
                  </tr>
                  <tr>
                    <td>July 21</td>
                    <td>21</td>
                    <td>Upper Bukit Timah/ Clementi Park/ U...</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>June 21</td>
                    <td>17</td>
                    <td>Loyang/ Changi</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>May 21</td>
                    <td>15</td>
                    <td>Katong/ Joo Chiat/ Amber Road</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>May 21</td>
                    <td>12</td>
                    <td>Balestier/ Toa Payoh/ Serangoon</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>May 21</td>
                    <td>14</td>
                    <td>Geylang/ Eunos</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>May 21</td>
                    <td>8</td>
                    <td>Little India</td>
                    <td>Buyer</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>May 21</td>
                    <td>10</td>
                    <td>Ardmore/ Bukit Timah/ Holland Road/...</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>May 21</td>
                    <td>10</td>
                    <td>Ardmore/ Bukit Timah/ Holland Road/...</td>
                    <td>Seller</td>
                    <td>Landed</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>May 21</td>
                    <td>10</td>
                    <td>Ardmore/ Bukit Timah/ Holland Road/...</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>May 21</td>
                    <td>17</td>
                    <td>Loyang/ Changi</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>May 21</td>
                    <td>14</td>
                    <td>Geylang/ Eunos</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>New Sale</td>
                  </tr>
                  <tr>
                    <td>March 21</td>
                    <td>19</td>
                    <td>Serangoon Garden/ Hougang/ Punggol</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>March 21</td>
                    <td>3</td>
                    <td>Queenstown/ Tiong Bahru</td>
                    <td>Buyer</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>February 21</td>
                    <td>19</td>
                    <td>Serangoon Garden/ Hougang/ Punggol</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>February 21</td>
                    <td>19</td>
                    <td>Serangoon Garden/ Hougang/ Punggol</td>
                    <td>Buyer</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>January 21</td>
                    <td>20</td>
                    <td>Bishan/ Ang Mo Kio</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>December 20</td>
                    <td>20</td>
                    <td>Bishan/ Ang Mo Kio</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>December 20</td>
                    <td>15</td>
                    <td>Katong/ Joo Chiat/ Amber Road</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>New Sale</td>
                  </tr>
                  <tr>
                    <td>December 20</td>
                    <td>10</td>
                    <td>Ardmore/ Bukit Timah/ Holland Road/...</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>December 20</td>
                    <td>19</td>
                    <td>Serangoon Garden/ Hougang/ Punggol</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>December 20</td>
                    <td>4</td>
                    <td>Telok Blangah/ Harbourfront</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>November 20</td>
                    <td>15</td>
                    <td>Katong/ Joo Chiat/ Amber Road</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>November 20</td>
                    <td>15</td>
                    <td>Katong/ Joo Chiat/ Amber Road</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                  <tr>
                    <td>November 20</td>
                    <td>15</td>
                    <td>Katong/ Joo Chiat/ Amber Road</td>
                    <td>Seller</td>
                    <td>Condominium/Apartments</td>
                    <td>Resale</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="row pt-3">
      <h4 class="text-start"><b>Notes:</b></h4>
    </div>
    <div class="row">
      <ol class="text-start px-5">
        <li>
          The Public Register shows records of HDB flat resale transactions
          closed by the above salesperson. Only records of transactions
          completed within the last 24 months (from date of access) are shown.
        </li>
        <li>
          Records older than 24 months (from date of access) are available at
          data.gov.sg. Records are available only for the period starting from 1
          January 2017.
        </li>
        <li>Records are updated on the 15th of every month.</li>
        <li>
          Records are provided by HDB pursuant to Section 65 of the Estate
          Agents Act (Cap. 95A).
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import EmptyProfile from "./EmptyProfile.vue";

export default {
  name: "AgentDashboard",
  data() {
    return {
      hasProfile: false,
      name: 'John Doe',
      registrationNo:'R003797H',
      registrationStartDate: '16/11/2018',
      registrationEndDate: '31/12/2022',
      estateAgentName: 'ERA REALTY NETWORK PTE LTD',
      licenceNo: 'L3002382K'

    };
  },
  components: {
    EmptyProfile,
  },
};
</script>

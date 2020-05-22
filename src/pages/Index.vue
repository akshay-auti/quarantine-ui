<template>
  <div class="results">
    <div class="counters">
      <q-card class="display-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section>
            <span class="numberDisplay">{{this.getTotalQuizes}}</span>
          </q-card-section>
          <q-card-section class="textDisplay">Total Surveys</q-card-section>
        </q-card-section>
      </q-card>
      <q-card class="display-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section>
            <span class="numberDisplay">{{this.getLowRisk}}</span>
          </q-card-section>
          <q-card-section class="textDisplay">Low Risk</q-card-section>
        </q-card-section>
      </q-card>
      <q-card class="display-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section>
            <span class="numberDisplay">{{this.getMediumRisk}}</span>
          </q-card-section>
          <q-card-section class="textDisplay">Medium Risk</q-card-section>
        </q-card-section>
      </q-card>
      <q-card class="display-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section>
            <span class="numberDisplay">{{this.getHighRisk}}</span>
          </q-card-section>
          <q-card-section class="textDisplay">High Risk</q-card-section>
        </q-card-section>
      </q-card>
    </div>
    <div class="display-download">
        <download-csv :data="this.getCSVData">
         <button class="btn"> CSV
          <img src="~assets/download_icon.png" width="25%" height="20%" />
           </button>
        </download-csv>
       
      </div>
     <div class="content">
    <div id="outer" class="paging-button">
      <div class="inner">
        <button v-on:click="this.onPrevious" :disabled="!this.getPreviousTableData" class="btn">&laquo; Previous </button>
      </div>
      <div class="inner">
        <button v-on:click="this.onNext" :disabled="!this.getNextTableData" class="btn">Next &raquo;</button>
      </div>
    </div>
    </div>  
    <div class="content">
      <div class="results-left">
        <table>
          <thead>
            <tr>
              <th @click="sort('name')">Name</th>
              <th>Phone</th>
              <th>Risk</th>
              <th>District</th>
              <th>Taluka</th>
            </tr>
          </thead>
          <tbody>
            <tr :key="data.id" v-for="data in this.getCSVData">
              <td>{{data.name ? data.name: '--'}}</td>
              <td>{{data.phone ? data.phone: '--'}}</td>
              <td>{{data.risk ? data.risk: '--'}}</td>
              <td>{{data.district ? data.district: '--'}}</td>
              <td>{{data.taluka ? data.taluka: '--'}}</td>
            </tr>
          </tbody>
        </table>
        <!-- <q-table
          title="Assesments"
          :data="this.getCSVData"
          :columns="columns"
          row-key="id"
          :pagination.sync="pagination"
          @request="onRequest"
        />-->
      </div>
      <!-- <div class="results-right"></div> -->
    </div>
  </div>
  <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" />
    starting features will be giving them the ability to view the data basis:
    Risk,
    District,
    Age,
    Travel history,
    Close contact with Covid patient,
    Heat Map and
  Date wise breakdown.-->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Vue from "vue";
import JsonCSV from "vue-json-csv";

Vue.component("downloadCsv", JsonCSV);

export default {
  name: "PageIndex",
  computed: {
    ...mapGetters("covid", [
      "getTotalQuizes",
      "getLowRisk",
      "getMediumRisk",
      "getHighRisk",
      "getTableData",
      "getCSVData",
      "getNextTableData",
      "getPreviousTableData"
    ])
    // sortedCat: function() {
    //   return this.getCSVData.sort((a, b) => {
    //     let modifier = 1;
    //     if (this.currentSortDir === "desc") modifier = -1;
    //     if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
    //     if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
    //     return 0;
    //   });
    // }
  },
  data() {
    return {
      currentSort: "name",
      currentSortDir: "asc",
      pagination: {
        page: 1,
        rowsPerPage: 100,
        rowsNumber: 23000
      },
      // data: [],
      // columns: [
      //   {
      //     name: "name",
      //     required: true,
      //     label: "Name",
      //     align: "left"
      //   },
      //   {
      //     name: "phone",
      //     align: "center",
      //     label: "Phone",
      //     field: "phone",
      //     sortable: true
      //   },
      //   { name: "risk", label: "Risk", field: "risk", sortable: true },
      //   { name: "district", label: "District", field: "district" }
      // ]
    };
  },
  methods: {
    ...mapActions("covid", ["paginationSearch"]),

    // sort: function(s) {
    //   //if s == current sort, reverse
    //   if (s === this.currentSort) {
    //     this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
    //   }
    //   this.currentSort = s;
    // },

    onNext: function() {
      this.paginationSearch(this.getNextTableData);
    },

    onPrevious: function() {
      this.paginationSearch(this.getPreviousTableData);
    }

    // onRequest(props) {
    //   const { page, rowsPerPage } = props.pagination;

    //   // fetch data from "server"
    //   const returnedData = this.paginationSearch(this.getNextTableData);
    //   console.log(props.pagination.page);

    //   // clear out existing data and add new
    //   // this.data.splice(0, this.data.length, ...returnedData)

    //   // don't forget to update local pagination object
    //   this.pagination.page = page;
    //   this.pagination.rowsPerPage = rowsPerPage;
    // }
  }
};
</script>

<style scoped>

.btn {
  background-color:#1976d2; 
  border: none;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 15px;
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: DodgerBlue;
}

.paging-button {
  padding-left: 500px;  
}

.numberDisplay {
  font-size: 40px;
  font-weight: 600;
  margin: auto;
}

.textDisplay {
  font-size: 25px;
  text-align: center;
  margin: auto;
}

.results {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.counters {
  flex: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.display-card {
  flex: 1;
  flex-basis: 20%;
  margin: 20px 5px;
}

.content {
  flex: 10;
  flex-direction: row;
}

.results-left {
  display: flex;
  flex: 1;
  margin: 20px;
}

.results-right {
  display: flex;
  flex: 1;
}

.display-download {
  width: 8%;
    height: 4%;
    /* border: 1px solid blue; */
    float: right;
    font-size: 15px;
    margin-left: 90%;
}

@import url(https://fonts.googleapis.com/css?family=Open+Sans);
body {
  font-family: "Open Sans", sans-serif;
}
table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
}
table tr {
  border: 1px solid #ddd;
  padding: 5px;
}
table th,
table td {
  padding: 10px;
  text-align: center;
}
table th {
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

tr:hover {
  background-color: #eee;
}
tr:nth-child(2n) {
  background-color: #ddd;
}
tr:nth-child(2n):hover {
  background-color: #ccc;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }
  table thead {
    display: none;
  }
  table tr {
    border-bottom: 2px solid #ddd;
    display: block;
    margin-bottom: 10px;
  }
  table td {
    border-bottom: 1px dotted #ccc;
    display: block;
    font-size: 13px;
    text-align: right;
  }
  table td:last-child {
    border-bottom: 0;
  }
  table td:before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
}
/*button {
  background-color: #1976d2; /* blue */
  /* cursor: pointer; */
  /* border: none;
  color: white;
  padding: 5px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px; 
} */
#outer {
  width: 100%;
  /* text-align:center; */
  margin-top: 5px;
  padding-left: 500px;
}
.inner {
  padding: 10px;
  display: inline-block;
}

a {
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
}

a:hover {
  background-color: #ddd;
  color: black;
}

.previous {
  background-color: #f1f1f1;
  color: black;
}

.next {
  background-color: #4CAF50;
  color: white;
}
</style>

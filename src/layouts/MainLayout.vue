<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Self Evaluation</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above bordered content-class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-grey-8">Filters</q-item-label>
        <q-item>
          <q-item-section>
            <q-input filled v-model="fromDate" label="From Date">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="fromDate" @input="hideDate('qDateProxy')" mask="YYYY-MM-DD" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-input filled v-model="toDate" label="To Date">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="toDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="toDate" @input="hideDate('toDateProxy')" mask="YYYY-MM-DD" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-label header class="text-grey-8">Age</q-item-label>
          <q-item-section>
            <q-range v-model="age" :min="0" :max="120" :step="1" label-always @input="neeVal" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-select
              dense
              v-model="selTemp"
              multiple
              use-chips
              map-options
              emit-value
              option-label="text"
              :options="getTemperature"
              label="Temperature"
              style="width: 250px"
              @input="neeVal"
            />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-select
              dense
              v-model="selSymptoms"
              multiple
              use-chips
              map-options
              emit-value
              option-label="text"
              :options="getSymptoms"
              label="Symptoms"
              style="width: 250px"
              @input="neeVal"
            />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-select
              dense
              v-model="selAdditional"
              multiple
              use-chips
              map-options
              emit-value
              option-label="text"
              :options="getAdditional"
              label="Additional Symptoms"
              style="width: 250px"
              @input="neeVal"
            />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-select
              dense
              v-model="selDistrict"
              multiple
              use-chips
              map-options
              emit-value
              option-value="id"
              option-label="name"
              :options="getDistrict"
              label="District"
              style="width: 250px"
              @input="neeVal"
            />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-select
              dense
              v-model="selGender"
              multiple
              use-chips
              map-options
              emit-value
              option-label="text"
              :options="getGender"
              label="Gender"
              style="width: 250px"
              @input="neeVal"
            />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-select
              dense
              v-model="selRisk"
              multiple
              use-chips
              :options="getRisk"
              label="Risk"
              style="width: 250px"
              @input="neeVal"
            />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-select
              dense
              v-model="selExposure"
              multiple
              use-chips
              map-options
              emit-value
              option-label="text"
              :options="getExposure"
              label="Exposure History"
              style="width: 250px"
              @input="neeVal"
            />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-select
              v-model="selUnderlying"
              multiple
              dense
              use-chips
              map-options
              emit-value
              option-label="text"
              :options="getUnderlying"
              label="Underlying Conditions"
              style="width: 250px"
              @input="neeVal"
            />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-select
              dense
              v-model="selProgress"
              multiple
              use-chips
              map-options
              emit-value
              option-label="text"
              :options="getProgress"
              label="Progress"
              style="width: 250px"
              @input="neeVal"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "MainLayout",

  mounted: function() {
    this.neeVal();
    this.fetchDistrict();
    this.fetchOptions();
  },
  methods: {
    ...mapActions("covid", ["search", 'fetchDistrict', 'fetchOptions']),
    neeVal(val) {
      var requestObject = {
        fromDate: new Date(this.fromDate),
        toDate: new Date(this.toDate),
        ageLTE: this.age.max,
        ageGTE: this.age.min,
        gender: this.selGender === null ? [] : this.selGender,
        temperature: this.selTemp === null ? [] : this.selTemp,
        addSymptoms: this.selAdditional === null ? [] : this.selAdditional,
        district: this.selDistrict === null ? [] : this.selDistrict,
        risk: this.selRisk === null ? [] : this.selRisk,
        symptoms: this.selSymptoms === null ? [] : this.selSymptoms,
        travelHistory: this.selExposure === null ? [] : this.selExposure,
        progress: this.selProgress === null ? [] : this.selProgress,
        underlying: this.selUnderlying === null ? [] : this.selUnderlying
      };
      console.log(JSON.stringify(requestObject));
      this.search(requestObject);
    },
    hideDate(refName) {
      this.$refs[refName].hide();
    }
  },
  computed: {
    ...mapGetters("covid", [
      "getSymptoms",
      "getTemperature",
      "getAdditional",
      "getDistrict",
      "getGender",
      "getRisk",
      "getExposure",
      "getUnderlying",
      "getProgress"
    ]),
    fromDate: {
      get: function() {
        return this.fDate;
      },
      set: function(val) {
        this.fDate = val;
        this.neeVal();
      }
    },
    toDate: {
      get: function() {
        return this.tDate;
      },
      set: function(val) {
        this.tDate = val;
        this.neeVal();
      }
    }
  },
  data() {
    return {
      age: {
        min: 10,
        max: 45
      },
      risk: "one",
      selTemp: null,
      selSymptoms: null,
      selAdditional: null,
      selDistrict: null,
      selGender: null,
      selRisk: null,
      selExposure: null,
      selUnderlying: null,
      selProgress: null,
      fDate: "2020-01-01",
      tDate: "2020-06-01"
    };
  }
};
</script>

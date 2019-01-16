<template>
  <div class="home">
    <tdd-sort
      :selected-sort="sortObj"
      @sort="sorting"
    ></tdd-sort>
    <hr style="margin: 20px 0px">
    <div
      v-for="item in planList"
      :key="item.id"
    >
      <div> {{ item.name }}</div>
      <div> {{ item.price }}</div>
      <div> {{ item.time.format('YYYY-MM-DD') }}</div>
      <hr>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import TddSort from "@/components/sort";
import _ from "lodash";
export default {
  name: "home",
  components: {
    TddSort
  },
  data() {
    return {
      planList: [
        {
          id: "p-id-1",
          name: "a-p-name",
          price: 2000,
          time: moment("2010-01-05")
        },
        {
          id: "p-id-3",
          name: "a-p-name",
          price: 1000,
          time: moment("2009-01-05")
        },
        {
          id: "p-id-2",
          name: "c-p-name",
          price: 1000,
          time: moment("2003-01-05")
        }
      ],
      sortObj: {
        sortBy: "time",
        order: "asc"
      }
    };
  },
  methods: {
    sorting(value) {
      this.sortObj = _.clone(value);
      let sortBy = value.sortBy;
      let order = value.order;
      this.planList = _.orderBy(this.planList, [sortBy], [order]);
    }
  }
};
</script>

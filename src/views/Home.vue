<template>
  <div class="home">
    <tdd-sort :sort-options="sortOptions" :selected-sort="sortObj" @sort="sorting"></tdd-sort>
    <hr style="margin: 20px 0px">
    <div v-for="item in planList" :key="item.id">
      <div>{{ item.name }}</div>
      <div>{{ item.price }}</div>
      <div>{{ item.time.format('YYYY-MM-DD') }}</div>
      <hr>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import TddSort from '@/components/sort'
import _ from 'lodash'
import sortService from '@/service/sort.js'
export default {
  name: 'home',
  components: {
    TddSort
  },
  data() {
    return {
      planList: [
        {
          id: 'p-id-1',
          name: 'a-p-name',
          price: 2000,
          time: moment('2010-01-05')
        },
        {
          id: 'p-id-3',
          name: 'a-p-name',
          price: 1000,
          time: moment('2009-01-05')
        },
        {
          id: 'p-id-2',
          name: 'c-p-name',
          price: 1000,
          time: moment('2003-01-05')
        }
      ],
      sortObj: {
        sortBy: 'time',
        order: 'desc'
      },
      sortOptions: [
        {
          label: '时间升序',
          sortIndex: '1',
          order: 'asc',
          sortBy: 'time'
        },
        {
          label: '时间降序',
          sortIndex: '2',
          order: 'desc',
          sortBy: 'time'
        },
        {
          label: '价格升序',
          sortIndex: '3',
          order: 'asc',
          sortBy: 'price'
        }
      ]
    }
  },
  methods: {
    sorting(value) {
      this.sortObj = _.clone(value)
      this.planList = sortService.sorting(value, this.planList)
    }
  }
}
</script>

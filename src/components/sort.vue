<template>
  <div>
    <p class="sort-title">{{ sortTitle }}</p>
    <div class>
      <div class v-for="(item, index) in sortedOptions" :key="index">
        <input
          :value="item.value"
          :checked="isChecked(item.value)"
          @input="sortHandler"
          type="radio"
        >
        <label :for="item.value">{{ item.label }}</label>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'sort',
  data() {
    return {
      sortValue: ''
    }
  },
  props: {
    sortTitle: {
      type: String,
      default() {
        return '排序'
      }
    },
    sortOptions: {
      type: Array,
      required: true
    },
    selectedSort: {
      type: Object,
      required: true
    }
  },
  computed: {
    sortedOptions() {
      let sortedOptions = _.sortBy(this.sortOptions, 'sortIndex')
      return _.map(sortedOptions, o => {
        return {
          label: o.label,
          value: o.sortBy + ':' + o.order
        }
      })
    }
  },
  methods: {
    sortHandler(e) {
      let value = e.target.value
      this.sortValue = value
      let sortObj = this.convertValueToSortObj(value)
      if (!sortObj) {
        return
      }
      this.$emit('sort', sortObj)
    },
    convertValueToSortObj(value) {
      if (!value) {
        return null
      }
      let arr = value.split(':')
      if (arr.length !== 2) {
        return null
      }

      return {
        sortBy: arr[0],
        order: arr[1]
      }
    },
    isChecked(value) {
      return value === this.sortValue
    }
  },
  watch: {
    selectedSort: {
      handler(val) {
        if (!val) {
          return
        }
        this.sortValue = val.sortBy + ':' + val.order
      },
      immediate: true
    }
  }
}
</script>

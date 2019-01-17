import _ from 'lodash'
export default {
    sorting(value, planList) {
        let sortBy = value.sortBy
        let order = value.order
        return _.orderBy(planList, [sortBy], [order])
    }
}
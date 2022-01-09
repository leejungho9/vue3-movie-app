<template>
  <div class="container">
    <input
      v-model="title"
      type="text"
      class="form-control"
      placeholder="Search for Movies, Series & more"
      @keyup.enter="apply" />
    <div class="selects">
      <select 
        v-for="filter in filters"
        v-model="$data[filter.name]"
        :key="filter.name"
        class="form-select">
        <option
          v-if="filter.name === 'year'"
          value="">
          All Years
        </option>
        <option
          v-for="item in filter.items"
          :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <button
      class="btn btn-primary"
      @click="apply">
      Apple
    </button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            title : '',
            type : 'movie',
            number : 10,
            year : '',
            filters : [
                {
                    name : 'type',
                    items : ['movie', 'series', 'episode']
                },
                {
                    name : 'number',
                    items : [10, 20, 30]
                },
                {
                    name : 'year',
                    items : (() => {
                        const years = []
                        const thisYear = new Date().getFullYear()
                        for (let i = thisYear; i >= 1985; i -= 1) {
                            years.push(i)
                        }
                        return years
                    })()
                },
                
            ]
        }
    },
    methods : {
    async apply() {
         const KEY ='7035c60c'
         const res = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${this.title}&type=${this.type}&y=${this.year}&page=1`)
         console.log(res)
        }
    }
}
</script>

<style lang ="scss" scoped>
.container {
    display: flex;
    > * {
        font-size : 15px;
        margin-right: 10px;
        &:last-child {
            margin-right: 0;
        }
    }
    .selects {
        display: flex;
        select {
            width: 120px;
            margin-right: 10px;
            &:last-child {
                margin-right : 0;
            }
        }
    }
    .btn {
        width:120px;
        height : 50px;
        font-weight: 700;
        flex-shrink: 0; /* 크기가 감소하지 않도록 설정 */
    }
}
</style>
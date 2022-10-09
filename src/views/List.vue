<template>
  <div class="p-vlmlist">
    <div class="header">
      <div class="title">Helloworld</div>
      <input type="search" class="search-input" autofocus v-model="searchKey" @search="handleSearch" clearable />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  },
})
export default class VlmList extends Vue {
  pageParams = {
    pageSize: 10,
    pageNum: 1,
    total: 0,
  };

  loading = false;
  finished = false;
  searchKey = "";

  mounted() {
  }

  async handleSearch() {
  }

  resetPageParams() {
    this.pageParams = {
      pageSize: 10,
      pageNum: 1,
      total: 0,
    };
  }

  handleClear() {
  }
}
</script>

<style lang="less" scoped>
.p-vlmlist {
  .header {
    background-color: #fff;
    padding: 16px;

    .title {
      margin-top: 8px;
      font-size: 24px;
      line-height: 34px;
      color: #040b29;
    }

    .van-search {
      margin-top: 16px;
    }

    .search-input {
      margin-top: 16px;
      width: 100%;
    }
  }
}
</style>

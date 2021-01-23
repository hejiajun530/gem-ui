<template>
  <div class="table">
    <g-table :data="tableData">
      <g-tableColumn
        prop="date"
        label="日期"
        width="180">
      </g-tableColumn>
      <g-tableColumn
        prop="name"
        label="姓名">
      </g-tableColumn>
    </g-table>
  </div>
</template>

<script>
import table from "@/components/table/index";
import tableColumn from "@/components/table/tableColumn";
export default {
  components: {
    "g-table": table,
    "g-tableColumn": tableColumn,
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
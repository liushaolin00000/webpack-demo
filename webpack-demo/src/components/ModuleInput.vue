<template>
  <!-- 如果给组件传递了v-model,相当于传递了两个属性 value和 @input -->
  <!-- @input为每次输入框输入的时候都会触发事件 -->
  <!-- :class是对象的时候，key是class的名称，如果这个key值是true的话加上该class -->
  <div>
    <input
      type="text"
      :placeholder="text"
      :value="value"
      @input="handleInput"
      :class="{success:status==='success',error:status==='error'}"
      @change="handleChange"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: ""
    };
  },
  props: ["text", "value", "rule", "err_message"],
  methods: {
    handleInput(event) {
      if (event.target.value) {
        //每次在输入框输入内容，都将输入框的内容发送给父组件
        this.$emit("input", event.target.value);
        //每次输入框输入内容都会执行输入框内容的校验
        if (this.rule.test(event.target.value)) {
          this.status = "success";
        } else {
          this.status = "error";
        }
      }
    },
    handleChange() {
      if (!this.rule.test(event.target.value)){
         this.$toast.fail(this.err_message)
      }
    }
  }
};
</script>

<style lang='less' scoped>
input {
  width: 100%;
  border: none;
  border-bottom: 2px solid #757575;
  height: 50/360 * 100vw;
  margin-top: 20/360 * 100vw;
  font-size: 18/360 * 100vw;
  background-color: #f2f2f2;
}
.success {
  border-bottom: 2px solid green;
}
.error {
  border-bottom: 2px solid red;
}
</style>
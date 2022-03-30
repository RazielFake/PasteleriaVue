<template>
  <div>
    <FormulateInput
      label="Favorite B10 football team?"
      :type="type"
      name="team"
      :options="{nebraska: 'Nebraska', ohiost: 'Ohio St.', michigan: 'Michigan'}"
      value="nebraska"
      error-behavior="live"
      validation="required|matches:nebraska"
      validation-name="Team name"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: 'select',
      types: {
        select: 'Select list',
        radio: 'Radio list',
        text: 'Text field',
        textarea: 'Text area',
        checkbox: 'checkbox',
      }
    }
  }
}
</script>



<style scoped>
.element{
    width: 100%;
    height: 300px;
    background-color: lightgoldenrodyellow;
}
</style>
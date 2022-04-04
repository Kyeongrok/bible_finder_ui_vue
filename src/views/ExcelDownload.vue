<template>
  <vue-excel-xlsx
      :data="data"
      :columns="columns"
      :file-name="'filename'"
      :file-type="'xlsx'"
      :sheet-name="'sheetname'"
  >
    Download
  </vue-excel-xlsx>
</template>

<script>

export default {
  name: 'ExcelDownload',
  data() {
    return {
      columns : [
        {
          label: "Product",
          field: "product",
        },
        {
          label: "Price",
          field: "price",
          dataFormat: this.priceFormat
        },
        {
          label: "Quantity",
          field: "quantity",
        },
        {
          label: "Country",
          field: "address.country",
        },
        {
          label: "City",
          field: "address.city",
        }
      ],
      data : [
        {
          product: "Beverage",
          price: 10,
          quantity: 2,
          address: {
            country: 'Armenia',
            city: 'Yerevan',
          }
        },
        {
          product: "Snack",
          price: 12,
          quantity: 6,
          address: {
            country: 'Armenia',
            city: 'Yerevan',
          }
        },
        {
          product: "Beverage",
          price: 10,
          quantity: 5,
          address: {
            country: 'Armenia',
            city: 'Yerevan',
          }
        },
        {
          product: "Snack",
          price: 12,
          quantity: 3,
          address: {
            country: 'Armenia',
            city: 'Yerevan',
          }
        }
      ],
    }
  },
  methods: {
    priceFormat(value){
      return '$ ' + value;
    }
  }
}
</script>

<style>
</style>

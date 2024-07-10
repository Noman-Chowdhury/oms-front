<script setup>
import {onMounted, ref, shallowRef} from "vue";
import {useRouter} from "vue-router";

import DigiDataTable from "@/components/datatable/DigiDataTable.vue";
import TableFilterOption from "@/components/datatable/TableFilterOption.vue";
import ProductTableAction from "@/components/DatatableAction/ProductTableAction.vue";
import ProductInfoComponent from "@/components/product/ProductInfoComponent.vue";
import ProductRatingComponent from "@/components/product/ProductRatingComponent.vue";
import ProductTableFilterOption from "@/components/product/ProductTableFilterOption.vue";
import PagePanelHeader from "@/components/PagePanelHeader.vue";
import ProductTableHeaderComponent from "@/components/product/ProductTableHeaderComponent.vue";

const productActionComponent = shallowRef(ProductTableAction);
const productInfoComponent = shallowRef(ProductInfoComponent);
const producRatingComponent = shallowRef(ProductRatingComponent);

const router = useRouter();

const table = ref(null);
const selectedItems = ref([]);
const isSearch = ref(true);

const tableColumns = ref([
  { label: "", key: "selected", type: "checkbox" },
  { label: "Product", key: "product", sortable: true, type: "component" },
  { label: "SKU", key: "sku" },
  { label: "Stock", key: "stock", sortable: true },
  { label: "Price", key: "price", sortable: true },
  { label: "Sales", key: "sales" },
  { label: "Rating", key: "rating", type: "component" },
  { label: "Published", key: "published" },
  { label: "Action", key: "action", type: "component" },
]);

const tableData = ref([
  { id: 1, product: {component: productInfoComponent, data: {name: 'A4TECH BH300 Bluetooth Wireless Headset', image: new URL('/src/assets/images/product-img-1.jpg', import.meta.url), category_name: 'electronics/music' }}, sku: 'CSJ0158', stock: '12', price: '$560', sales: '258', rating: producRatingComponent, published: "12/24/2023 01:05 PM", action: productActionComponent },
  { id: 2, product: {component: productInfoComponent, data: {name: 'Premium Blend Tea', image: new URL('/src/assets/images/product-img-4.jpg', import.meta.url), category_name: 'Drink/tea' }}, sku: 'CSJ0158', stock: '12', price: '$560', sales: '258', rating: producRatingComponent, published: "12/24/2023 01:05 PM", action: productActionComponent },
  { id: 3, product: {component: productInfoComponent, data: {name: 'Chris Adams Body Spray Classic Denim', image: new URL('/src/assets/images/product-img-3.jpg', import.meta.url), category_name: 'Fashion/perfume' }}, sku: 'CSJ0158', stock: '12', price: '$560', sales: '258', rating: producRatingComponent, published: "12/24/2023 01:05 PM", action: productActionComponent },
  { id: 4, product: {component: productInfoComponent, data: {name: 'A4TECH BH300 Bluetooth Wireless Headset', image: new URL('/src/assets/images/image.png', import.meta.url), category_name: 'electronics/music' }}, sku: 'CSJ0158', stock: '12', price: '$560', sales: '258', rating: producRatingComponent, published: "12/24/2023 01:05 PM", action: productActionComponent },
  { id: 5, product: {component: productInfoComponent, data: {name: 'Premium Blend Tea', image: new URL('/src/assets/images/product-img-4.jpg', import.meta.url), category_name: 'Drink/tea' }}, sku: 'CSJ0158', stock: '12', price: '$560', sales: '258', rating: producRatingComponent, published: "12/24/2023 01:05 PM", action: productActionComponent },
  { id: 6, product: {component: productInfoComponent, data: {name: 'Chris Adams Body Spray Classic Denim', image: new URL('/src/assets/images/product-img-3.jpg', import.meta.url), category_name: 'Fashion/perfume' }}, sku: 'CSJ0158', stock: '12', price: '$560', sales: '258', rating: producRatingComponent, published: "12/24/2023 01:05 PM", action: productActionComponent },
  { id: 7, product: {component: productInfoComponent, data: {name: 'A4TECH BH300 Bluetooth Wireless Headset', image: new URL('/src/assets/images/product-img-1.jpg', import.meta.url), category_name: 'electronics/music' }}, sku: 'CSJ0158', stock: '12', price: '$560', sales: '258', rating: producRatingComponent, published: "12/24/2023 01:05 PM", action: productActionComponent },
  { id: 8, product: {component: productInfoComponent, data: {name: 'Premium Blend Tea', image: new URL('/src/assets/images/product-img-4.jpg', import.meta.url), category_name: 'Drink/tea' }}, sku: 'CSJ0158', stock: '12', price: '$560', sales: '258', rating: producRatingComponent, published: "12/24/2023 01:05 PM", action: productActionComponent },
  { id: 9, product: {component: productInfoComponent, data: {name: 'Chris Adams Body Spray Classic Denim', image: new URL('/src/assets/images/product-img-3.jpg', import.meta.url), category_name: 'Fashion/perfume' }}, sku: 'CSJ0158', stock: '12', price: '$560', sales: '258', rating: producRatingComponent, published: "12/24/2023 01:05 PM", action: productActionComponent },
  { id: 10, product: {component: productInfoComponent, data: {name: 'A4TECH BH300 Bluetooth Wireless Headset', image: new URL('/src/assets/images/image.png', import.meta.url), category_name: 'electronics/music' }}, sku: 'CSJ0158', stock: '12', price: '$560', sales: '258', rating: producRatingComponent, published: "12/24/2023 01:05 PM", action: productActionComponent },
  { id: 12, product: {component: productInfoComponent, data: {name: 'Premium Blend Tea', image: new URL('/src/assets/images/product-img-4.jpg', import.meta.url), category_name: 'Drink/tea' }}, sku: 'CSJ0158', stock: '12', price: '$560', sales: '258', rating: producRatingComponent, published: "12/24/2023 01:05 PM", action: productActionComponent },
  { id: 13, product: {component: productInfoComponent, data: {name: 'Chris Adams Body Spray Classic Denim', image: new URL('/src/assets/images/product-img-3.jpg', import.meta.url), category_name: 'Fashion/perfume' }}, sku: 'CSJ0158', stock: '12', price: '$560', sales: '258', rating: producRatingComponent, published: "12/24/2023 01:05 PM", action: productActionComponent },
  { id: 14, product: {component: productInfoComponent, data: {name: 'A4TECH BH300 Bluetooth Wireless Headset', image: new URL('/src/assets/images/product-img-1.jpg', import.meta.url), category_name: 'electronics/music' }}, sku: 'CSJ0158', stock: '12', price: '$560', sales: '258', rating: producRatingComponent, published: "12/24/2023 01:05 PM", action: productActionComponent },
  { id: 15, product: {component: productInfoComponent, data: {name: 'Premium Blend Tea', image: new URL('/src/assets/images/product-img-4.jpg', import.meta.url), category_name: 'Drink/tea' }}, sku: 'CSJ0158', stock: '12', price: '$560', sales: '258', rating: producRatingComponent, published: "12/24/2023 01:05 PM", action: productActionComponent },
  { id: 16, product: {component: productInfoComponent, data: {name: 'Chris Adams Body Spray Classic Denim', image: new URL('/src/assets/images/product-img-3.jpg', import.meta.url), category_name: 'Fashion/perfume' }}, sku: 'CSJ0158', stock: '12', price: '$560', sales: '258', rating: producRatingComponent, published: "12/24/2023 01:05 PM", action: productActionComponent },
])

const dtSearch = ((searchText) => {
  table.value.updateSearch(searchText)
})

onMounted(() => {
})

</script>

<template>
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          Default Data Table
        </div>
        <div class="card-body">
          <digi-data-table
              ref="table"
              :data="tableData"
              :columns="tableColumns"
              :selectedItems="selectedItems"
              @update:selectedItems="selectedItems = $event"
          >
            <template #filterOption="{perPageOptions, updatePerPage}">
              <ProductTableFilterOption :perPageOptions="perPageOptions" :updatePerPage="updatePerPage"/>
            </template>
          </digi-data-table>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>
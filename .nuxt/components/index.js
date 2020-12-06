export { default as Footer } from '../..\\components\\layout\\footer.vue'
export { default as Header } from '../..\\components\\layout\\header.vue'
export { default as Banner } from '../..\\components\\indexpage\\banner.vue'
export { default as Category } from '../..\\components\\indexpage\\category.vue'
export { default as ProductFilter } from '../..\\components\\category\\productFilter.vue'
export { default as SmallProductCard } from '../..\\components\\category\\smallProductCard.vue'
export { default as PopupBuy } from '../..\\components\\product_card\\popupBuy.vue'
export { default as PopupOk } from '../..\\components\\product_card\\popupOk.vue'

export const LazyFooter = import('../..\\components\\layout\\footer.vue' /* webpackChunkName: "components_layout/footer" */).then(c => c.default || c)
export const LazyHeader = import('../..\\components\\layout\\header.vue' /* webpackChunkName: "components_layout/header" */).then(c => c.default || c)
export const LazyBanner = import('../..\\components\\indexpage\\banner.vue' /* webpackChunkName: "components_indexpage/banner" */).then(c => c.default || c)
export const LazyCategory = import('../..\\components\\indexpage\\category.vue' /* webpackChunkName: "components_indexpage/category" */).then(c => c.default || c)
export const LazyProductFilter = import('../..\\components\\category\\productFilter.vue' /* webpackChunkName: "components_category/productFilter" */).then(c => c.default || c)
export const LazySmallProductCard = import('../..\\components\\category\\smallProductCard.vue' /* webpackChunkName: "components_category/smallProductCard" */).then(c => c.default || c)
export const LazyPopupBuy = import('../..\\components\\product_card\\popupBuy.vue' /* webpackChunkName: "components_product_card/popupBuy" */).then(c => c.default || c)
export const LazyPopupOk = import('../..\\components\\product_card\\popupOk.vue' /* webpackChunkName: "components_product_card/popupOk" */).then(c => c.default || c)

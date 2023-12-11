const express = require('express');
const router = express.Router();

const {ProductCreate,GetAllProduct,ProductSliderList,GetProductSliderList,ProductListByBrand,ProductListByCategory,ProductListBySimiler,ProductListByKeyword,ProductListByRemark,ProductDiscription,GetDiscription,ProductReview} = require('../controller/ProductController')

const {CreateCategory,GetCategoryList} = require('../controller/CategoryController')
const {CreateBrandList,GetAllBrandList} = require('../controller/BrandController')
const {CreateFeatured,GetAllFeaturedList} = require('../controller/FeaturedController')

router.post('/ProductCreate',ProductCreate)
router.get('/GetAllProduct',GetAllProduct)

router.post('/CreateCategory',CreateCategory)
router.get('/GetAllProductCategoryList',GetCategoryList)

router.post('/CreateBrandList',CreateBrandList)
router.get('/GetProductBrandList',GetAllBrandList)

router.post('/ProductDiscription',ProductDiscription)
router.get('/GetAllProductDiscription/:ProductID',GetDiscription)

router.post('/ProductSliderList',ProductSliderList)
router.get('/GetProductSliderList',GetProductSliderList)

router.post('/CreateFeatured',CreateFeatured)
router.get('/GetAllFeaturedList',GetAllFeaturedList)

router.get('/ProductListByCategory/:CategoryID',ProductListByCategory)
router.get('/ProductListByBrand/:BrangID',ProductListByBrand)

router.get('/ProductListByRemark/:RemarkID',ProductListByRemark)
router.get('/ProductListBySimiler/:CategoryID',ProductListBySimiler)

router.get('/ProductListByKeyword/:Keyword',ProductListByKeyword)

// router.get('/ProductReview/:ProductID',ProductReview)

module.exports = router
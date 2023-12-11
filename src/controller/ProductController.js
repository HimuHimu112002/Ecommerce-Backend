const {ProductGet,GetProductDetails, GetProductSlide, GetProductBycategory, GetProductByBrand,GetProductByRemark,GetProductBySimiler,GetProductByKeyword} = require('../services/ProductServices')
const ProductModel = require('../model/ProductModel')
const ProductDetails = require('../model/ProductDetails')
const productslidersModel = require("../model/ProductSlideModel")

async function  ProductCreate(req,res){
    const {title,shortDes,price,discount,discountPrice,image,star,stock,remark} = req.body
    let product = new ProductModel({
        title,
        shortDes,
        price,
        discount,
        discountPrice,
        image,
        star,
        stock,
        remark,
    })   
    product.save()
    res.send({success: "Product Created Successfully done"}) 
    
}

async function  GetAllProduct(req,res){
    let result = await ProductGet()
    return res.status(200).json(result)
}

async function  ProductDiscription(req, res){
    const {img1,img2,img3,img4,img5,description,color,size,productID} = req.body
    let productDis = new ProductDetails({
        img1,
        img2,
        img3,
        img4,
        img5,
        description,
        color,
        size,
        productID
    })   
    productDis.save()
    await ProductModel.findOneAndUpdate({_id: productDis.productID}, {$push:{productID:productDis._id}}, {new: true})
    res.send({success: "Productdetail Created Successfully"}) 
}

async function GetDiscription(req, res){
    let result = await GetProductDetails(req)
    return res.status(200).json(result)
}

async function  ProductSliderList(req, res) {
    const {title,description,price,image,productID} = req.body
    let productSlide = new productslidersModel({
        title,
        description,
        price,
        image,
        productID
    })   
    productSlide.save()
    res.send({success: "ProductSlide Created Successfully"})
    await productslidersModel.findOneAndUpdate({_id: productSlide.productID}, {$push:{productID:productSlide._id}}, {new: true})
}

async function  GetProductSliderList(req, res) {
    let result = await GetProductSlide()
    return res.status(200).json(result)
}

async function  ProductListByBrand(req, res) {
    let result = await GetProductByBrand(req)
    return res.status(200).json(result)
}

async function  ProductListByCategory(req, res) {
    let result = await GetProductBycategory(req)
    return res.status(200).json(result)
}

async function  ProductListBySimiler(req, res) {
    let result = await GetProductBySimiler(req)
    return res.status(200).json(result)
}

async function  ProductListByKeyword(req, res) {
    let result = await GetProductByKeyword(req)
    return res.status(200).json(result)
}

async function  ProductListByRemark(req, res) {

}

async function  ProductListByRivew(req, res) {
    
}

module.exports = {ProductCreate,GetAllProduct,ProductSliderList,GetProductSliderList,ProductListByBrand,ProductListByCategory,ProductListBySimiler,ProductListByKeyword,ProductListByRemark,GetDiscription,ProductDiscription}
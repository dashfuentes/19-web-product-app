import Product from '../models/Product.js'

export const createProduct = async (req,res) =>{
    const {name, category, price, imageURL} = req.body
    const newProduct = new Product({name:name, category:category,price:price,imageUrl:imageURL})
    const productSaved = await newProduct.save()
    res.status(201).json(productSaved);
}

export const getProducts = async (req,res) =>{
    const products = await Product.find()
    res.status(200).json(products)
}

export const getProductById = async (req,res) =>{
    const {productId} = req.params.productId
    const product = await Product.findById(productId)
    res.status(200).json(product)
}

export const updateProductById = async (req,res) =>{
    const {productId} = req.params.productId
    const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, {
        new:true
    })
    res.status(200).json(updatedProduct)
}

export const deleteProductById = async (req,res) =>{
    const {productId} = req.params.productId
    //const deletedProduct = 
    await Product.findByIdAndDelete(productId)
    res.status(204).json() 
}
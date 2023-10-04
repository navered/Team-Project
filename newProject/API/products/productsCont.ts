import { log } from "console";
import ProductModel from "./productsModel";
import   {  UserModel }  from "../users/usersModel";

export async function getProducts(req: any, res: any) {
  try {
    const productsDB = await ProductModel.find({});
    console.log(productsDB);
    if (!productsDB) throw new Error("No Products");
    res.send({ products: productsDB });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}

export async function createProduct(req:any, res:any) {
  try {
    const { newProd } = req.body;
    log(newProd);
    // const findOwner = await UserModel.findOne({ email: userEmail });
    // if (!findOwner) throw new Error("Couldnt find owner");
    const product = new ProductModel({
      productName: newProd.productName,
      description: newProd.description,
      category: newProd.category,
      vendor: newProd.vendor,
      price: newProd.price,
      imgUrl: newProd.imgUrl
    });
    const productDB = await product.save();

    // res.send({ ok: true, newProduct: productDB });
    res.status(201).json({ ok: true, newProduct: productDB });
  } catch (error) {
    console.error("Error in createProduct:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
}





export async function getProductByOwnerEmail(req, res) {
  try {
    const userEmail = req.query.email;
    if (!userEmail) throw new Error("email not found");
    const usersProducts = await ProductModel.find({ email: userEmail });
    console.log(usersProducts);
    if (!usersProducts) throw new Error("user's products not found");
    res.send({ usersProducts });
  } catch (error) {
    console.error(error);
  }
}

export async function updateProductInfo(req, res) {
  try {
    const { id, title, price, description } = req.body;
    log(id, title, price, description);
    const currentProduct = await ProductModel.findOneAndUpdate(
      { _id: id },
      { title, price, description },
    );
    log(currentProduct);
    if (!currentProduct) {
      throw new Error("product not found");
    }
    console.log("updated successfully");

    res.send({ ok: true });
  } catch (error) {
    console.error(error.massage);
  }
}

export async function deleteProduct(req, res) {
  try {
    const { id } = req.body;
    const currentProduct = await ProductModel.findOneAndDelete({ id: id });
    if (!currentProduct) {
      return res.status(404).json({ message: "מוצר לא נמצא" });
    }
    res.send({ ok: true });
    log("delete success");
  } catch (error) {
    console.error(error.massage);
  }
}

export async function getAllProducts(req, res) {
  try {
    const products = await ProductModel.find({});
    res.send({ products });
  } catch (error) {
    console.error(error.massage);
  }
}

export async function addProductToCart(req, res) {
  try {
    const { id, userEmail } = req.body;
    const newCustomer = ProductModel.findOneAndUpdate(
      { _id: id, customersCart: { $ne: userEmail } },
      { $addToSet: { customersCart: userEmail } },
      { new: true },
    );
    if (!newCustomer)
      throw new Error(
        "Customer not found or already add this product to his cart",
      );
    res.send({ ok: true });
  } catch (error) {
    console.error(error.massage);
  }
}

export async function addProductToWishList(req, res) {
  try {
    const { id, userEmail } = req.body;
    const newCustomer = ProductModel.findOneAndUpdate(
      { _id: id, customersWishList: { $ne: userEmail } },
      { $addToSet: { customersWishList: userEmail } },
      { new: true },
    );
    if (!newCustomer)
      throw new Error(
        "Customer not found or already add this product to his wishList",
      );
    res.send({ ok: true });
  } catch (error) {
    console.error(error.massage);
  }
}

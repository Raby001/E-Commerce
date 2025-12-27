<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category; 
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    // --- GET /api/products
    public function getProducts()
    {
        $products = Product::with('category')->get(); 
        return response()->json($products);
    }

    // --- POST /api/products
    public function createProduct(Request $request)
    {
        $product = Product::create([
            'name' => $request->input('name'),
            'category_id' => $request->input('category_id'),
            'pricing' => $request->input('pricing'),
            'description' => $request->input('description'),
            'images' => $request->input('images', json_encode([])) 
        ]);
        return response()->json($product, 201);
    }

    // --- GET /api/products/{productId}
    public function getProduct($productId)
    {
        $product = Product::with('category')->find($productId); 
        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }
        return response()->json($product);
    }

    // --- PATCH /api/products/{productId}
    public function updateProduct($productId, Request $request)
    {
        $product = Product::find($productId);
        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }

        $product->update([
            'name' => $request->input('name'),
            'category_id' => $request->input('category_id'),
            'pricing' => $request->input('pricing'),
            'description' => $request->input('description'),
            'images' => $request->input('images', $product->images)
        ]);

        return response()->json($product);
    }

    // --- DELETE /api/products/{productId}
    public function deleteProduct($productId)
    {
        $product = Product::find($productId);
        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }

        $product->delete();

        return response()->json(['message' => 'Product deleted']);
    }

    // --- GET /api/categories/{categoryId}/products
    public function getProductsByCategory($categoryId)
    {
        $category = Category::find($categoryId);
        if (!$category) {
            return response()->json(['error' => 'Category not found'], 404);
        }

        $products = Product::where('category_id', $categoryId)->get();
        return response()->json($products);
    }
}
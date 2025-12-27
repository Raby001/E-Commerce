<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\CategoryController;
use \App\Http\Controllers\ProductController;

// Category Routes
Route::controller(CategoryController::class)->prefix('categories')->group(function () {
    Route::get('/', 'getCategories');           // GET /api/categories
    Route::post('/', 'createCategory');          // POST /api/categories
    Route::get('/{categoryId}', 'getCategory');   // GET /api/categories/{id}
    Route::patch('/{categoryId}', 'updateCategory'); // PATCH /api/categories/{id}
    Route::delete('/{categoryId}', 'deleteCategory'); // DELETE /api/categories/{id}
});

// Product Routes
Route::controller(ProductController::class)->prefix('products')->group(function () {
    Route::get('/', 'getProducts');              // GET /api/products
    Route::post('/', 'createProduct');            // POST /api/products
    Route::get('/{productId}', 'getProduct');      // GET /api/products/{id}
    Route::patch('/{productId}', 'updateProduct'); // PATCH /api/products/{id}
    Route::delete('/{productId}', 'deleteProduct'); // DELETE /api/products/{id}
});
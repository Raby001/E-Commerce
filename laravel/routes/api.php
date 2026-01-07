<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\CategoryController;
use \App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Auth;

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


Route::post('/login', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required'
    ]);

    if (!Auth::attempt($request->only('email','password'))) {
        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    $user = $request->user();

    // Create token and get plain text
    $tokenResult = $user->createToken('mobile');

    return response()->json([
        'token' => $tokenResult->plainTextToken ?? $tokenResult->accessToken,
        'user' => $user->load('roles')
    ]);
});



Route::middleware('auth:api')->group(function () {

    // Get current user
    Route::get('/me', fn(Request $r) => $r->user()->load('roles'));

    // Only admin/manager can create products
    Route::post('/products', function (Request $request) {
        abort_unless($request->user()->can('products.create'), 403);
        // create product logic here
        return response()->json(['message' => 'Product created']);
    });

    // Only assigned staff can update category status (using policy)
    Route::patch('/categories/{category}/status', function (\App\Models\Category $category, Request $request) {
        $this->authorize('updateStatus', $category);
        $category->status = $request->status;
        $category->save();
        return response()->json(['message' => 'Category status updated']);
    });
});

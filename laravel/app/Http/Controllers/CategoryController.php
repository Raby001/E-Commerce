<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
    // --- GET /api/categories
    public function getCategories()
    {
        $categories = Category::all(); 
        return response()->json($categories); 
    }

    // --- POST /api/categories
    public function createCategory(Request $request)
    {
        $category = Category::create([
            'name' => $request->input('name') 
        ]);
        return response()->json($category, 201);
    }

    // --- GET /api/categories/{categoryId}
    public function getCategory($categoryId)
    {
        $category = Category::find($categoryId);
        if (!$category) {
            return response()->json(['error' => 'Category not found'], 404);
        }
        return response()->json($category);
    }

    // --- PATCH /api/categories/{categoryId}
    public function updateCategory($categoryId, Request $request)
    {
        $category = Category::find($categoryId);
        if (!$category) {
            return response()->json(['error' => 'Category not found'], 404);
        }

        $category->update([
            'name' => $request->input('name')
        ]);

        return response()->json($category);
    }

    // --- DELETE /api/categories/{categoryId}
    public function deleteCategory($categoryId)
    {
        $category = Category::find($categoryId);
        if (!$category) {
            return response()->json(['error' => 'Category not found'], 404);
        }

        $category->delete();

        return response()->json(['message' => 'Category deleted']);
    }


    public function show(Category $category)
    {
        $this->authorize('view', $category); // checks if the user can view this category
        return view('categories.show', compact('category'));
    }

    public function updateStatus(Category $category)
    {
        $this->authorize('updateStatus', $category); // checks if user can update
        $category->status = 'completed';
        $category->save();
        return redirect()->back();
    }

}
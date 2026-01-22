<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use App\Models\Author;

class ArticleController extends Controller
{
    // Create Article
    public function store(Request $request)
    {
        $author = Author::findOrFail($request->author_id);

        $article = $author->articles()->create([
            'name' => $request->name,
        ]);

        return response()->json($article, 201);
    }

    // Get audiences of an article
    public function audiences($id)
    {
        $article = Article::findOrFail($id);
        return response()->json($article->audiences);
    }
}

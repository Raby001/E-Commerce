<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Audience;
use App\Models\Article;

class SubscriptionController extends Controller
{
    // Subscribe audience to articles
    public function store(Request $request)
    {
        $audience = Audience::findOrFail($request->audience_id);
        $audience->articles()->attach($request->article_ids);

        return response()->json(['message' => 'Subscribed successfully']);
    }
}

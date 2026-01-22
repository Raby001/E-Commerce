<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;

class CommentController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'commentable_id' => 'required|integer',
            'commentable_type' => 'required|string',
            'content' => 'required|string',
        ]);

        $user = $request->user();

        if (!$user) {
            return response()->json(['message' => 'Unauthenticated'], 401);
        }

        $comment = Comment::create([
            'content' => $request->content,
            'user_id' => $user->id,
            'commentable_id' => $request->commentable_id,
            'commentable_type' => $request->commentable_type,
        ]);

        return response()->json($comment, 201);
    }

}

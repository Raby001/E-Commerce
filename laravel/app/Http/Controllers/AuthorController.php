<?php
namespace App\Http\Controllers;

use App\Models\Author;
use App\Models\User;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    /**
     * Create a new author + user
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:6',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        $author = Author::create([
            'name' => $request->name,
            'user_id' => $user->id,
        ]);

        return response()->json($author, 201);
    }

    /**
     * GET /api/authors/{author}/articles
     */
    public function articles(Author $author)
    {
        return response()->json(
            $author->articles()->with('audiences')->get()
        );
    }

    /**
     * GET /api/authors/{author}/audiences
     */
    public function audiences(Author $author)
    {
        return response()->json($author->audiences());
    }

}

<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Audience;
use App\Models\User;

class AudienceController extends Controller
{
    // Create Audience + User
    public function store(Request $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        $audience = Audience::create([
            'name' => $request->name,
            'user_id' => $user->id
        ]);

        return response()->json($audience, 201);
    }

    // Get comments of an audience
    public function comments($id)
    {
        $audience = Audience::findOrFail($id);
        return response()->json($audience->comments);
    }
}

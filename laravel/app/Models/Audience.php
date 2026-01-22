<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;

use App\Models\User;
use App\Models\Article;
use App\Models\Comment;

class Audience extends Model
{
    protected $fillable = ['name', 'user_id'];

    // Audience belongs to user
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    // Audience can subscribe to many articles (many-to-many)
    public function articles(): BelongsToMany
    {
        return $this->belongsToMany(Article::class, 'article_audience', 'audience_id', 'article_id');
    }

    // Audience has many comments (polymorphic)
    public function comments(): MorphMany
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}

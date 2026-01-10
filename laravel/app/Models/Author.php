<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Author extends Model
{
    protected $fillable = ['user_id'];

    // Author belongs to user
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    // Author wrote many articles
    public function articles(): HasMany
    {
        return $this->hasMany(Article::class);
    }

    // Author has many comments (polymorphic)
    public function comments(): MorphMany
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    // Author has many audiences through articles
    public function audiences(): HasManyThrough
    {
        return $this->hasManyThrough(Audience::class, Article::class);
    }
}


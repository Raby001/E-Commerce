<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Author extends Model
{
    protected $fillable = ['name', 'user_id'];

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

    // All audiences across all author's articles (many-to-many via pivot)
    public function audiences()
    {
        return $this->articles()->with('audiences')
            ->get()
            ->pluck('audiences') 
            ->flatten() 
            ->unique('id')
            ->values();
    }
}


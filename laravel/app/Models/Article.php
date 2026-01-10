<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Article extends Model
{
    protected $fillable = ['author_id', 'title'];

    // Article belongs to an author
    public function author(): BelongsTo
    {
        return $this->belongsTo(Author::class);
    }

    // Article can have many audiences
    public function audiences(): BelongsToMany
    {
        return $this->belongsToMany(Audience::class, 'article_audience', 'article_id', 'audience_id');
    }

    // Article has many comments (polymorphic)
    public function comments(): MorphMany
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    // Only allow mass assignment for non-sensitive fields
    protected $fillable = [
        'name',
        'category_id',
        'pricing',
        'description',
        'images'
    ];

    // Optional: Define relationship to Category
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
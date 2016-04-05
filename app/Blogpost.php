<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Blogpost extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'blogposts';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title','content','author','author_bio'
    ];

}
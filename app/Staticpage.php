<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Staticpage extends Model
{
    public $timestamps = false;
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'staticpages';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'sortid','title','slug','content'
    ];

}

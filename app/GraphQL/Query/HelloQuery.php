<?php

namespace App\GraphQL\Query;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Query;

class HelloQuery extends Query
{
    protected $attributes = [
        'name' => 'hello'
    ];

    public function type()
    {
        return Type::string();
    }

    public function resolve($root, $args)
    {
        return 'hello world';
    }
}

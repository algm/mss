<?php

namespace App\GraphQL\Query;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Query;

class UserQuery extends Query
{
    protected $attributes = [
        'name' => 'user'
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

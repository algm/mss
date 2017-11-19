<?php

namespace Mss\Time\Events;

use Mss\Time\GameTime;

class TimePassed
{
    public $time;

    public function __construct(GameTime $time)
    {
        $this->time = $time;
    }
}

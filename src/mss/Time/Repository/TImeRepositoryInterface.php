<?php
namespace Mss\Time\Repository;

use Illuminate\Support\Carbon;

interface TimeRepositoryInterface
{
    public function current(): Carbon;

    public function set(Carbon $newTime): TimeRepositoryInterface;
}

<?php
namespace Mss\Time\Repository;

use Illuminate\Support\Carbon;

class FakeTimeRepository implements TimeRepositoryInterface
{
    private $current = null;

    public function __construct(int $current = 0)
    {
        $this->current = $current;
    }

    public function current(): Carbon
    {
        return Carbon::createFromTimestamp($this->current);
    }

    public function set(Carbon $newTime): TimeRepositoryInterface
    {
        $this->current = $newTime->timestamp;

        return $this;
    }
}

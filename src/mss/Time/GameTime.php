<?php

namespace Mss\Time;

use Illuminate\Support\Carbon;
use Mss\Time\Events\TimePassed;
use Mss\Time\Repository\TimeRepositoryInterface;

class GameTime
{
    private $current = null;

    private $factor;

    private $repository;

    /**
     * Constructor, sets the time passage factor
     */
    public function __construct(TimeRepositoryInterface $repository, float $factor = null)
    {
        $this->factor = $factor ?? floatval(env('TIME_FACTOR', 1));
        $this->repository = $repository;
    }

    /**
     * Gives the current game time
     */
    public function current(): Carbon
    {
        if ($this->current === null) {
            $this->current = $this->repository->current();
        }

        return $this->current;
    }

    /**
     * Makes the time pass
     */
    public function tick(): GameTime
    {
        $newTimestamp = $this->current()->timestamp + 60 * $this->factor;
        $newTime = Carbon::createFromTimestamp(round($newTimestamp));

        $this->current = $newTime;
        $this->repository->set($newTime);

        event(new TimePassed($this));

        return $this;
    }
}

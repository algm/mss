<?php

namespace Tests\Unit\Time;

use Tests\TestCase;
use Illuminate\Support\Carbon;
use Mss\Time\Repository\DatabaseTimeRepository;
use Illuminate\Foundation\Testing\RefreshDatabase;

class DatabaseTimeRepositoryTest extends TestCase
{
    use RefreshDatabase;

    public function testReadsCurrentTimeFromStorage()
    {
        $repo = new DatabaseTimeRepository;

        $this->assertEquals(0, $repo->current()->timestamp);
    }

    public function testWriteNewTimeIntoStorage()
    {
        $repo = new DatabaseTimeRepository;

        $newtime = $repo->set(Carbon::createFromTimestamp(130))->current();

        $this->assertEquals(130, $newtime->timestamp);
    }
}

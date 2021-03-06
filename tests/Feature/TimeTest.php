<?php

namespace Tests\Feature;

use Tests\TestCase;
use Mss\Time\GameTime;
use Illuminate\Support\Carbon;
use Mss\Time\Events\TimePassed;
use Illuminate\Support\Facades\Event;
use Mss\Time\Repository\FakeTimeRepository;

class TimeTest extends TestCase
{
    public function testTimePassesOnDesiredRates()
    {
        Event::fake();

        $factor = 187714.285714286;

        $time = new GameTime(new FakeTimeRepository, $factor);

        $this->assertEquals(0, $time->current()->timestamp);

        $testDate = Carbon::now()->addHour();
        Carbon::setTestNow($testDate);

        $time->tick();

        Event::assertDispatched(TimePassed::class);

        $this->assertEquals(187714, $time->current()->timestamp);
    }
}

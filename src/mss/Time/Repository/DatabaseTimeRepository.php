<?php
namespace Mss\Time\Repository;

use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Mss\Time\Repository\TimeRepositoryInterface;

class DatabaseTimeRepository implements TimeRepositoryInterface
{
    public function current(): Carbon
    {
        return $this->readDB();
    }

    public function set(Carbon $newTime): TimeRepositoryInterface
    {
        $current = $this->current();

        if ($current->timestamp != $newTime->timestamp) {
            DB::table('time')->update([
                'time' => $newTime->timestamp
            ]);
        }

        return $this;
    }

    private function readDB(): Carbon
    {
        $found = DB::table('time')->first();

        if (empty($found)) {
            DB::table('time')->insert([
                ['time' => 0]
            ]);

            return Carbon::createFromTimestamp(0);
        }

        return Carbon::createFromTimestamp($found->time);
    }
}

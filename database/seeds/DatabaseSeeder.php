<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        DB::table('users')->insert(array(
            ['name' => 'Michael Hall','email' => 'michael@hallandco.digital','password' => \Hash::make('secret'), 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Hoang Ho','email' => 'hoang@hallandco.digital','password' => \Hash::make('secret'), 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'John Doe','email' => 'john@hallandco.digital','password' => \Hash::make('secret'), 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()])
        );
    }
}

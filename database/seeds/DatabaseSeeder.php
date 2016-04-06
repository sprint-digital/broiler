<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use App\User;
use App\Blogpost;
use App\Setting;
use App\Staticpage;
use \App\Role;

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

        DB::table('blogposts')->insert(array(
            ['title' => 'Blog Post Title 1', 'content' => 'Blog Post Content 1', 'author' => 'Admin User', 'author_bio' => 'Admin User\'s Bio', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => 'Blog Post Title 2', 'content' => 'Blog Post Content 2', 'author' => 'Admin User', 'author_bio' => 'Admin User\'s Bio', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]
        ));

        DB::table('settings')->insert(array(
            ['key' => 'Braintree Env', 'value' => 'demo'],
            ['key' => 'Braintree Merchant ID', 'value' => 'zwhb27d7b8tbg7vn'],
            ['key' => 'Braintree Public Key', 'value' => 'xqpfcdvv9nxwvdxh'],
            ['key' => 'Braintree Private Key', 'value' => '38938f7ed30bda7b5bdbcd6d45d0049c'],
        ));

        DB::table('staticpages')->insert(array(
            ['sortid' => '1', 'content' => 'Broiler is a boilerplate design for integrating in laravel and angularjs.', 'title' => 'Home Page', 'slug' => 'homepage', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['sortid' => '2', 'content' => 'We are HallandCo. My name is Nhi and my boss is Michael.', 'title' => 'About Us', 'slug' => 'aboutus', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['sortid' => '3', 'content' => 'Find us at 555 Old Cleveland Road Camp Hill 4152 QLD <br> Or call 0424 150 090 <br> or email info@hallandco.digital', 'title' => 'Contact Us', 'slug' => 'contactus', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]
        ));

        $admin = new Role();
        $admin->name         = 'admin';
        $admin->display_name = 'User Administrator'; // optional
        $admin->description  = 'User is allowed to manage and edit other users'; // optional
        $admin->save();
    }
}

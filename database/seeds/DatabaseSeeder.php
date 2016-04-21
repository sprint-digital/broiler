<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use App\User;
use App\Blogpost;
use App\Setting;
use App\Staticpage;
use \App\Role;
use \App\Permission;

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

        // ===== Setting Database Tables ====== //
        DB::table('users')->insert(array(
            ['name' => 'Michael Hall','email' => 'michael@hallandco.digital','password' => \Hash::make('secret'), 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Hoang Ho','email' => 'hoang@hallandco.digital','password' => \Hash::make('secret'), 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'John Doe','email' => 'john@hallandco.digital','password' => \Hash::make('secret'), 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Sarah Doe','email' => 'sarah@hallandco.digital','password' => \Hash::make('secret'), 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()])
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

        DB::table('coreSettings')->insert(array(
            ['key' => 'Application Name', 'value' => 'Broiler'],
            ['key' => 'Owner\'s Name', 'value' => 'Michael Hall'],
            ['key' => 'Company Name', 'value' => 'HallandCo'],
            ['key' => 'Address', 'value' => '555 Old Cleveland Road Camp Hill 4152 QLD'],
            ['key' => 'Phone', 'value' => '0424 150 090'],
            ['key' => 'Email', 'value' => 'info@hallandco.digital'],
            ['key' => 'Logo', 'value' => 'img/logo.png'],
        ));

        DB::table('staticpages')->insert(array(
            ['sortid' => '1', 'content' => 'Broiler is a boilerplate design for integrating in laravel and angularjs.', 'title' => 'Home Page', 'slug' => 'homepage', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['sortid' => '2', 'content' => 'We are HallandCo. My name is Nhi and my boss is Michael.', 'title' => 'About Us', 'slug' => 'aboutus', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['sortid' => '3', 'content' => 'Find us at 555 Old Cleveland Road Camp Hill 4152 QLD <br> Or call 0424 150 090 <br> or email info@hallandco.digital', 'title' => 'Contact Us', 'slug' => 'contactus', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]
        ));
        // ===== End of Setting Database Tables ====== //
        
        // ===== Setting User Roles ====== //
        $admin = new Role();
        $admin->name         = 'admin';
        $admin->display_name = 'User Administrator'; // optional
        $admin->description  = 'Almighty'; // optional
        $admin->save();

        $owner = new Role();
        $owner->name         = 'owner';
        $owner->display_name = 'Owner'; // optional
        $owner->description  = 'Owner of the website.'; // optional
        $owner->save();

        $staff = new Role();
        $staff->name         = 'staff';
        $staff->display_name = 'Staff'; // optional
        $staff->description  = 'Staff of the website.'; // optional
        $staff->save();

        $userPermission                     = new Permission();
        $userPermission->name               = 'userPermission';
        $userPermission->display_name       = 'Edit, create, delete users'; // optional
        $userPermission->description        = 'Edit, create, delete users'; // optional
        $userPermission->save();

        $staticPagePermission               = new Permission();
        $staticPagePermission->name         = 'staticPagePermission';
        $staticPagePermission->display_name = 'Edit, create, delete static pages'; // optional
        $staticPagePermission->description  = 'Edit, create, delete static pages'; // optional
        $staticPagePermission->save();

        $blogPermission                     = new Permission();
        $blogPermission->name               = 'blogPermission';
        $blogPermission->display_name       = 'Edit, create, delete blog'; // optional
        $blogPermission->description        = 'Edit, create, delete static'; // optional
        $blogPermission->save();

        $galleryPermission =                new Permission();
        $galleryPermission->name            = 'galleryPermission';
        $galleryPermission->display_name    = 'Edit, create, delete gallery'; // optional
        $galleryPermission->description     = 'Edit, create, delete gallery'; // optional
        $galleryPermission->save();

        $admin->attachPermissions(array($userPermission, $staticPagePermission, $blogPermission, $galleryPermission));
        $owner->attachPermissions(array($userPermission, $staticPagePermission, $blogPermission, $galleryPermission));
        $staff->attachPermissions(array($staticPagePermission, $blogPermission, $galleryPermission));

        User::where('name', '=', 'Michael Hall')->first()->attachRole($admin);
        User::where('name', '=', 'Hoang Ho')->first()->attachRole($admin);
        User::where('name', '=', 'John Doe')->first()->attachRole($owner);
        User::where('name', '=', 'Sarah Doe')->first()->attachRole($staff);

        // ===== End of Setting User Roles ====== //


    }
}

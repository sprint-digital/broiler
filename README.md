# Broiler

## Description
Broiler is a Laravel Angular application boilerplate. Built on the solid Laravel (5.2) framework it provides a ready to go web application shell. Out of the box it comes working with the following features:
* User Management
* Public website CMS
* Publi website themes - WIP
* Core settings (logo, integration keys)
* Dynamic extendable settings
* Social Login (Google, Facebook, Twitter & Github with Laravel Socialite) - WIP
* Online payment integration
* Built in Chat - WIP

## More Information
For screenshots, general information and enquiries about Broiler please head over to http://hallandco.digital/our-platform.

## Prerequisites
Broiler will require the following 3rd party accounts for all functionality, the API keys and settings for these are set in the .env (OR application settings TBC):
* Google, Facebook, Github & Twitter API keys for social logins
* A Pusher account for chat (https://pusher.com/ - free sandbox account)
* Braintree payment gateway account and keys

## Installation
1. Either pull straight from github or download as a zip. Unzip to a web server ready to go or local development environment with Composer installed.
2. from the document root run composer update.
3. Setup an empty database schema, Configure the .env file and run php artisan migrate.
4. Register a user (URL /portal/register), login and take it for a spin!

## Team
Broiler is built and maintained by Hall & Co Digital - Hoang Ho and Michael Hall.

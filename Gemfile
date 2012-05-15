source 'http://rubygems.org'

gem 'rails', '3.1.0'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'coffee-rails', "~> 3.1.0"
  gem 'uglifier'
end

gem 'jquery-rails'
gem 'therubyracer'
gem 'inherited_resources'

# Admin
gem 'activeadmin'
gem 'sass-rails', "  ~> 3.1.0"
gem "meta_search",    '>= 1.1.0.pre'

# Use unicorn as the web server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger
# gem 'ruby-debug19', :require => 'ruby-debug'


group :development, :test do
  gem 'sqlite3'
end


group :test do
  # Pretty printed test output
  gem 'turn', :require => false
end

group :production do
  # gems specifically for Heroku go here
  gem "pg"
  gem 'rack-google_analytics'
end

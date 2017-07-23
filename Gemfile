# frozen_string_literal: true

# Organization
# ============
#
# - Keep this list alphabetized.
# - All version constraints must have a documented reason, and a condition
#   under which the constraint can be removed. Constraints which lack this
#   documentation will be lifted without warning.
#
# Gems which should not be installed
# ==================================
#

source 'https://rubygems.org'

ruby '2.4.1'

gem 'devise'

gem 'rails'

gem 'mysql2'

gem 'puma'

gem 'rack-cors'

group :development, :test do
  gem 'byebug', platform: :mri
  gem 'rspec-rails'
  gem 'factory_girl_rails'
end

group :development do
  gem 'listen', '~> 3.0.5'

  # Spring speeds up development by keeping your
  # application running in the background.
  # Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'pry-nav'
  gem 'pry-rails'
  gem 'pry-remote'
  gem 'rubocop'
end

group :test do
  gem 'faker', '~> 1.4.3'
  gem 'capybara', '~> 2.4.3'
  gem 'database_cleaner', '~> 1.3.0'
  gem 'launchy', '~> 2.4.2'
  gem 'selenium-webdriver', '~> 2.53'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
# gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

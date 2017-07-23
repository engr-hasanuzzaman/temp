FactoryGirl.define do
  factory :user do
    email { Faker::Internet.email }
    password 'secret'
    password_confirmation 'secret'
    type 0

    factory :agent do
      type 1
    end

    factory :admin do
      type 2
    end
  end
end
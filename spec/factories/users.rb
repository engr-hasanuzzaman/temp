FactoryGirl.define do
  factory :user do
    email { Faker::Internet.email }
    # password 'secret'
    # password_confirmation 'secret'
    role 0

    factory :agent do
      role 1
    end

    factory :admin do
      role 2
    end
  end
end
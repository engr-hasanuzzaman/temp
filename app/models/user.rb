class User < ApplicationRecord
  #
  # constant & enum
  #

  enum role: %w[general agent admin]

  #
  # validation
  #

  validates :role, presence: true
end

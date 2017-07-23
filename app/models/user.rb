class User < ApplicationRecord
  #
  # constant & enum
  #

  enum type: %w[general agent admin]

  #
  # validation
  #

  validates :type
end

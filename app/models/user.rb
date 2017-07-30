# frozen_string_literal: true

#
class User < ApplicationRecord
  has_secure_password

  enum role: %i[general agent admin]
  validates :email, uniqueness: true
end
